import HttpStatus from "../class/http-status.class";

/**
* Create an OK response - status 200
* @param message Message for successful response
* @param data Response data
* @returns Http response - status 200
*/
export function ok(message?: string, data?: unknown) {
   return new HttpStatus(true, 200, "OK", message ?? "The request was successful!", data);
}

/**
 * Create a created response - status 201
 * @param message Message for created resource
 * @param data Resource data
 * @returns Http response - status 201
 */
export function created(message?: string, data?: unknown) {
    return new HttpStatus(true, 201, "Created", message ?? "The resource was successfully created!", data);
}

/**
 * Create an accepted response - status 202
 * @param message Message for accepted request
 * @param data Additional details
 * @returns Http response - status 202
 */
export function accepted(message?: string, data?: unknown) {
    return new HttpStatus(true, 202, "Accepted", message ?? "The request has been accepted for processing!", data);
}

/**
 * Create a non-authoritative information response - status 203
 * @param message Message for non-authoritative information
 * @param data Additional details
 * @returns Http response - status 203
 */
export function nonAuthoritativeInfo(message?: string, data?: unknown) {
    return new HttpStatus(true, 203, "Non-Authoritative Information", message ?? "The request was successful, but the information may not be fully reliable.", data);
}

/**
* Create a no content response - status 204
* @param message Message for no content
* @returns Http response - status 204
*/
export function noContent(message?: string) {
   return new HttpStatus(true, 204, "No Content", message ?? "The request was successful, but there's no content to send back.");
}

/**
* Create a reset content response - status 205
* @param message Message for reset content
* @returns Http response - status 205
*/
export function resetContent(message?: string) {
   return new HttpStatus(true, 205, "Reset Content", message ?? "The request was successful, and the client should reset the view.");
}

/**
* Create a partial content response - status 206
* @param message Message for partial content
* @param data Partial data
* @returns Http response - status 206
*/
export function partialContent(message?: string, data?: unknown) {
   return new HttpStatus(true, 206, "Partial Content", message ?? "The request was successful, but only partial data is returned.", data);
}

/**
* Create a multi-status response - status 207
* @param message Message for multi-status response
* @param data Detailed status
* @returns Http response - status 207
*/
export function multiStatus(message?: string, data?: unknown) {
   return new HttpStatus(true, 207, "Multi-Status", message ?? "Multiple statuses are returned for this request.", data);
}

/**
* Create an already reported response - status 208
* @param message Message for already reported status
* @param data Additional details
* @returns Http response - status 208
*/
export function alreadyReported(message?: string, data?: unknown) {
   return new HttpStatus(true, 208, "Already Reported", message ?? "The resource has already been reported in this transaction.", data);
}

/**
* Create an IM used response - status 226
* @param message Message for IM used
* @param data Instance manipulation results
* @returns Http response - status 226
*/
export function imUsed(message?: string, data?: unknown) {
   return new HttpStatus(true, 226, "IM Used", message ?? "The request was successful using instance manipulations.", data);
}