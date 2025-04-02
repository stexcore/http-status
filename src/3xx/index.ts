import HttpStatus from "../class/http-status.class";

/**
 * Redirection Collection with status 3xx
 */
export default {
    /**
     * Create a moved permanently response - status 301
     * @param message Message for redirection
     * @param location Redirect URL
     * @returns Http redirection response - status 301
     */
    movedPermanently(location: string, message?: string) {
        return new HttpStatus(true, 301, "Moved Permanently", message ?? "The resource has been moved to a new location.", location);
    },

    /**
     * Create a found response - status 302
     * @param message Message for redirection
     * @param location Redirect URL
     * @returns Http redirection response - status 302
     */
    found(location: string, message?: string) {
        return new HttpStatus(true, 302, "Found", message ?? "The resource has been found at a new location.", location);
    },

    /**
     * Create a see other response - status 303
     * @param message Message for redirection
     * @param location Redirect URL
     * @returns Http redirection response - status 303
     */
    seeOther(location: string, message?: string) {
        return new HttpStatus(true, 303, "See Other", message ?? "The resource is located at a different URL.", location);
    },

    /**
     * Create a not modified response - status 304
     * @param message Message for not modified
     * @returns Http response - status 304
     */
    notModified(message?: string) {
        return new HttpStatus(true, 304, "Not Modified", message ?? "The resource has not been modified since the last request.");
    },

    /**
     * Create a use proxy response - status 305
     * @param message Message for use proxy
     * @param proxy Proxy URL
     * @returns Http response - status 305
     */
    useProxy(proxy: string, message?: string) {
        return new HttpStatus(true, 305, "Use Proxy", message ?? "The resource is only available through the proxy specified.", { proxy });
    },

    /**
     * Create a temporary redirect response - status 307
     * @param message Message for redirection
     * @param location Redirect URL
     * @returns Http redirection response - status 307
     */
    temporaryRedirect(location: string, message?: string) {
        return new HttpStatus(true, 307, "Temporary Redirect", message ?? "The resource is temporarily located at a different URL.", location);
    },

    /**
     * Create a permanent redirect response - status 308
     * @param message Message for redirection
     * @param location Redirect URL
     * @returns Http redirection response - status 308
     */
    permanentRedirect(location: string, message?: string) {
        return new HttpStatus(true, 308, "Permanent Redirect", message ?? "The resource has been permanently moved to a new location.", location);
    }
};
