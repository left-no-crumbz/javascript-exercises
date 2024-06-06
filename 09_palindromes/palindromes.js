const palindromes = (string) => {
    let palindrome = string.split(" ").join("").split(",").join("").toUpperCase();
    if (string.endsWith("!") || string.endsWith(".")){
        const words = palindrome.split("");
        words.pop();
        palindrome = words.join("");
    }

    const length = palindrome.length;
    // let wordIsPalindrome = false;
    for (let i = 0; i < length; i++) {
        if (palindrome[i] !== palindrome[length-1-i]){
            return false;
        }
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
