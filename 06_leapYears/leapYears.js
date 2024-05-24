const leapYears = function(year) {
    let divBy4 = year % 4 === 0;
    let divBy100 = year % 100 === 0;
    let divBy400 = year % 400 === 0;
    console.log(divBy4 && !divBy100 && divBy400);
    return (!divBy100 || divBy400) && divBy4;
};

// Do not edit below this line
module.exports = leapYears;
