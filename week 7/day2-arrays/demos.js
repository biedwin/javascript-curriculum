// ============================================================
// Week 7 · Day 2 (Fri Oct 2) · Arrays and array methods: class demos
// ============================================================

// ---------- Demo 1: Array basics ----------
const fruits = ["apple", "mango", "pawpaw"];
console.log(fruits[0]);                  // "apple"
console.log(fruits.length);              // 3
console.log(fruits[fruits.length - 1]);  // "pawpaw"
console.log(fruits.at(-1));              // "pawpaw"
console.log(fruits.includes("mango"));   // true
console.log(fruits.indexOf("pawpaw"));   // 2
console.log(fruits.slice(0, 2));         // ["apple", "mango"] (a copy)

fruits.push("orange");   console.log(fruits); // add to end
fruits.pop();            console.log(fruits); // remove from end
fruits.unshift("guava"); console.log(fruits); // add to start
fruits.shift();          console.log(fruits); // remove from start
fruits.splice(1, 1);     console.log(fruits); // remove 1 item at index 1 ("mango")

const mixed = ["Ada", 25, true, null]; // any types
console.log(mixed);

const students = ["caleb", "zina", "elvis", "vure", "vera", "emma","favour"];
students.at(-1);
students.indexOf("zina"),
students.includes("elvis");

const items = [true, 500, "leah", null, 81, false, "joshua", ["saviour", 22, undefined, "101"], {age: 45}, ["caleb"]];
items[7][0]; //"saviour"
items[3]; // "null"
//how to add and remove elements/items from an array
items.push("ADA");
items.pop("LEAH") //remove an item to the end of an array
items.unshift("3789"); //add  item to the start/beginning of an array
items.shift(); // removes an item from the start/beginning of an array
items.splice(1, 2);

const deletedItems = items.splice(1, 2);
console.log(items);

const  evenNumbers = [2, 4, 6, 8];
const newNumbs = evenNumbers; // this is referencing an array and not copying an array
newNumbs.push(10); // [2, 4, 6, 8, 10]
console.log(eveNumbers); // [2, 4, 6, 8, 10]

// copy an array
const copyOfEven = [...evenNumbers]; //.. is called spread operator
copyOfEven.push(12);
console.log(evenNumbers); // [2, 4, 6, 8, 10]
console.log(copyOfEven); // [2, 4, 6, 8, 10, 12]

// forEach & map
// use forEach() if you want to perform an action without generating a new array
// use map() if you want to transform an array and generate a new array
const names = ["Ada", "Bola", "Ezekiel"];
names.forEach(name => {
  console.log(`welcome, ${name}`);
})  

const itemPrices = [122, 340, 20];
const newPrices = itemPrice.map(price => {
  return price * 2;
});
console.log(newPrices);

// filter
const cart = [23, 56, 87, 11, 5, 33, 60, 45];
cart.filter(item => {
  return item <= 50;
});

// Arrays of objects
const shoppingCart = [
  {name: "palm oil", price: 3000, qty: 4, available: true},
  {name: "honey", price: 5000, qty: 6, available: true},
  {name: "lotion", price: 1800, qty: 4, available: false},
  {name: "apple", price: 600, qty: 2, available: true},
  {name: "car battery", price: 38000, qty: 1, available: false},
];

shoppingCart[2].name; //"lotion"

const availableItems = shoppingCart.filter(item => item.available).map(item => item.name);
console.log(availableItems);

// ---------- Demo 2: Arrays are references ----------
const a = [1, 2, 3];
const b = a;        // same array, two labels
b.push(4);
console.log(a);     // [1, 2, 3, 4] 😬

const c = [...a];   // a real copy (spread: full lesson on Monday)
c.push(5);
console.log(a, c);  // [1, 2, 3, 4] [1, 2, 3, 4, 5]

// ---------- Demo 3: Callbacks ----------
const scores = [45, 82, 67];
scores.forEach((score, index, array) => {
  console.log(index, score, `of ${array.length}`);
});
for (let i = 0; i < scores.length; i++) {
  console.log(i, scores[i]); // the Week 6 way, for comparison
}

// ---------- Demo 4: forEach ----------
const names = ["Ada", "Bola", "Chidi"];
names.forEach(name => console.log(`Welcome, ${name}`));
names.forEach((name, i) => console.log(`${i + 1}. ${name}`));
console.log(names.forEach(n => n)); // undefined: forEach returns nothing

// ---------- Demo 5: map ----------
const prices = [1000, 2500, 4000];
const withVat = prices.map(price => price * 1.075);
console.log(withVat); // [1075, 2687.5, 4300]
console.log(prices);  // [1000, 2500, 4000] unchanged

const labels = prices.map((p, i) => `Item ${i + 1}: ₦${p}`);
console.log(labels);

const html = names.map(n => `<li>${n}</li>`).join("");
console.log(html); // "<li>Ada</li><li>Bola</li><li>Chidi</li>"
// In the browser, try: document.body.innerHTML += `<ul>${html}</ul>`;

// Common bug: braces but no return
console.log(prices.map(p => { p * 2 })); // [undefined, undefined, undefined]

// ---------- Demo 6: filter, find, some, every ----------
const results = [45, 82, 67, 30, 91, 58];
console.log(results.filter(s => s >= 50)); // [82, 67, 91, 58]
console.log(results.filter(s => s < 50));  // [45, 30]
console.log(results.find(s => s > 80));    // 82 (first match)
console.log(results.some(s => s > 90));    // true
console.log(results.every(s => s >= 30));  // true

// ---------- Demo 7: reduce (with a trace) ----------
const total = scores.reduce((sum, score) => {
  console.log(`sum ${sum} + score ${score} = ${sum + score}`);
  return sum + score;
}, 0);
console.log(total); // 194

const highest = scores.reduce((max, s) => (s > max ? s : max), scores[0]);
console.log(highest); // 82

// ---------- Demo 8: Arrays of objects and chaining ----------
const cart = [
  { name: "Keyboard", price: 15000, qty: 1, inStock: true },
  { name: "Mouse",    price: 5000,  qty: 2, inStock: true },
  { name: "Monitor",  price: 90000, qty: 1, inStock: false },
];

const cartTotal = cart
  .filter(item => item.inStock)
  .map(item => item.price * item.qty)
  .reduce((sum, n) => sum + n, 0);
console.log(cartTotal); // 25000

const inStockNames = cart.filter(i => i.inStock).map(i => i.name);
console.log(inStockNames); // ["Keyboard", "Mouse"]

