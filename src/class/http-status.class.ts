
/**
 * Payload info
 */
export interface IPayload {
    success: boolean,
    message: string,
    data?: any
}

/**
 * Get payload information
 * @param this Http instance
 * @returns Payload information
 */
export function getPayload(this: HttpStatus): IPayload {
    return {
        success: this.success,
        message: this.message,
        data: this.data ?? null
    };
}

/**
 * Status Http Class
 */
export default class HttpStatus {

    /**
     * Initialize status HTTP
     * @param success operation status
     * @param statusCode Status code HTTP
     * @param status Status Type
     * @param message Message status details
     * @param data Aditional details
     */
    constructor(
        public readonly success: boolean,
        public readonly statusCode: number,
        public readonly status: string,
        public readonly message: string,
        public readonly data: any = null
    ) {
        // Get payload
        this.getPayload = getPayload.bind(this);

        // Apply properties enumerables and non-enumerables
        Object.defineProperty(this, "success", { enumerable: true });
        Object.defineProperty(this, "statusCode", { enumerable: false });
        Object.defineProperty(this, "status", { enumerable: false });
        Object.defineProperty(this, "message", { enumerable: true });
        Object.defineProperty(this, "data", { enumerable: true });
    }

    /**
     * Get payload http status
     * @returns Payload data
     */
    public getPayload: (this: HttpStatus) => IPayload;
    
}