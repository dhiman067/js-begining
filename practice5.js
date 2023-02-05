// Write a function findLeapYear() that will take the array
// [2023,2024,2025,2028,2030] as the input parameter and will check if
// each year is a leap year. If a year is a leap year insert that year in a
// new array, return the new array and print the result.


function findLeapYear(years){
    const leapYears = [];
    for( i=0; i<years.length; i++){
        const result = years[i];
        if(result % 4 == 0){
            console.log('leapyear',result);
            leapYears.push(result);
        }
    }
    return leapYears;
}

const years = [2023,2024,2025,2028,2030];
console.log(findLeapYear(years));