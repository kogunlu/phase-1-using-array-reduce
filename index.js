const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function addValues(curValue,preValue){
    return curValue + preValue
}

const totalBatteries = batteryBatches.reduce(addValues,0)