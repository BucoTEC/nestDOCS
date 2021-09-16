function main(numOne, numTwo) {
  var quotient;
  if (numTwo === 0) {
    quotient = "Divide by 0! Cannot divide by zero!";
  } else {
    // Only change code below this line
    quotient = numOne / numTwo;
    // Only change code above this line
  }

  return quotient;
}

console.log(main(25, 5)); // change this line
console.log(main(420, 10)); // change this line
console.log(main(55, 0)); // change this line

module.exports = main;
