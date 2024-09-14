function mealsOrder (chikenMenuCount, fishMenuCount, vegMenuCount) {
    let totalMenuPrice = chikenMenuCount * 10.35 + fishMenuCount * 12.4 + vegMenuCount * 8.15;
    let dessertPrice = 0.2 * totalMenuPrice;
    let totalPrice = totalMenuPrice + dessertPrice + 2.50;
    console.log (totalPrice);
}
mealsOrder (2, 4, 3);