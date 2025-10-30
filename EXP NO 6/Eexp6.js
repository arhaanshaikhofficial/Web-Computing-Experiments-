// calculator.js

const readline = require('readline');

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for first number
rl.question("Enter first number: ", function(num1) {
  rl.question("Enter operator (+, -, *, /): ", function(operator) {
    rl.question("Enter second number: ", function(num2) {

      // Convert input to numbers
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      // Perform calculation
      switch(operator) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = b !== 0 ? a / b : "Error: Division by zero";
          break;
        default:
          result = "Invalid operator";
      }

      console.log(`Result: ${result}`);

      rl.close();
    });
  });
});

// Handle close event
rl.on("close", function() {
  console.log("\nCalculator program ended.");
  process.exit(0);
});
