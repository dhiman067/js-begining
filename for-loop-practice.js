// loop

// for-loop

var dailyRoutines = ['unlock module at 8 p.m', 'watch vodeo & practice', 'take notes while watching videos', 'practice by yourself', 'if understands, good', 'if not'];

for(i = 0; i<dailyRoutines.length; i++){
    var dailyRoutine = dailyRoutines[i];
    console.log(dailyRoutine);
    if(dailyRoutine == 'if not'){
        console.log('join support session');
    }
}

// while-loop
var number = [100,200,300,400,500]
let sum = 0;
for(i = 0; i<number.length; i++){
    var result = number[i];
    // console.log(result);
    sum = sum+result;
}
console.log(sum);



