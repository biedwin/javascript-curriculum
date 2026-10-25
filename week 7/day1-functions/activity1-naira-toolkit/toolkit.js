// ============================================================
// Activity 1: Naira toolkit (pairs, 40 min)
// Driver and navigator, swap at step 4.
// Fill in every TODO. Each function must RETURN a value.
// ============================================================

// 1. Arrow function with a default rate
const addVat = (amount, rate = 0.075) => {
  // TODO: return amount plus VAT
  let VAT = amount * rate;
  return amount + VAT;
};
// addVat(2300);

// 2. Function declaration with a default percent
function applyDiscount(amount, percent = 0) {
  // TODO: return amount minus percent% of amount
  let discount = amount * (percent / 100);
  return amount - discount;
}
// applyDiscount(5000);
// applyDiscount(2350, 5);

// 3. Done for you: formats a number as naira
const formatNaira = (amount) =>
  "₦" + amount.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// 4. Split a bill between people
const splitBill = (total, people = 2) => {
  // TODO: return 0 if people is less than 1
  if (people < 1) {
    retun 0;
  }
  // TODO: otherwise return total divided by people
  return total / people;
};
// splitBill(10000, 3);

// 5. Use your functions to print the bill
const subtotal = Number(prompt("Enter subtotal:"));
const people = Number(prompt("Enter no of people to split the bill"))
const subtotalWithVat = addVat(subtotal);
// TODO: const discounted = applyDiscount(...)   (10% off)
const discountPrice = applyDiscount(subtotalWithVat, 10);
// TODO: const perPerson = splitBill(...)        (3 people)
const costPerPerson = splitBill(discountPrice, people);

console.log("===== BILL =====");
console.log(`Subtotal: ${formatNaira(subtotal)}`);
// TODO: print "With VAT", "After 10% off" and "Each of 3 pays"
console.log(`With VAT: ${formatNaira(subtotalWithVat)}`);
console.log(`After 10% off: ${formatNaira(discountPrice)}`);
console.log(`Each of ${people} pays: ${formatNaira(costPerPerson)}`);


// Expected output:
// ===== BILL =====
// Subtotal: ₦20,000.00
// With VAT: ₦21,500.00
// After 10% off: ₦19,350.00
// Each of 3 pays: ₦6,450.00

// Stretch: write calculateBill(subtotal, discount, people) that calls the
// other four functions and RETURNS the whole bill as one string.
function calculateBill(subtotal, discount, people) {
  const subtotalWithVat = addVat(subtotal);
  const discountPrice = applyDiscount(subtotalWithVat; discount);
  const costPerPerson = splitBill(discountPrice, people);

  return ` ===== BILL =====
  Subtotal: ${formatNaira(subtotal)}
  With VAT: ${formatNaira(subtotalWithVat)}
  After ${discount} 10% off: ${formatNaira(discountPrice)}
  Each of ${people} pays: ${formatNaira(costPerPerson)}`;
}

calculateBill(120000, 15, 4);

// Discussion:
// - Which functions did you make arrows, and why?
// - What should splitBill(5000, 0) return?
