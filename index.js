const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// Use the reduce method to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);
module.exports = { totalBatteries };
