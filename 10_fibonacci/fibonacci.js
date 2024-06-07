const fibonacci = (num) => {
    // RECURSIVE ANSWER
    // if (num < 0){
    //     return "OOPS";
    // }
    // if (+num < 2) {
    //     return +num;
    // }
    // return fibonacci(+num-1) + fibonacci(+num-2);

    // top down approach (memoization)
    // if (num < 0) return "OOPS";
    // const memo = {
    //     0: 0,
    //     1: 1
    // }

    // function fibMemo(num) {
    //     if(+num in memo){
    //         return memo[+num];
    //     }
    //     memo[+num] = fibMemo(+num-1) + fibMemo(+num-2); 
    //     return memo[+num];
    // }
    // return fibMemo(num);

    // bottom-up dp (tabulation)
    // const dp = [0, 1];

    // for (let i = 2; i <= +num; i++) {
    //     const n = dp[i-2] + dp[i-1];
    //     dp.push(n);   
    // }
    // return dp[+num];

    if (num < 0) {return "OOPS";}
    if (+num < 2) {return +num;}

    let previous = 0;
    let current = 1;
    for (let i = 2; i <= +num; i++) {
        const temp = current;
        current = current + previous;
        previous = temp;
    }
    return current;
}

// Do not edit below this line
module.exports = fibonacci;
