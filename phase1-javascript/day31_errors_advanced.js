// Day 31: JS Error Handling - Advanced (custom errors, error subclasses)

console.log("1. CUSTOM ERROR CLASS");
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
try {
    throw new ValidationError("Invalid input");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

console.log("2. EXTENDING BUILT-IN ERROR TYPES");
class DatabaseError extends Error {
    constructor(message, query) {
        super(message);
        this.name = "DatabaseError";
        this.query = query;
    }
}
try {
    throw new DatabaseError("Connection failed", "SELECT * FROM users");
} catch (error) {
    console.log(`${error.name}: ${error.message}, Query: ${error.query}`);
}

console.log("3. MULTIPLE CUSTOM ERROR TYPES");
class NotFoundError extends Error {
    constructor(resource) {
        super(`${resource} not found`);
        this.name = "NotFoundError";
        this.resource = resource;
    }
}
class PermissionError extends Error {
    constructor(action) {
        super(`Permission denied for ${action}`);
        this.name = "PermissionError";
        this.action = action;
    }
}
function fetchUser(id, role) {
    if (id === 0) throw new NotFoundError("User");
    if (role !== "admin") throw new PermissionError("view user");
    return { id, name: "Alice" };
}
try {
    fetchUser(1, "user");
} catch (error) {
    if (error instanceof NotFoundError) console.log("Not found:", error.message);
    else if (error instanceof PermissionError) console.log("Permission:", error.message);
    else console.log("Other:", error);
}
try {
    fetchUser(0, "admin");
} catch (error) {
    console.log("Caught:", error.name, error.message);
}

console.log("4. RE-THROWING ERRORS");
function processData(data) {
    try {
        if (!data) throw new Error("No data");
        return JSON.parse(data);
    } catch (error) {
        console.log("Logging error:", error.message);
        throw new Error("Processing failed: " + error.message);
    }
}
try {
    processData(null);
} catch (error) {
    console.log("Outer catch:", error.message);
}

console.log("5. ERROR PROPERTIES (stack, cause)");
try {
    throw new Error("Original error");
} catch (err) {
    let wrapped = new Error("Wrapper", { cause: err });
    console.log("Wrapped error cause:", wrapped.cause?.message);
    console.log("Stack trace starts with:", wrapped.stack?.split("\n")[0]);
}

console.log("6. ASYNC ERROR HANDLING");
async function asyncError() {
    throw new DatabaseError("Async query failed", "INSERT");
}
async function handleAsync() {
    try {
        await asyncError();
    } catch (error) {
        console.log("Async caught:", error.name, error.message);
    }
}
handleAsync();

console.log("7. PRACTICE TASKS");
class ApiError extends Error {
    constructor(status, message) {
        super(message);
        this.name = "ApiError";
        this.status = status;
    }
}
function mockApi(status) {
    if (status === 404) throw new ApiError(404, "Resource not found");
    if (status === 500) throw new ApiError(500, "Internal server error");
    return { data: "success" };
}
[200, 404, 500].forEach(code => {
    try {
        let result = mockApi(code);
        console.log("API success:", result);
    } catch (err) {
        if (err instanceof ApiError) {
            console.log(`API Error ${err.status}: ${err.message}`);
        }
    }
});

class InputTooShortError extends ValidationError {
    constructor(field, minLength) {
        super(`${field} must be at least ${minLength} characters`);
        this.name = "InputTooShortError";
        this.field = field;
        this.minLength = minLength;
    }
}
try {
    throw new InputTooShortError("username", 3);
} catch (err) {
    console.log(`${err.name}: ${err.field} - ${err.message}`);
}

console.log("Day 31 completed - Advanced error handling covered.");