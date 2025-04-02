import HttpError from "../class/http-error.class"

/**
 * Errors Collection to status 4xx
 */
export default {

    /**
     * Create a bad request error - status 400
     * @param message Message to bad request
     * @param data Additional details
     * @returns Http Error - status 400
     */
    badRequest(message?: string, data?: unknown) {
        return new HttpError(400, "Bad Request", message ?? "A bad request occurred!", data);
    },

    /**
     * Create an unauthorized error - status 401
     * @param message Message to unauthorized error
     * @param data Additional details
     * @returns Http error - status 401
     */
    unauthorized(message?: string, data?: unknown) {
        return new HttpError(401, "Unauthorized", message ?? "Access denied! Authentication required.", data);
    },

    /**
     * Create a payment required error - status 402
     * @param message Message to payment required error
     * @param data Additional details
     * @returns Http error - status 402
     */
    paymentRequired(message?: string, data?: unknown) {
        return new HttpError(402, "Payment Required", message ?? "Payment is needed to access this resource.", data);
    },

    /**
     * Create a forbidden error - status 403
     * @param message Message to forbidden error
     * @param data Additional details
     * @returns Http error - status 403
     */
    forbidden(message?: string, data?: unknown) {
        return new HttpError(403, "Forbidden", message ?? "Access is forbidden! You don't have permission.", data);
    },

    /**
     * Create a not found error - status 404
     * @param message Message to not found error
     * @param data Additional details
     * @returns Http error - status 404
     */
    notFound(message?: string, data?: unknown) {
        return new HttpError(404, "Not Found", message ?? "Resource not found! The requested item is missing.", data);
    },

    /**
     * Create a method not allowed error - status 405
     * @param message Message to method not allowed error
     * @param data Additional details
     * @returns Http error - status 405
     */
    methodNotAllowed(message?: string, data?: unknown) {
        return new HttpError(405, "Method Not Allowed", message ?? "Method not allowed! This HTTP method is not permitted.", data);
    },

    /**
     * Create a not acceptable error - status 406
     * @param message Message to not acceptable error
     * @param data Additional details
     * @returns Http error - status 406
     */
    notAcceptable(message?: string, data?: unknown) {
        return new HttpError(406, "Not Acceptable", message ?? "Not acceptable! The server cannot provide a suitable response.", data);
    },

    /**
     * Create a proxy authentication required error - status 407
     * @param message Message to proxy authentication required error
     * @param data Additional details
     * @returns Http error - status 407
     */
    proxyAuthRequired(message?: string, data?: unknown) {
        return new HttpError(407, "Proxy Authentication Required", message ?? "Proxy authentication is required!", data);
    },

    /**
     * Create a request timeout error - status 408
     * @param message Message to request timeout error
     * @param data Additional details
     * @returns Http error - status 408
     */
    requestTimeout(message?: string, data?: unknown) {
        return new HttpError(408, "Request Timeout", message ?? "Request timed out! The server waited too long.", data);
    },

    /**
     * Create a conflict error - status 409
     * @param message Message to conflict error
     * @param data Additional details
     * @returns Http error - status 409
     */
    conflict(message?: string, data?: unknown) {
        return new HttpError(409, "Conflict", message ?? "Conflict occurred! The request cannot be completed due to a conflict.", data);
    },

    /**
     * Create a gone error - status 410
     * @param message Message to gone error
     * @param data Additional details
     * @returns Http error - status 410
     */
    gone(message?: string, data?: unknown) {
        return new HttpError(410, "Gone", message ?? "Resource is gone! It is no longer available.", data);
    },

    /**
     * Create a length required error - status 411
     * @param message Message to length required error
     * @param data Additional details
     * @returns Http error - status 411
     */
    lengthRequired(message?: string, data?: unknown) {
        return new HttpError(411, "Length Required", message ?? "Length required! Content length must be specified.", data);
    },

    /**
     * Create a precondition failed error - status 412
     * @param message Message to precondition failed error
     * @param data Additional details
     * @returns Http error - status 412
     */
    preconditionFailed(message?: string, data?: unknown) {
        return new HttpError(412, "Precondition Failed", message ?? "Precondition failed! A condition in the request was not met.", data);
    },

}