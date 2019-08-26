// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2); 
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(drivers.length-2); 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare) {return fare * multiplier};
}

function fareDoubler(fare){
    const doubler = createFareMultiplier(2);
    return doubler(fare);
}

function fareTripler(fare){
    const doubler = createFareMultiplier(3);
    return doubler(fare);
}

function selectDifferentDrivers(drivers, fun){
    return fun(drivers);
}