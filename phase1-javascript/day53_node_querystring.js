// Day 53: Node.js Query Strings Module

const querystring = require("querystring");

console.log("1. PARSING QUERY STRINGS");

const queryString = "name=John&age=25&city=New+York&active=true";
const parsed = querystring.parse(queryString);

console.log("Query string:", queryString);
console.log("Parsed object:", parsed);
console.log("Name:", parsed.name);
console.log("Age:", parsed.age);
console.log("City:", parsed.city);
console.log("Active:", parsed.active);

console.log("\n2. PARSING WITH MULTIPLE VALUES");

const multiValueQuery = "colors=red&colors=blue&colors=green&name=Alice";
const parsedMulti = querystring.parse(multiValueQuery);

console.log("Query string:", multiValueQuery);
console.log("Parsed colors:", parsedMulti.colors);
console.log("Colors array:", Array.isArray(parsedMulti.colors) ? parsedMulti.colors.join(", ") : parsedMulti.colors);

console.log("\n3. PARSING NESTED QUERY STRINGS");

const nestedQuery = "user[name]=John&user[age]=30&user[city]=Boston";
const parsedNested = querystring.parse(nestedQuery);

console.log("Nested query:", nestedQuery);
console.log("Parsed:", parsedNested);
console.log("User object:", parsedNested.user);

console.log("\n4. STRINGIFY OBJECTS");

const obj = {
    name: "Alice",
    age: 28,
    city: "Chicago",
    active: true
};

const stringified = querystring.stringify(obj);
console.log("Object:", obj);
console.log("Stringified:", stringified);

console.log("\n5. STRINGIFY WITH ARRAYS");

const arrayObj = {
    colors: ["red", "green", "blue"],
    name: "Bob",
    tags: ["js", "node"]
};

const stringifiedArray = querystring.stringify(arrayObj);
console.log("Object with arrays:", arrayObj);
console.log("Stringified:", stringifiedArray);

console.log("\n6. CUSTOM DELIMITERS AND SEPARATORS");

const customObj = {
    first: "John",
    last: "Doe",
    age: 35
};

const customString = querystring.stringify(customObj, ";", ":");
console.log("Custom delimiter ';' and separator ':':", customString);

const customParsed = querystring.parse("first:John;last:Doe;age:35", ";", ":");
console.log("Parsed with custom delimiters:", customParsed);

console.log("\n7. ESCAPING AND UNESCAPING");

const specialString = "name=John Doe&city=New York&query=hello world!@#$";
const escaped = querystring.escape(specialString);
console.log("Original:", specialString);
console.log("Escaped:", escaped);

const unescaped = querystring.unescape(escaped);
console.log("Unescaped:", unescaped);

const normalEncode = encodeURIComponent("Hello World!");
const querystringEncode = querystring.escape("Hello World!");
console.log("encodeURIComponent:", normalEncode);
console.log("querystring.escape:", querystringEncode);

console.log("\n8. PRACTICAL EXAMPLES");

function parseFormData(formData) {
    const parsed = querystring.parse(formData);
    const result = {};
    
    for (const [key, value] of Object.entries(parsed)) {
        if (value === "true") result[key] = true;
        else if (value === "false") result[key] = false;
        else if (!isNaN(value) && value !== "") result[key] = Number(value);
        else result[key] = value;
    }
    return result;
}

const formData = "username=johndoe&age=25&newsletter=true&preferences=dark mode";
console.log("Form data:", formData);
console.log("Parsed form data:", parseFormData(formData));

function buildFilterString(filters) {
    const query = {};
    
    if (filters.category) query.category = filters.category;
    if (filters.minPrice) query.minPrice = filters.minPrice;
    if (filters.maxPrice) query.maxPrice = filters.maxPrice;
    if (filters.inStock) query.inStock = filters.inStock;
    if (filters.tags && filters.tags.length) query.tags = filters.tags;
    
    return querystring.stringify(query);
}

const filters = {
    category: "electronics",
    minPrice: 100,
    maxPrice: 500,
    inStock: true,
    tags: ["new", "sale", "popular"]
};

console.log("Filters object:", filters);
console.log("Query string:", buildFilterString(filters));

function extractSearchParams(url) {
    const questionMarkIndex = url.indexOf("?");
    if (questionMarkIndex === -1) return {};
    
    const queryPart = url.substring(questionMarkIndex + 1);
    const parsed = querystring.parse(queryPart);
    
    const result = {};
    for (const [key, value] of Object.entries(parsed)) {
        if (value === "true" || value === "false") {
            result[key] = value === "true";
        } else if (!isNaN(value) && value !== "") {
            result[key] = Number(value);
        } else {
            result[key] = value;
        }
    }
    return result;
}

const testUrl = "https://example.com/products?category=books&page=2&sort=price&inStock=true&limit=20";
console.log("URL:", testUrl);
console.log("Extracted params:", extractSearchParams(testUrl));

console.log("\n9. COMPARING querystring vs URLSearchParams");

const query = "name=John&age=30&hobby=reading&hobby=gaming";

console.log("Using querystring module:");
const qsResult = querystring.parse(query);
console.log("  Result:", qsResult);
console.log("  Hobby type:", Array.isArray(qsResult.hobby) ? "array" : "string");

console.log("Using URLSearchParams (WHATWG):");
const searchParams = new URLSearchParams(query);
const spResult = {};
for (const [key, value] of searchParams) {
    if (spResult[key]) {
        spResult[key] = Array.isArray(spResult[key]) ? [...spResult[key], value] : [spResult[key], value];
    } else {
        spResult[key] = value;
    }
}
console.log("  Result:", spResult);

console.log("\n10. PRACTICE TASKS");

function serializeFilters(filters) {
    const cleanFilters = {};
    for (const [key, value] of Object.entries(filters)) {
        if (value !== undefined && value !== null && value !== "") {
            cleanFilters[key] = value;
        }
    }
    return querystring.stringify(cleanFilters);
}

const productFilters = {
    category: "laptops",
    brand: "",
    minPrice: 500,
    maxPrice: null,
    inStock: true,
    sort: "price"
};
console.log("Original filters:", productFilters);
console.log("Serialized:", serializeFilters(productFilters));

function parseApiQuery(queryString) {
    const parsed = querystring.parse(queryString);
    return {
        page: parsed.page ? parseInt(parsed.page) : 1,
        limit: parsed.limit ? parseInt(parsed.limit) : 10,
        sortBy: parsed.sortBy || "id",
        sortOrder: parsed.sortOrder === "desc" ? "desc" : "asc",
        filters: Object.fromEntries(
            Object.entries(parsed).filter(([key]) => !["page", "limit", "sortBy", "sortOrder"].includes(key))
        )
    };
}

const apiQuery = "page=3&limit=25&sortBy=price&sortOrder=desc&category=electronics&brand=apple";
console.log("API query:", apiQuery);
console.log("Parsed API query:", parseApiQuery(apiQuery));

console.log("\nDay 53 completed - Query Strings module covered.");