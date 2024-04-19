"use strict";
class Calculator {
    //basic arithmetic operations.
    //In each operation i take two numbers x-y as a parameter and these numbers return the result of operation.
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
    multiply(x, y) {
        return x * y;
    }
    divide(x, y) {
        if (y === 0) {
            throw new Error("Cannot divide by zero"); // divide method also includes error handling to prevent division by zero
        }
        return x / y;
    }
}
// Calculations
const calculator = new Calculator();
console.log("Addition:", calculator.add(5, 6));
console.log("Subtraction:", calculator.subtract(8, 3));
console.log("Multiplication:", calculator.multiply(5, 3));
console.log("Division:", calculator.divide(12, 3));
