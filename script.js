function Calculator() {
    this.read = function() {
        this.numOne = +prompt('Enter Number One:');
        this.numTwo = +prompt('Enter Number Two:');
    },
    this.sum = function() {
        return this.numOne + this.numTwo;
    },
    this.mul = function() {
        return this.numOne * this.numTwo;
    }
}

let calculator = new Calculator();

calculator.read();
alert("Sum = " + calculator.sum());
alert("Product = " + calculator.mul());