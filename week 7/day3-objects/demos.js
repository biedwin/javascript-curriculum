// ============================================================
// Week 7 · Day 3 (Mon Oct 5) · Objects, destructuring, spread and rest
// Each demo sits in its own { } block so variable names can repeat.
// ============================================================

// ---------- Demo 1: Object basics ----------
{
  const student = {
    name: "Tolu",
    age: 24,
    skills: ["HTML", "CSS"],
    "favourite language": "JavaScript",
  };

  console.log(student.name);                  // dot notation
  console.log(student["favourite language"]); // brackets for spaces
  const key = "age";
  console.log(student[key]);                  // brackets for variables
  console.log(student.key);                   // undefined! looks for a key literally named "key"

  student.age = 25;                     // update
  student.city = "Lagos";               // add
  student.skills.push("JS");            // change nested array
  delete student["favourite language"]; // remove
  console.log(student);
}

// ---------- Demo 2: Methods and this ----------
{
  const account = {
    owner: "Tolu",
    balance: 0,
    deposit(amount) {
      this.balance += amount;
      return `${this.owner} now has ₦${this.balance}`;
    },
    withdraw(amount) {
      if (amount > this.balance) return "Insufficient funds";
      this.balance -= amount;
      return `${this.owner} now has ₦${this.balance}`;
    },
  };
  console.log(account.deposit(5000));  // "Tolu now has ₦5000"
  console.log(account.withdraw(2000)); // "Tolu now has ₦3000"
  console.log(account.withdraw(9000)); // "Insufficient funds"

  // Pitfall: arrow functions don't get their own `this`
  const bad = {
    balance: 100,
    show: () => console.log(this.balance), // undefined
  };
  bad.show();
}

// ---------- Demo 3: Looping over objects ----------
{
  const scores = { maths: 80, english: 72, physics: 65 };
  console.log(Object.keys(scores));    // ["maths", "english", "physics"]
  console.log(Object.values(scores));  // [80, 72, 65]
  console.log(Object.entries(scores)); // [["maths", 80], ["english", 72], ["physics", 65]]

  Object.entries(scores).forEach(([subject, score]) => {
    console.log(`${subject}: ${score}`);
  });

  const total = Object.values(scores).reduce((s, n) => s + n, 0);
  console.log(total); // 217
}

// ---------- Demo 4: Destructuring objects ----------
{
  const user = { name: "Ada", email: "ada@mail.com", role: "admin" };

  const { name, email } = user;
  const { role: userRole } = user;   // rename
  const { city = "Unknown" } = user; // default
  console.log(name, email, userRole, city);

  const order = { id: 1, customer: { name: "Bola" } };
  const { customer: { name: customerName } } = order; // nested
  console.log(customerName); // "Bola"
}

// ---------- Demo 5: Destructuring arrays and parameters ----------
{
  const colors = ["red", "green", "blue"];
  const [first, second] = colors;
  const [, , third] = colors;
  console.log(first, second, third);

  let a = 1, b = 2;
  [a, b] = [b, a]; // swap
  console.log(a, b); // 2 1

  function printUser({ name, role = "user" }) {
    console.log(`${name} (${role})`);
  }
  printUser({ name: "Ada", role: "admin" }); // "Ada (admin)"
  printUser({ name: "Bola" });               // "Bola (user)"
}

// ---------- Demo 6: Spread ----------
{
  const frontend = ["HTML", "CSS", "JS"];
  const backend = ["Node", "Express", "MongoDB"];
  const fullStack = [...frontend, "React", ...backend];
  console.log(fullStack);

  const copy = [...frontend];
  copy.push("Tailwind");
  console.log(frontend, copy); // original unchanged

  const base = { theme: "dark", fontSize: 14 };
  const settings = { ...base, fontSize: 16 }; // later keys win
  console.log(settings); // { theme: "dark", fontSize: 16 }

  console.log(Math.max(...[4, 9, 2])); // 9
}

// ---------- Demo 7: Rest ----------
{
  const sumAll = (...nums) => nums.reduce((s, n) => s + n, 0);
  console.log(sumAll(1, 2, 3, 4)); // 10

  const [head, ...tail] = [10, 20, 30];
  console.log(head, tail); // 10 [20, 30]

  const { password, ...safeUser } = { name: "Ada", email: "a@x.com", password: "secret" };
  console.log(safeUser); // { name: "Ada", email: "a@x.com" }
}

// ---------- Demo 8: Updating without mutating ----------
{
  const user = { name: "Ada", age: 25, address: { city: "Lagos" } };

  const updated = { ...user, age: 26 }; // ✅ new object
  console.log(user.age, updated.age);   // 25 26

  const copy = { ...user };             // ⚠️ spread is shallow
  copy.address.city = "Abuja";
  console.log(user.address.city);       // "Abuja" 😬

  const fresh = { name: "Bola", address: { city: "Lagos" } };
  const safe = { ...fresh, address: { ...fresh.address, city: "Abuja" } };
  console.log(fresh.address.city, safe.address.city); // "Lagos" "Abuja"

  // Arrays: add with [...list, item], remove with filter, update with map
  const list = [1, 2, 3];
  console.log([...list, 4], list.filter(n => n !== 2), list.map(n => (n === 3 ? 30 : n)));
}

const car = {
  model: "2025",
  tyres: 4,
  color: "black",
  move: function() {
    console.log("moving!")
  },
  "engine model": "V8",
  features: ["bullet-proof" , "4WD" , "proximity-sensor"],
  displayCarDetails(type) {
    return `This is a ${type} ${this.model} car`;
  },

  myCars: {
    car1: "Mercedes",
    car2: "BMW",
    car3: "Buggati"
  }
}

// Accessing an object
car.color; // "black"
car.model; // "2025"
car.move(); // "moving!"
car["engine model"]; // "V8"
car.features[1]; // "4WD"
console.log(car.displayCarDetails("SUV"));
car.features.push("manual");
car.myCars.car3; // "Buggati"
car["myCars"].car2; // "BMW"
car["myCars"]["car1"]; // "Mercedes"

// Adding to the object
car.mileage = 344000;

//update an object property
car.model = "2026";
console.log(car);

// Looping over objects


const studentScores = {
  maths: 80,
  english: 56,
  physics: 65,
  biology: 39,
  chemistry: 21,
  studentBio: {
    name: "Vura",
    class: "SS2",
    "class arm": "B"
  }
};

Object.keys(studentScores);
Object.values(studentScores);
Object.entries(studentScores);
delete studentScores.physics;
console.log(studentScores);


let studentResult = studentScores.studentBio.name + studentScores.english + "in English."
console.log(studentResult);

// Destructuring objects
const {maths, english, physics} = studentScores; // destructuring
console.log(maths, english, physics);
let myResult = studentScores.studentBio.name + "scored" + maths + " in Maths."
console.log(myResult);

// Updating without mutating
const user = {
  name: "michael",
  age: 37,
  address: {
    lga: "Khana",
    town: "Bori",
  },
  married: true
}
user.age = 50;
const oldUser = user; // referencing
oldUser.name = "Joshua";
const copyUser ={...user};
copyUser.age = 98;
console.log(copyUser);
const updatedUser = {...user, age: 40}
console.log(updatedUser);
console.log(user);


