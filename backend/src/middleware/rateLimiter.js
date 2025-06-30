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

import {ratelimit} from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try{
        const {success, limit, remaining} = await ratelimit.limit("my-rate-limit"); //limit the request to the ip address, limit is the maximum number of requests, remaining is the number of requests remaining
       
        if(!success){
            return res.status(429).json({message: "Too many requests, please try again later"}); //if the request is not successful, return a 429 status code and a message
        }

        next(); //if the request is successful, proceed to the next middleware
    }
    catch(error){
        console.error("Rate limit error", error); //if there is an error, log the error
        next(error); //proceed to the next middleware
    }
};

export default rateLimiter;