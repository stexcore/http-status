import HttpError from "../class/http-error.class";

/**
 * Errors Collection to status 5xx
 */
export default {
    /**
     * Create an internal server error - status 500
     * @param message Message to internal server error
     * @param data Additional details
     * @returns Http error - status 500
     */
    internalServerError(message?: string, data?: unknown) {
        return new HttpError(500, "Internal Server Error", message ?? "An internal server error occurred!", data);
    },

    /**
     * Create a not implemented error - status 501
     * @param message Message to not implemented error
     * @param data Additional details
     * @returns Http error - status 501
     */
    notImplemented(message?: string, data?: unknown) {
        return new HttpError(501, "Not Implemented", message ?? "This feature is not implemented!", data);
    },

    /**
     * Create a bad gateway error - status 502
     * @param message Message to bad gateway error
     * @param data Additional details
     * @returns Http error - status 502
     */
    badGateway(message?: string, data?: unknown) {
        return new HttpError(502, "Bad Gateway", message ?? "The server received an invalid response from an upstream server!", data);
    },

    /**
     * Create a service unavailable error - status 503
     * @param message Message to service unavailable error
     * @param data Additional details
     * @returns Http error - status 503
     */
    serviceUnavailable(message?: string, data?: unknown) {
        return new HttpError(503, "Service Unavailable", message ?? "The server is temporarily unable to handle the request!", data);
    },

    /**
     * Create a gateway timeout error - status 504
     * @param message Message to gateway timeout error
     * @param data Additional details
     * @returns Http error - status 504
     */
    gatewayTimeout(message?: string, data?: unknown) {
        return new HttpError(504, "Gateway Timeout", message ?? "The server didn't receive a timely response from an upstream server!", data);
    },

    /**
     * Create an HTTP version not supported error - status 505
     * @param message Message to HTTP version not supported error
     * @param data Additional details
     * @returns Http error - status 505
     */
    httpVersionNotSupported(message?: string, data?: unknown) {
        return new HttpError(505, "HTTP Version Not Supported", message ?? "The server doesn't support the HTTP version used in the request!", data);
    },

    /**
     * Create a variant also negotiates error - status 506
     * @param message Message to variant also negotiates error
     * @param data Additional details
     * @returns Http error - status 506
     */
    variantAlsoNegotiates(message?: string, data?: unknown) {
        return new HttpError(506, "Variant Also Negotiates", message ?? "The server encountered a variant negotiation error!", data);
    },

    /**
     * Create an insufficient storage error - status 507
     * @param message Message to insufficient storage error
     * @param data Additional details
     * @returns Http error - status 507
     */
    insufficientStorage(message?: string, data?: unknown) {
        return new HttpError(507, "Insufficient Storage", message ?? "The server is unable to store the representation needed to complete the request!", data);
    },

    /**
     * Create a loop detected error - status 508
     * @param message Message to loop detected error
     * @param data Additional details
     * @returns Http error - status 508
     */
    loopDetected(message?: string, data?: unknown) {
        return new HttpError(508, "Loop Detected", message ?? "The server detected an infinite loop while processing the request!", data);
    },

    /**
     * Create a bandwidth limit exceeded error - status 509
     * @param message Message to bandwidth limit exceeded error
     * @param data Additional details
     * @returns Http error - status 509
     */
    bandwidthLimitExceeded(message?: string, data?: unknown) {
        return new HttpError(509, "Bandwidth Limit Exceeded", message ?? "The server's bandwidth limit has been exceeded!", data);
    },

    /**
     * Create a not extended error - status 510
     * @param message Message to not extended error
     * @param data Additional details
     * @returns Http error - status 510
     */
    notExtended(message?: string, data?: unknown) {
        return new HttpError(510, "Not Extended", message ?? "Further extensions to the request are required for the server to fulfill it!", data);
    },

    /**
     * Create a network authentication required error - status 511
     * @param message Message to network authentication required error
     * @param data Additional details
     * @returns Http error - status 511
     */
    networkAuthenticationRequired(message?: string, data?: unknown) {
        return new HttpError(511, "Network Authentication Required", message ?? "Authentication is required to access the network!", data);
    }
};
