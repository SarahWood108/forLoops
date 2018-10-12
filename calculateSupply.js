function calculateSupply(age, numPerDay) {
    let maxAge = 100;
    let totalNeeded = (numPerDay * 365) * (maxAge - age);
    let message = "You will need" + " " + totalNeeded + " " + "cups of tea to last you until the ripe old age of" + " " + maxAge;
    console.log(message);
}

calculateSupply(30, 30);
calculateSupply(42, 6.4);
calculateSupply(21, 6);