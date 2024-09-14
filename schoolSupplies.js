function schoolSupplies(penPackCount, markerPackCount, detergentLiters, discountPrecent) {
    let suppliesPrice = penPackCount * 5.8 + markerPackCount * 7.2 + detergentLiters * 1.2;
    let discountDecimal = discountPrecent / 100;
    let discountSum = discountDecimal * suppliesPrice;
    let finalPrice = suppliesPrice - discountSum;
    console.log(finalPrice);
    
}
schoolSupplies(2, 3, 4, 25)