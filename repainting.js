function calculateRenovationCost(plasticSheetArea, paintLiters, thinnerLiters, workingHours) {
    let nylonPricePerSquareMeter = 1.50;
    let paintPricePerLiter = 14.50;
    let thinnerPricePerLiter = 5.00;

    let additionalNylon = 2;
    let additionalPaint = paintLiters * 0.10;

    let totalNylon = plasticSheetArea + additionalNylon;
    let totalPaint = paintLiters + additionalPaint;
    
    let nylonCost = totalNylon * nylonPricePerSquareMeter;
    let paintCost = totalPaint * paintPricePerLiter;
    let thinnerCost = thinnerLiters * thinnerPricePerLiter;

    let totalMaterialsCost = nylonCost + paintCost + thinnerCost + 0.40;


    let laborCost = totalMaterialsCost * 0.30 * workingHours;

    let totalCost = totalMaterialsCost + laborCost;
    console.log(totalCost);
    
}
calculateRenovationCost(10, 11, 4, 8);