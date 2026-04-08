// Part 1: Date Display

// create a Date object for today
const today = new Date();

// getMonth() is 0-based so I add 1 to get the real month
const rawMonth = today.getMonth() + 1;
const rawDay = today.getDate();
const year = today.getFullYear();

// add a leading zero if month or day is a single digit
const month = rawMonth < 10 ? "0" + rawMonth : String(rawMonth);
const day = rawDay < 10 ? "0" + rawDay : String(rawDay);

// build the string and display it
const dateString = "Today is " + month + "/" + day + "/" + year;
document.getElementById("dateOutput").textContent = dateString;


// Part 2: Number Conversion

// four test values: two numeric strings, one decimal, one non-numeric
const valA = "42";
const valB = "100";
const valC = "19.75";
const valD = "hello";

// convert each value and check isNaN and isInteger
const convertedA = Number(valA);
const isNanA = Number.isNaN(convertedA);
const isIntA = Number.isInteger(convertedA);
const resultA = "Original: " + valA + " | Converted: " + convertedA + " | isNaN: " + isNanA + " | isInteger: " + isIntA;

const convertedB = Number(valB);
const isNanB = Number.isNaN(convertedB);
const isIntB = Number.isInteger(convertedB);
const resultB = "Original: " + valB + " | Converted: " + convertedB + " | isNaN: " + isNanB + " | isInteger: " + isIntB;

const convertedC = Number(valC);
const isNanC = Number.isNaN(convertedC);
const isIntC = Number.isInteger(convertedC);
const resultC = "Original: " + valC + " | Converted: " + convertedC + " | isNaN: " + isNanC + " | isInteger: " + isIntC;

const convertedD = Number(valD);
const isNanD = Number.isNaN(convertedD);
const isIntD = Number.isInteger(convertedD);
const resultD = "Original: " + valD + " | Converted: " + convertedD + " | isNaN: " + isNanD + " | isInteger: " + isIntD;

// combine all four results and put them on the page
const conversionHTML = "<p>" + resultA + "</p>" +
  "<p>" + resultB + "</p>" +
  "<p>" + resultC + "</p>" +
  "<p>" + resultD + "</p>";

document.getElementById("numberConversionOutput").innerHTML = conversionHTML;


// Part 3: Math and Number Formatting

// using a simple price calculator
const itemPrice = 49.99;
const taxRate = 0.0975;
const shippingCost = 5.50;

const subtotal = itemPrice + shippingCost;
const taxAmount = itemPrice * taxRate;
const total = subtotal + taxAmount;

// format the results using toFixed and toLocaleString
const subtotalFormatted = subtotal.toFixed(2);
const taxFormatted = taxAmount.toFixed(2);
const totalFormatted = total.toFixed(2);
const totalLocale = total.toLocaleString("en-US", { style: "currency", currency: "USD" });

const mathHTML = "<p>Item Price: $" + itemPrice.toFixed(2) + "</p>" +
  "<p>Shipping: $" + shippingCost.toFixed(2) + "</p>" +
  "<p>Subtotal: $" + subtotalFormatted + "</p>" +
  "<p>Tax (9.75%): $" + taxFormatted + "</p>" +
  "<p>Total: " + totalLocale + "</p>";

document.getElementById("mathOutput").innerHTML = mathHTML;


// Part 4: Conditionals

// check if valD converted to NaN
let nanMessage;
if (Number.isNaN(convertedD)) {
  nanMessage = valD + " is not a valid number.";
} else {
  nanMessage = valD + " was converted successfully.";
}

// check if the total is above 50
let spendingMessage;
if (total >= 50) {
  spendingMessage = "Total is $" + totalFormatted + ". This order qualifies for free returns.";
} else {
  spendingMessage = "Total is $" + totalFormatted + ". This order does not qualify for free returns.";
}

const conditionalHTML = "<p>" + nanMessage + "</p><p>" + spendingMessage + "</p>";
document.getElementById("conditionalOutput").innerHTML = conditionalHTML;


// Extra Credit: typeof

// checking the type of five different values
const ec1 = 42;
const ec2 = "hello";
const ec3 = true;
const ec4 = null;
const ec5 = undefined;

const typeofHTML = "<p>42 - typeof: " + typeof ec1 + "</p>" +
  "<p>\"hello\" - typeof: " + typeof ec2 + "</p>" +
  "<p>true - typeof: " + typeof ec3 + "</p>" +
  "<p>null - typeof: " + typeof ec4 + " (null is technically an object in JS, which is a known bug)</p>" +
  "<p>undefined - typeof: " + typeof ec5 + "</p>";

document.getElementById("typeofOutput").innerHTML = typeofHTML;
