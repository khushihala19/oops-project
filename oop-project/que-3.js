class Sequence {
    constructor() {
        if (this.constructor === Sequence) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    getValue(n) {
        throw new Error("Method 'getValue(n)' must be implemented.");
    }
}

class FibonacciSequence extends Sequence {
    getValue(n) {
        if (n < 0) return "Input should be a non-negative integer.";
        if (n === 0) return 0;
        if (n === 1) return 1;
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            [a, b] = [b, a + b];
        }
        return b;
    }
}

const fibSequence = new FibonacciSequence();
console.log(fibSequence.getValue(10)); 
console.log(fibSequence.getValue(0));  
console.log(fibSequence.getValue(1));  
console.log(fibSequence.getValue(15));
