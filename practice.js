var totalNumber = 90;
var alia = 96;
var dalia = 66;
var salia = 80;
var malia = 59;
var lilia = 47;
var jalia = 77;

// if(alia >= 90){
//     console.log('A+')
// }
// if(dalia >=80 || dalia<90);{
//     console.log("A")
// }

if(totalNumber >= 90){
    console.log('A+')
}
else if(totalNumber>=80 || totalNumber<90){
    console.log('A')
}
else if(totalNumber>=70 || totalNumber<80){
    console.log('B')
}
else if(totalNumber>=60 || totalNumber<70){
    console.log('C')
}




var signalRed = true;
if(signalRed == true){
    console.log("danger")
}

var signalYellow = true;
if (signalYellow == true){
    console.log('stop')
}
var signalGreen = true
if(signalGreen == true){
    console.log('walk')
}

// practice-1

var fruits = ['Apple', 'Banana', 'Orange'];
var index = fruits. indexOf('Banana');
console.log(index)
fruits[1] = 'Mango';
console.log(fruits);

fruits.pop('Orange');
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);


var myNumber = 85;
if(myNumber>=80){
    console.log('A+')
}
else if(myNumber>=60){
    console.log('B')
}
else if(myNumber>=50){
    console.log('c')
}
else if(myNumber>=40){
    console.log('D')
}
else{
    console.log('F')
}




var petersNumber = 56;
if(petersNumber>=80){
    console.log('A+')
}
else if(petersNumber>=60){
    console.log('B')
}
else if(petersNumber>=50){
    console.log('c')
}
else if(petersNumber>=40){
    console.log('D')
}
else{
    console.log('F')
}



// একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 
const num =[2,4,1,6,5,7];
console.log(Math.min(...num));

// -------------------

const num1 = [-200,10,-100];
if(num1[0]<num1[1] && num1[0]<num1[2]){
    console.log(num1[0]);
}
else if(num1[1]<num1[0] && num1[1]<num1[2]){
    console.log(num1[1]);
}
else{
    console.log(num1[2]);
}
