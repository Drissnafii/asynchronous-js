// call back funciton explain
/*function exampleCallbackFunction(a, b, callbackOperation) {
    console.log("Before executing the callback function.");
    if (Math.random() > 0.5) {
        console.log("Random condition met.");
        let result = callbackOperation(a, b);
    }
    console.log("After executing the callback function.");
} */

// result options

sum = (a, b) => {
    console.log("Sum function executed.");
    return a + b
};
multiply = (a, b) => {
    console.log("Multiply function executed.");
    return a * b;
};

divide = (a, b) => {
    console.log("Divide function executed.");
    return a / b;
}; 

// callback = a function that is passed as an argument
//            to another function.
//
//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases
//
//            "Hey, when you're done, call this next."


