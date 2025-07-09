function getHighestPriceWeightRatio(carrotTypes) {
    let worstDeal = carrotTypes[0];
    let worstRatio = carrotTypes[0].price / carrotTypes[0].kg;

    for (let i = 1; i < carrotTypes.length; i++) {
        const ratio = carrotTypes[i].price / carrotTypes[i].kg;
        if (ratio > worstRatio) {
            worstRatio = ratio;
            worstDeal = carrotTypes[i];
        }
    }

    return worstDeal;
}

function getMaxValue(carrotTypes, capacity) {
    const cheapest = getHighestPriceWeightRatio(carrotTypes);
    return (capacity / cheapest.kg) * cheapest.price;
}

const carrotTypes = [
    { kg: 5, price: 100 },
    { kg: 7, price: 150 },
    { kg: 3, price: 70 }
];

const capacity = 36;

console.log(getMaxValue(carrotTypes, capacity));
