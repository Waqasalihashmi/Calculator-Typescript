class Calculator {
    //basic arithmetic operations.
    
    //In each operation i take two numbers x-y as a parameter and these numbers return the result of operation.
    
        add(x: number, y: number): number {
            return x + y;
        }
    
        subtract(x: number, y: number): number {
            return x - y;
        }
    
        multiply(x: number, y: number): number {
            return x * y;
        }
    
        divide(x: number, y: number): number {
            if (y === 0) {
                throw new Error("Cannot divide by zero");// divide method also includes error handling to prevent division by zero
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
    