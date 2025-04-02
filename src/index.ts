import HttpError from "./class/http-error.class";
import HttpStatus from "./class/http-status.class";
export * from "./2xx";
export * from "./3xx";
export * from "./4xx";
export * from "./5xx";

/**
 * Validate if error is a Http Error
 * @param error Error instance
 * @returns Error is an Http error
 */
export function isHttpError(error: unknown): error is HttpError {
    return error instanceof HttpError;
}

/**
 * Validate if httpStatus is a Http Status
 * @param httpStatus HttpStatus instance
 * @returns httpStatus is an Http Status
 */
export function isHttpStatus(httpStatus: unknown): httpStatus is HttpStatus {
    return httpStatus instanceof HttpStatus || isHttpError(httpStatus);
}

// Export Classes
export { HttpError, HttpStatus };