// Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.
// ------------------------------

function hourTominutes(hour) {
    const minutes = hour*60;
    return minutes;
}
const hour = 5;
console.log(hourTominutes(hour),'minute');