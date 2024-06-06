const palindromes = (string) => {
    const ALPHANUMERIC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    const palindrome = string
    .toUpperCase()
    .split("")
    .filter(char => ALPHANUMERIC.includes(char))
    .join("");

    const length = palindrome.length;
    for (let i = 0; i < length; i++) {
        if (palindrome[i] !== palindrome[length-1-i]){
            return false;
        }
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
