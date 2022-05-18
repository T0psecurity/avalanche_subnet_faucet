export type SendTokenResponse = {
    status: number,
    message: string,
    txHash?: string
}

export type RateLimiterConfig = {
    [key: string]: any,
    RATELIMIT: {
        REVERSE_PROXIES?: number;
        MAX_LIMIT: number;
        WINDOW_SIZE: number;
        PATH?: string;
        SKIP_FAILED_REQUESTS?: boolean;
        [key: string]: any;
    }
}