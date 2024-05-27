let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07,  // US dollar
    "GBP": 0.87   // British pound
}

function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs["USD"];
    let yen = euros * oneEuroIs["JPY"];
    return yen;
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    let euros = yen / oneEuroIs["JPY"];
    let pounds = euros * oneEuroIs["GBP"];
    return pounds;
}


console.log(fromDollarToYen(1)); 
console.log(fromEuroToDollar(1)); 
console.log(fromYenToPound(1000));

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}