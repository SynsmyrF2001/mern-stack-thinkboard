/* This JavaScript code snippet is setting up a rate limiter using the Upstash library for rate
limiting. Here's a breakdown of what each part of the code is doing: */

import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";
import dotenv from "dotenv";
dotenv.config();

// create a ratelimter that allows 100 requests per 60 seconds
export const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "60s"),
});

export default ratelimit;
