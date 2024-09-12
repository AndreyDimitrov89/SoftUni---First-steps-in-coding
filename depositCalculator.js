function depositCalculator(depositSum, depositPeriod, annualInterestPrecent) {
let annualInterestDecimal = annualInterestPrecent / 100;
    let sum = depositSum + depositPeriod * ((depositSum * annualInterestDecimal) /12);
console.log(sum)
}
depositCalculator (200, 3, 5.7);