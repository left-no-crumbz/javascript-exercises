const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((total, current) => total + current, 0);

const multiply = (arr) => arr.reduce((total, current) => total * current);

const power = (a, b) => a ** b;

const factorial = (num) => {
	switch(num) {
    case 0:
      return 1;
    default: {
      let fac = 1;
      for (let index = num; index > 0; index--) {
        fac *= index; 
        
      }
      return fac;
    }
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
