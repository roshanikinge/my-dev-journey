// Day 1: Age Calculator (Windows friendly)
// Run with: node day1-age-calculator.js 1995

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// Get command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("Usage: node day1-age-calculator.js <birthYear>");
    console.log("Example: node day1-age-calculator.js 1990");
    process.exit(1);
}

const birthYear = parseInt(args[0]);

if (isNaN(birthYear)) {
    console.log("Please enter a valid number for birth year.");
    process.exit(1);
}

const age = calculateAge(birthYear);
console.log(`If you were born in ${birthYear}, you are ${age} years old (or will be this year).`);