function basketballEquipment(annualTrainingFee) {
    let sneakersPrice = 0.6 * annualTrainingFee;
    let outfitPrice = 0.8 * sneakersPrice;
    let ballPrice = (1 / 4) * outfitPrice;
    let accessoriesPrice = (1 / 5) * ballPrice;
    let totalPrice = annualTrainingFee + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;
    console.log(totalPrice);
    }
    basketballEquipment(365)