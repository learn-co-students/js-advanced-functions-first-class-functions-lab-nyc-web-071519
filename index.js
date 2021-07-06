// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(0, 2);
}

const returnLastTwoDrivers = function(arrayOfDrivers){
    return arrayOfDrivers.slice(arrayOfDrivers.length-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    const fareMultiplier = function(fare){
        return fare * num;
    }
    return fareMultiplier;
}

function fareDoubler(fare){
    const doubler = createFareMultiplier(2);
    return doubler(fare)
}

function fareTripler(fare){
    const doubler = createFareMultiplier(3);
    return doubler(fare);
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}