import HttpStatus, { getPayload, IPayload } from "./http-status.class";

/**
 * Error Http Class
 */
export default class HttpError extends Error implements HttpStatus {

    /**
     * success operation status
     */
    public readonly success: boolean = false;

    /**
     * Initialize status HTTP
     * @param statusCode Status code HTTP
     * @param status Status Type
     * @param message Message status details
     * @param data Aditional details
     */
    constructor(
        public readonly statusCode: number,
        public readonly status: string,
        public readonly message: string,
        public readonly data: any = null
    ) {
        super(message);

        // Apply properties enumerables and non-enumerables
        Object.defineProperty(this, "success", { enumerable: true });
        Object.defineProperty(this, "statusCode", { enumerable: false });
        Object.defineProperty(this, "status", { enumerable: false });
        Object.defineProperty(this, "message", { enumerable: true });
        Object.defineProperty(this, "data", { enumerable: true });

        // Get payload
        this.getPayload = getPayload.bind(this);
    }
    
    /**
     * Get payload http status
     * @returns Payload data
     */
    public getPayload: (this: HttpStatus) => IPayload;
    
}