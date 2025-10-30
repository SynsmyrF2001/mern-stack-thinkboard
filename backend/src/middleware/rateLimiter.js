/**
 * The above function is a rate limiter middleware in JavaScript that limits the number of requests
 * based on a specified rate limit.
 * @param req - The `req` parameter typically represents the HTTP request object in Node.js. It
 * contains information about the incoming request such as headers, parameters, body, and more. In the
 * context of your code snippet, `req` is being used as a parameter in the `rateLimiter` function,
 * which
 * @param res - The `res` parameter in the `rateLimiter` function is typically used to send a response
 * back to the client making the request. In this case, if the rate limit check fails and the client
 * has exceeded the allowed number of requests, a response with status code 429 and a JSON message
 * @param next - The `next` parameter in the `rateLimiter` function is a callback function that is used
 * to pass control to the next middleware function in the stack. In Express.js, middleware functions
 * have access to the request object (`req`), response object (`res`), and the `next` function
 * @returns The `rateLimiter` function is being exported as the default export. It is a middleware
 * function that checks the rate limit for a specific key ("my-rate-limit") using the `ratelimit.limit`
 * function imported from "../config/upstash.js". If the rate limit check is successful, the `next()`
 * function is called to proceed to the next middleware in the stack. If the rate limit
 */

// Simple in-memory rate limiter for local development
const requestCounts = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 100; // 100 requests per minute

const rateLimiter = async (req, res, next) => {
    try {
        // Skip rate limiting in development if Redis is not available
        if (process.env.NODE_ENV === 'development' && !process.env.UPSTASH_REDIS_REST_URL) {
            return next();
        }

        // Use Upstash Redis if available
        if (process.env.UPSTASH_REDIS_REST_URL) {
            const { ratelimit } = await import("../config/upstash.js");
            const { success, limit, remaining } = await ratelimit.limit("my-rate-limit");
            
            if (!success) {
                return res.status(429).json({ message: "Too many requests, please try again later" });
            }
        } else {
            // Fallback to simple in-memory rate limiting
            const clientId = req.ip || 'anonymous';
            const now = Date.now();
            const windowStart = now - RATE_LIMIT_WINDOW;
            
            // Clean old entries
            if (requestCounts.has(clientId)) {
                const requests = requestCounts.get(clientId).filter(time => time > windowStart);
                requestCounts.set(clientId, requests);
            }
            
            // Check rate limit
            const requests = requestCounts.get(clientId) || [];
            if (requests.length >= MAX_REQUESTS) {
                return res.status(429).json({ message: "Too many requests, please try again later" });
            }
            
            // Add current request
            requests.push(now);
            requestCounts.set(clientId, requests);
        }

        next();
    } catch (error) {
        console.error("Rate limit error", error);
        // In case of error, allow the request to proceed
        next();
    }
};

export default rateLimiter;