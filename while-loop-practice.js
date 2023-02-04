var dailyRoutines = ['unlock module at 8 p.m', 'watch video & practice', 'take notes while watching videos', 'practice by yourself', 'if understands, good', 'if not'];

var i = 0;
while(i<dailyRoutines.length){
    var dailyRoutine = dailyRoutines[i];
    i++;
    
    if(dailyRoutine == 'if understands, good'){
        continue;
    }
    console.log(dailyRoutine);
    if(dailyRoutine == 'if not'){
        console.log('join support session');
    }
    
}