
# @stexcore/http-status

![NPM Version](https://img.shields.io/npm/v/@stexcore/http-status?style=flat-square) ![License](https://img.shields.io/github/license/stexcore/http-status.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-%5E5.8.2-blue?style=flat-square)

**A collection of HTTP status codes for general use in any HTTP framework.**  
Simplifies the management of HTTP responses and errors with a clean and easy-to-use interface. Fully compatible with TypeScript and any HTTP framework.

---

## 🚀 Installation

Install the package from NPM using the following command:

```bash
npm install @stexcore/http-status
```

---

## 📦 Usage

### Basic Import and Example

```typescript
import httpStatus from "@stexcore/http-status";

// Create a successful response (200 OK)
const response = httpStatus.ok("Operation successful", { id: 123 });
console.log(response);

// Handle an error (404 Not Found)
const error = httpStatus.notFound("The requested resource was not found");
console.log(error);

// Validate if an object is an HttpError
if (httpStatus.isHttpError(error)) {
    console.error("This is an HTTP error!", error.message);
}
```

---

## 🌟 Main Methods

### **Success Responses (2xx)**

| Method                   | Description                                                         |
|--------------------------|---------------------------------------------------------------------|
| `ok`                    | Creates a 200 OK response.                                         |
| `created`               | Creates a 201 Created response.                                    |
| `accepted`              | Creates a 202 Accepted response.                                   |
| `nonAuthoritativeInfo`  | Creates a 203 Non-Authoritative Information response.              |
| `noContent`             | Creates a 204 No Content response.                                 |
| `resetContent`          | Creates a 205 Reset Content response.                              |
| `partialContent`        | Creates a 206 Partial Content response.                            |
| `multiStatus`           | Creates a 207 Multi-Status response.                               |
| `alreadyReported`       | Creates a 208 Already Reported response.                           |
| `imUsed`                | Creates a 226 IM Used response.                                    |

### **Redirections (3xx)**

| Method                   | Description                                                         |
|--------------------------|---------------------------------------------------------------------|
| `movedPermanently`       | Creates a 301 Moved Permanently response.                         |
| `found`                 | Creates a 302 Found response.                                      |
| `seeOther`              | Creates a 303 See Other response.                                  |
| `notModified`           | Creates a 304 Not Modified response.                               |
| `useProxy`              | Creates a 305 Use Proxy response.                                  |
| `temporaryRedirect`     | Creates a 307 Temporary Redirect response.                        |
| `permanentRedirect`     | Creates a 308 Permanent Redirect response.                        |

### **Client Errors (4xx)**

| Method                   | Description                                                         |
|--------------------------|---------------------------------------------------------------------|
| `badRequest`            | Creates a 400 Bad Request error.                                   |
| `unauthorized`          | Creates a 401 Unauthorized error.                                 |
| `paymentRequired`       | Creates a 402 Payment Required error.                             |
| `forbidden`             | Creates a 403 Forbidden error.                                    |
| `notFound`              | Creates a 404 Not Found error.                                    |
| `methodNotAllowed`      | Creates a 405 Method Not Allowed error.                           |
| `notAcceptable`         | Creates a 406 Not Acceptable error.                               |
| `proxyAuthRequired`     | Creates a 407 Proxy Authentication Required error.                |
| `requestTimeout`        | Creates a 408 Request Timeout error.                              |
| `conflict`              | Creates a 409 Conflict error.                                     |
| `gone`                  | Creates a 410 Gone error.                                         |
| `lengthRequired`        | Creates a 411 Length Required error.                              |
| `preconditionFailed`    | Creates a 412 Precondition Failed error.                          |

### **Server Errors (5xx)**

| Method                   | Description                                                         |
|--------------------------|---------------------------------------------------------------------|
| `internalServerError`    | Creates a 500 Internal Server Error.                              |
| `notImplemented`         | Creates a 501 Not Implemented error.                              |
| `badGateway`             | Creates a 502 Bad Gateway error.                                  |
| `serviceUnavailable`     | Creates a 503 Service Unavailable error.                          |
| `gatewayTimeout`         | Creates a 504 Gateway Timeout error.                              |
| `httpVersionNotSupported`| Creates a 505 HTTP Version Not Supported error.                   |
| `variantAlsoNegotiates`  | Creates a 506 Variant Also Negotiates error.                      |
| `insufficientStorage`    | Creates a 507 Insufficient Storage error.                         |
| `loopDetected`           | Creates a 508 Loop Detected error.                                |
| `bandwidthLimitExceeded` | Creates a 509 Bandwidth Limit Exceeded error.                     |
| `notExtended`            | Creates a 510 Not Extended error.                                 |
| `networkAuthenticationRequired` | Creates a 511 Network Authentication Required error.       |

---

## ⚙️ Configuration

This library is ready to use directly out of the box. TypeScript is **optional** and supported: declaration files (`.d.ts`) are included to enable seamless integration for TypeScript projects. If you're using JavaScript, simply install the library and start using it without additional setup.

---

## 📖 Technical Details

This package includes key classes for managing HTTP statuses and errors:

- **HttpStatus**: A base class for representing HTTP responses.
- **HttpError**: Extends `Error` to represent HTTP errors.

---

## 💡 Example with Express

Here's a possible use case for integrating this library with [Express](https://expressjs.com/), a widely used Node.js framework:

```typescript
import express from "express";
import httpStatus from "@stexcore/http-status";

const app = express();

// A sample route to return a successful response
app.get("/success", (req, res) => {
    res.json(httpStatus.ok("The operation was successful!", { data: "Example data" }));
});

// A route to simulate a server error
app.get("/error", (req, res) => {
    res.status(500).json(httpStatus.internalServerError("An unexpected error occurred.", { traceId: "123-abc" }));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:\${PORT}`);
});
```

In this example:
- The `/success` route demonstrates a typical 200 OK response with additional data.
- The `/error` route showcases how you can return a structured 500 Internal Server Error.

---

## 🛠️ Development

If you'd like to contribute or report issues, visit our GitHub repository:  
[https://github.com/stexcore/http-status](https://github.com/stexcore/http-status)

---

## 📝 License

This project is licensed under the **MIT** license. See the [LICENSE](https://github.com/stexcore/http-status/blob/main/LICENSE) file for more details.

---