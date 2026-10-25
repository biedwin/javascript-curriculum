// ============================================================
// Assignment 2: Grade book (15 pts)
// Due: Sun, Oct 4, 11:59 PM · Submit: week7/assignment2
// Rule: no for or while loops. Use forEach, map, filter and reduce.
// Write the expected output as a comment next to each console.log.
// ============================================================

const students = [
  { name: "Ada",   score: 78 },
  { name: "Bola",  score: 45 },
  { name: "Chidi", score: 92 },
  { name: "Dayo",  score: 38 },
  { name: "Efe",   score: 66 },
  { name: "Funmi", score: 54 },
  { name: "Gozie", score: 81 },
];

function getGrade(score) {
  if (score >= 70) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else {
    return "D";
  }
}

// ---------- Part A: Basics (6 pts) ----------
// 1. Print every student as "Ada — 78" (forEach)
students.forEach(student => {
  console.log(`${student.name} - ${student.score}`);
});

// 2. names: an array of just the names (map)
const names = students.map((student) => student.name);
console.log(names);

// 3. passed: students scoring 50 or above (filter). Print how many passed
const passed = students.filter((student) => student.score >= 50);
console.log(passed.legth);

// 4. The class average, to 1 decimal place (reduce)
const total = students.reduce((sum, student) => sum + student.score, 0);
const average = total / students.length;
console.log(average.toFixed(1))


// ---------- Part B: Grades (6 pts) ----------
// 5. The top student (name and score), using reduce
const topstudent = students.reduce((top, student) =>
student.score > top.score ? student : top);
console.log(`${topstudent.name} - ${topstudent.score}`);

// 6. withGrades: a new array where each student also has a grade (map)
//    Hint: an arrow that returns an object needs parentheses:
//    (s) => ({ name: s.name, score: s.score, grade: getGrade(s.score) })
const withGrades = students.map((s) => ({
  name: s.name,
  score: s.score,
  grade: getGrade(s.score)
}));
console.log(withGrades);

// 7. honourRoll: names of A students joined into one string → "Ada, Chidi, Gozie"
const honourRoll = withGrades
  .filter((s) => s.grade === "A")
  .map((s) => s.name)
  .join(", ");

console.log(honourRoll);


// ---------- Part C: Curve (3 pts) ----------
// 8. Add 5 points to every score (max 100) WITHOUT changing `students`.
//    Log both arrays to prove the original is unchanged.
const curvedStudents = students.map((s) => ({
  ...s,
  score: Math.min(s.score + 5, 100)
}));

console.log(students);
