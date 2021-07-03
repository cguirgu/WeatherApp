// Callback Notes
// callback function: a function provided as an argument to another function to call at later time


/**
 * This function contains a callback function. Since this function contains an asynchronous method,
 * setTimeout(), we cannot 'return' our sum from within the setTimeout function because
 * that would result with 'undefined' being returned since nothing is actually being returned from 
 * the add() function itself.
 * 
 * @param {*} a first number 
 * @param {*} b second number
 * @param {*} callback callback function that will be called with the sum of a and b
 */
const add = (a, b, callback) => {
    // this is suppose to simulate a single asychronous function (in other words, pretend
    // setTimeout() wasn't there and it was just an asynchronous function)
    setTimeout(() => {
        callback(a+b)
    }, 2000)
}

// So when we go and call the add() function like below, it will print the sum
add(1,4,(sum) => {
    console.log(sum)
})