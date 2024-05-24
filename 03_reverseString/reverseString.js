const reverseString = function(string) {
    let reversed = ""
    let last_index = string.length - 1
    let length = string.length;

    // SOLUTION 1: w/o using built-in methods but for loop is reversed
        // for (let i = last_index; i >= 0; i--) {
        //     reversed += string.charAt(i);
        // }
    
    // SOLUTION 2: for loop is not reversed
        // for (let i = 0; i < length; i++) {
        //     reversed = string.charAt(i) + reversed;
        // }

    // SOLUTION 3: w/o using for loop
    return string.split("").reverse().join("");


};

// Do not edit below this line
module.exports = reverseString;
