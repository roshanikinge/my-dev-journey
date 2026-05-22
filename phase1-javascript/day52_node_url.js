// Day 52: Node.js URL Module

const url = require("url");

console.log("1. PARSING URLS");

const urlString = "https://john:secret123@example.com:8080/products?category=electronics&sort=price#section2";
const parsedUrl = url.parse(urlString, true);

console.log("Original URL:", urlString);
console.log("Parsed URL object:");
console.log("  Protocol:", parsedUrl.protocol);
console.log("  Username:", parsedUrl.auth ? parsedUrl.auth.split(":")[0] : null);
console.log("  Password:", parsedUrl.auth ? parsedUrl.auth.split(":")[1] : null);
console.log("  Hostname:", parsedUrl.hostname);
console.log("  Port:", parsedUrl.port);
console.log("  Pathname:", parsedUrl.pathname);
console.log("  Search:", parsedUrl.search);
console.log("  Query object:", parsedUrl.query);
console.log("  Hash:", parsedUrl.hash);

console.log("\n2. URL PARSE OPTIONS");

const urlWithQuery = "https://example.com/search?q=nodejs&page=2&limit=10";
const parsedWithoutQuery = url.parse(urlWithQuery, false);
const parsedWithQuery = url.parse(urlWithQuery, true);

console.log("Without parse query string:", parsedWithoutQuery.query);
console.log("With parse query string:", parsedWithQuery.query);
console.log("Query value 'q':", parsedWithQuery.query.q);
console.log("Query value 'page':", parsedWithQuery.query.page);

console.log("\n3. FORMATTING URLS");

const urlObject = {
    protocol: "https",
    hostname: "api.github.com",
    port: 443,
    pathname: "/users/nodejs",
    query: { per_page: 10, sort: "updated" }
};

const formattedUrl = url.format(urlObject);
console.log("URL object:", urlObject);
console.log("Formatted URL:", formattedUrl);

const simpleFormat = url.format({
    protocol: "http",
    host: "localhost:3000",
    pathname: "/api/users"
});
console.log("Simple format:", simpleFormat);

console.log("\n4. RESOLVING URLS");

const base = "https://example.com/folder/";
const relative = "../images/photo.jpg";

const resolved = url.resolve(base, relative);
console.log("Base:", base);
console.log("Relative:", relative);
console.log("Resolved:", resolved);

const base2 = "https://example.com/api/v1/users";
const relative2 = "../posts";
console.log("Base:", base2);
console.log("Relative:", relative2);
console.log("Resolved:", url.resolve(base2, relative2));

console.log("\n5. WORKING WITH URL OBJECT (WHATWG API)");

const myUrl = new URL("https://user:pass@example.com:8080/path/to/page?key=value&another=test#hash");

console.log("WHATWG URL object:");
console.log("  href:", myUrl.href);
console.log("  origin:", myUrl.origin);
console.log("  protocol:", myUrl.protocol);
console.log("  username:", myUrl.username);
console.log("  password:", myUrl.password);
console.log("  host:", myUrl.host);
console.log("  hostname:", myUrl.hostname);
console.log("  port:", myUrl.port);
console.log("  pathname:", myUrl.pathname);
console.log("  search:", myUrl.search);
console.log("  searchParams:", myUrl.searchParams.toString());
console.log("  hash:", myUrl.hash);

console.log("\n6. MODIFYING URLS (WHATWG)");

const modifiableUrl = new URL("https://example.com/old/path");
console.log("Original:", modifiableUrl.href);

modifiableUrl.pathname = "/new/path/file.html";
console.log("Changed pathname:", modifiableUrl.href);

modifiableUrl.searchParams.set("page", "2");
modifiableUrl.searchParams.set("limit", "20");
modifiableUrl.searchParams.append("tag", "javascript");
modifiableUrl.searchParams.append("tag", "nodejs");
console.log("Added query params:", modifiableUrl.href);

modifiableUrl.hash = "section3";
console.log("Added hash:", modifiableUrl.href);

modifiableUrl.port = "3000";
console.log("Changed port:", modifiableUrl.href);

console.log("\n7. URL SEARCH PARAMS METHODS");

const searchUrl = new URL("https://example.com?name=John&age=25&city=NYC");
const params = searchUrl.searchParams;

console.log("All params:");
for (const [key, value] of params) {
    console.log(`  ${key}: ${value}`);
}

console.log("Has 'name'?", params.has("name"));
console.log("Get 'age':", params.get("age"));
console.log("Get all 'city':", params.getAll("city"));

params.set("age", "26");
params.delete("city");
params.append("hobby", "reading");
params.append("hobby", "coding");

console.log("After modifications:", searchUrl.href);

console.log("\n8. PARSING RELATIVE URLS (WHATWG)");

const baseUrl = new URL("https://example.com/docs/");
const relativeUrl = new URL("../images/logo.png", baseUrl);
console.log("Base:", baseUrl.href);
console.log("Relative:", "../images/logo.png");
console.log("Resolved:", relativeUrl.href);

const relativeUrl2 = new URL("./api/users", baseUrl);
console.log("Resolved ./api/users:", relativeUrl2.href);

console.log("\n9. PRACTICE TASKS");

function extractUrlParts(urlString) {
    const parsed = new URL(urlString);
    return {
        protocol: parsed.protocol,
        domain: parsed.hostname,
        port: parsed.port || (parsed.protocol === "https:" ? "443" : "80"),
        path: parsed.pathname,
        queryParams: Object.fromEntries(parsed.searchParams),
        hash: parsed.hash || null
    };
}

const testUrl = "https://api.github.com/repos/nodejs/node/issues?state=open&per_page=5#comments";
console.log("Extracted parts:", extractUrlParts(testUrl));

function buildUrl(domain, path, params = {}) {
    const url = new URL(path, domain);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });
    return url.href;
}

const built = buildUrl("https://jsonplaceholder.typicode.com", "/posts", {
    userId: 1,
    _limit: 10
});
console.log("Built URL:", built);

function getAllQueryParams(urlString) {
    const parsed = new URL(urlString);
    const result = {};
    for (const [key, value] of parsed.searchParams) {
        if (result[key]) {
            result[key] = Array.isArray(result[key]) ? [...result[key], value] : [result[key], value];
        } else {
            result[key] = value;
        }
    }
    return result;
}

const multiParamUrl = "https://example.com?tags=js&tags=node&tags=express&page=2";
console.log("Multi-param query:", getAllQueryParams(multiParamUrl));

console.log("\nDay 52 completed - URL module covered.");