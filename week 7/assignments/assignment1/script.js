// ============================================================
// Assignment 1: Function toolkit (10 pts)
// Due: Thu, Oct 1, 11:59 PM · Submit: week7/assignment1
// Rule: use at least one declaration, one expression and one arrow function.
// Add at least 2 test calls per function, with the expected output as a comment.
// ============================================================

// ---------- Part A: Utilities (5 pts) ----------

// calculateArea(length, width = length)
// calculateArea(4, 5) → 20    calculateArea(3) → 9
function calculateArea(length, width = length) {
    return length * width;
}
console.log(calculateArea(4, 5));
console.log(calculateArea(3));
// getGrade(score)
// A 70+, B 60–69, C 50–59, D 45–49, F below 45
// Return "Invalid score" for anything outside 0–100 (or not a number)
// getGrade(72) → "A"    getGrade(101) → "Invalid score"
function getGrade(score) {
    if (typeOf score !== "number" || score < 0 || score > 100) {
        return "Invalid score";
    }
if (score >= 70) {
    return "A";
} else if (score >= 60) {
    return "B";
} else if (score >= 50) {
    return "C";
} else if (score >= 45) {
    return "D";
} else {
    return "F";
}
}
console.log(getGrade(72));
console.log(getGrade(101));
console.log(getGrade(43));

// countVowels(text)
function countVowels(text) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("JvavScript"));
// countVowels("JavaScript") → 3

// reverseString(text): use a loop, not .reverse()
function reverseString(text) {
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}
console.log(countVowels("Lagos"));
// reverseString("Lagos") → "sogaL"

// calculateDiscount(price, percent = 10)
function calculateDiscount(price, price = 10) {
    return price - (price * percent / 100);
}
console.log(calculationDiscount(5000));
console.log(calculateDiscount(5000, 25));
// calculateDiscount(5000) → 4500    calculateDiscount(5000, 25) → 3750



// ---------- Part B: Refactor (3 pts) ----------
// Rebuild your Week 6 BMI checker as two functions:
// calculateBmi(weight, height) → BMI rounded to 1 decimal; return null for invalid input
// classifyBmi(bmi) → "Underweight" | "Normal" | "Overweight" | "Obese"
// Under 18.5 underweight · 18.5 to 24.9 normal · 25 to 29.9 overweight · 30+ obese
// Test with 3 inputs, e.g. calculateBmi(70, 1.75) → 22.9 → "Normal"


// ---------- Part C: Style explainer (2 pts) ----------
// Write isEven(n) three ways: declaration, expression and arrow.
// In comments, explain when you would choose each style.
