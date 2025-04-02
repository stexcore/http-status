import HttpError from "./class/http-error.class";
import HttpStatus from "./class/http-status.class";
import httpStatus2xx from "./2xx";
import httpStatus3xx from "./3xx";
import httpStatus4xx from "./4xx";
import httpStatus5xx from "./5xx";

export default {

    // Append http status 2xx
    ...httpStatus2xx,

    // Append http status 3xx
    ...httpStatus3xx,
    
    // Append http status 4xx
    ...httpStatus4xx,

    // Append http status 5xx
    ...httpStatus5xx,

    /**
     * Validate if error is a Http Error
     * @param error Error instance
     * @returns Error is an Http error
     */
    isHttpError(error: unknown): error is HttpError {
        return error instanceof HttpError;
    },

    /**
     * Validate if httpStatus is a Http Status
     * @param httpStatus HttpStatus instance
     * @returns httpStatus is an Http Status
     */
    isHttpStatus(httpStatus: unknown): httpStatus is HttpStatus {
        return httpStatus instanceof HttpStatus || this.isHttpError(httpStatus);
    },

}