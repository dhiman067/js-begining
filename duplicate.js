// যেই জিনিশ গুলা বার বার আছে ওগুলি দেখাব না

const num = [1,3,5,6,7,8,1,4,5,6,23,45,68,3,5,65,23];

function removeDuplicatenum(number){
    const newArray = [];
    for(i=0; i < number.length; i++){
        const numbers = number[i];
        if(newArray.includes(numbers) === false){
            newArray.push(numbers);
        }
        
    }
    return newArray;
}

console.log( removeDuplicatenum(num));