const sumAll = function(x, y) {
    let error = (!Number.isFinite(x) || !Number.isFinite(y)) || (x < 0 || y < 0); 

    if (error) {
        return "ERROR";
    } else if (y > x) {
        return ((y+x) * (y))/2;
    } else if (x > y){
        return ((y + x) * (x))/2;
    } 
};

// Do not edit below this line
module.exports = sumAll;
