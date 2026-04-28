// DAY 17: JS Dates

console.log("1. CREATING DATES");
let now = new Date();
console.log("Current date:", now);
let specific = new Date(2025, 0, 15);
console.log("Specific (Jan 15, 2025):", specific);
let timestamp = new Date(1700000000000);
console.log("From timestamp:", timestamp);
let dateString = new Date("2025-03-20");
console.log("From string:", dateString);

console.log("2. GETTING DATE COMPONENTS");
let d = new Date();
console.log("getFullYear():", d.getFullYear());
console.log("getMonth():", d.getMonth());
console.log("getDate():", d.getDate());
console.log("getDay():", d.getDay());
console.log("getHours():", d.getHours());
console.log("getMinutes():", d.getMinutes());
console.log("getSeconds():", d.getSeconds());
console.log("getMilliseconds():", d.getMilliseconds());
console.log("getTime():", d.getTime());

console.log("3. SETTING DATE COMPONENTS");
let date = new Date();
date.setFullYear(2030);
date.setMonth(5);
date.setDate(15);
console.log("After setting:", date);

console.log("4. DATE FORMATTING");
let today = new Date();
console.log("toString():", today.toString());
console.log("toDateString():", today.toDateString());
console.log("toTimeString():", today.toTimeString());
console.log("toISOString():", today.toISOString());
console.log("toLocaleDateString():", today.toLocaleDateString());
console.log("toLocaleTimeString():", today.toLocaleTimeString());

console.log("5. DATE CALCULATIONS");
let start = new Date(2025, 0, 1);
let end = new Date(2025, 0, 10);
let diffMs = end - start;
let diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log("Difference in days:", diffDays);

console.log("6. COMPARING DATES");
let d1 = new Date(2025, 0, 1);
let d2 = new Date(2025, 0, 15);
console.log("d1 < d2:", d1 < d2);
console.log("d1 > d2:", d1 > d2);

console.log("7. DATE UTC METHODS");
let utc = new Date();
console.log("getUTCFullYear():", utc.getUTCFullYear());
console.log("getUTCMonth():", utc.getUTCMonth());
console.log("getUTCDate():", utc.getUTCDate());

console.log("8. PRACTICE TASKS");
let birthday = new Date(2000, 5, 15);
let todayDate = new Date();
let age = todayDate.getFullYear() - birthday.getFullYear();
let monthDiff = todayDate.getMonth() - birthday.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && todayDate.getDate() < birthday.getDate())) {
    age--;
}
console.log("Age:", age);
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = daysOfWeek[today.getDay()];
console.log("Today is:", dayName);
let nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);
console.log("Next week:", nextWeek.toDateString());
let formatDate = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0');
console.log("Formatted date (YYYY-MM-DD):", formatDate);

console.log("Day 17 completed - JS Dates covered.");