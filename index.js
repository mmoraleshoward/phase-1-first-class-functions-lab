// Code your solution in this file!


const returnFirstTwoDrivers = (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) => {
    return drivers.slice(0,2);
}


const returnLastTwoDrivers =(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) => {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
   
const createFareMultiplier = (number) => {
    return function (fare) {
        return number * fare
    }
}
 
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, driverFunction) => {
    return driverFunction(drivers)
}