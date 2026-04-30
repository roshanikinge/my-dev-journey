/// Day 24: JS Asynchronous
/// Topics: callbacks, promises, async/await, error handling

console.log("1. CALLBACKS (asynchronous)");
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received from server");
    }, 1000);
}
console.log("Fetching data...");
fetchData((message) => {
    console.log("Callback result:", message);
});

function waitAndRun(callback, delay) {
    setTimeout(callback, delay);
}
waitAndRun(() => console.log("Delayed callback after 500ms"), 500);

console.log("2. PROMISES - basic");
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully");
        } else {
            reject("Promise rejected");
        }
    }, 500);
});
myPromise
    .then(result => console.log("Promise then:", result))
    .catch(error => console.log("Promise catch:", error));

console.log("3. PROMISE CHAINING");
function asyncAdd(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a + b), 500);
    });
}
asyncAdd(5, 10)
    .then(sum => asyncAdd(sum, 3))
    .then(total => console.log("Promise chaining result:", total))
    .catch(err => console.log(err));

console.log("4. PROMISE ALL");
let promise1 = Promise.resolve("First");
let promise2 = new Promise(resolve => setTimeout(() => resolve("Second"), 200));
let promise3 = Promise.resolve("Third");
Promise.all([promise1, promise2, promise3])
    .then(results => console.log("Promise.all results:", results));

console.log("5. PROMISE RACE");
Promise.race([promise2, promise1])
    .then(winner => console.log("Promise.race winner:", winner));

console.log("6. ASYNC/AWAIT");
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function fetchUserData() {
    console.log("Fetching user...");
    await delay(500);
    return { id: 1, name: "Alice" };
}
async function displayUser() {
    let user = await fetchUserData();
    console.log("Async/await user:", user);
}
displayUser();

console.log("7. ERROR HANDLING WITH ASYNC/AWAIT");
async function riskyOperation() {
    try {
        let result = await Promise.reject("Something went wrong");
        console.log(result);
    } catch (error) {
        console.log("Caught error:", error);
    }
}
riskyOperation();

console.log("8. FETCH API WITH ASYNC/AWAIT (mock)");
async function getPosts() {
    // Simulating fetch with delay
    return new Promise(resolve => {
        setTimeout(() => resolve(["post1", "post2", "post3"]), 300);
    });
}
async function showPosts() {
    let posts = await getPosts();
    console.log("Mock posts:", posts);
}
showPosts();

console.log("9. PRACTICE TASKS");
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function countdown(seconds) {
    for (let i = seconds; i >= 0; i--) {
        console.log(`Countdown: ${i}`);
        await wait(500);
    }
}
countdown(3);

function fetchWithError(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) reject("Network error");
            else resolve("Data OK");
        }, 300);
    });
}
async function handleFetch() {
    try {
        let data = await fetchWithError(false);
        console.log("Fetch success:", data);
        let failData = await fetchWithError(true);
        console.log(failData);
    } catch (err) {
        console.log("Fetch error handled:", err);
    }
}
handleFetch();

console.log("Day 24 completed - JS Asynchronous covered.");
