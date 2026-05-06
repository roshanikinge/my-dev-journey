// Day 33: JS Proxies and Reflect

console.log("1. BASIC PROXY");
let target = { name: "Alice", age: 25 };
let handler = {
    get(obj, prop) {
        console.log(`Getting ${prop}`);
        return obj[prop];
    },
    set(obj, prop, value) {
        console.log(`Setting ${prop} to ${value}`);
        obj[prop] = value;
        return true;
    }
};
let proxy = new Proxy(target, handler);
console.log(proxy.name);
proxy.age = 30;
console.log(proxy.age);

console.log("2. PROXY FOR VALIDATION");
let user = { name: "John", age: 17 };
let validator = {
    set(obj, prop, value) {
        if (prop === "age" && value < 18) {
            throw new Error("Age must be 18 or above");
        }
        obj[prop] = value;
        return true;
    }
};
let userProxy = new Proxy(user, validator);
console.log(userProxy.name);
try {
    userProxy.age = 16;
} catch (e) {
    console.log("Validation error:", e.message);
}
userProxy.age = 25;
console.log("Age set to:", userProxy.age);

console.log("3. PROXY FOR DEFAULT VALUES");
let defaults = {
    get(obj, prop) {
        return prop in obj ? obj[prop] : "Default Value";
    }
};
let data = { name: "Bob" };
let dataProxy = new Proxy(data, defaults);
console.log(dataProxy.name);
console.log(dataProxy.city);

console.log("4. PROXY FOR READONLY");
let readOnlyHandler = {
    set() {
        console.log("Cannot modify read-only object");
        return false;
    }
};
let original = { a: 1, b: 2 };
let readOnly = new Proxy(original, readOnlyHandler);
console.log(readOnly.a);
readOnly.a = 10;
console.log(readOnly.a);

console.log("5. REVOCABLE PROXY");
let revocable = Proxy.revocable({ msg: "secret" }, {
    get(obj, prop) {
        return obj[prop];
    }
});
let revProxy = revocable.proxy;
console.log(revProxy.msg);
revocable.revoke();
try {
    console.log(revProxy.msg);
} catch (e) {
    console.log("Proxy revoked:", e.message);
}

console.log("6. REFLECT API");
let obj = { x: 10, y: 20 };
console.log("Reflect.get:", Reflect.get(obj, "x"));
Reflect.set(obj, "z", 30);
console.log("After Reflect.set:", obj);
console.log("Reflect.has:", Reflect.has(obj, "y"));
console.log("Reflect.ownKeys:", Reflect.ownKeys(obj));

console.log("7. PROXY + REFLECT TOGETHER");
let product = { price: 100, tax: 0.1 };
let loggingHandler = {
    get(target, prop, receiver) {
        console.log(`GET ${prop}`);
        return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
        console.log(`SET ${prop} = ${value}`);
        return Reflect.set(target, prop, value, receiver);
    }
};
let productProxy = new Proxy(product, loggingHandler);
console.log(productProxy.price);
productProxy.discount = 10;
console.log(productProxy.discount);

console.log("8. PRACTICE TASKS");
function negativeIndexArray(arr) {
    return new Proxy(arr, {
        get(target, prop) {
            let index = Number(prop);
            if (index < 0) index = target.length + index;
            return target[index];
        }
    });
}
let arr = negativeIndexArray([10, 20, 30, 40]);
console.log("Negative index -1:", arr[-1]);
console.log("Negative index -2:", arr[-2]);

let form = { username: "", password: "" };
let formValidator = new Proxy(form, {
    set(target, prop, value) {
        if (prop === "username" && value.length < 3) {
            throw new Error("Username too short");
        }
        if (prop === "password" && value.length < 6) {
            throw new Error("Password too short");
        }
        target[prop] = value;
        return true;
    }
});
try {
    formValidator.username = "jo";
} catch (e) {
    console.log("Form error:", e.message);
}
formValidator.username = "john_doe";
formValidator.password = "secret123";
console.log("Form data:", formValidator.username, formValidator.password);

console.log("Day 33 completed - Proxies and Reflect covered.");