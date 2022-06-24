var sellingPrice = 100;
var listingPrice = 500;
var discountPercent = ((listingPrice-sellingPrice) / listingPrice) * 100;

console.log(`Discount percentage is ${discountPercent}`);

roundedOffPercent = Math.round(discountPercent);
console.log(`${roundedOffPercent}% off`);