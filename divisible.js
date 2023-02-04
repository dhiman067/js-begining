// show output from 1-50
// if the number is divisible by 3 then  instead of the number show me 'foo' 
// if the number is divisible by 5 then instea of the number show me 'bar' 
// if the number is divisible by 5 & 3 then instead of the number show me 'foobar'

for(i=1; i<=50; i++){
    if( i%3 == 0 && i%5 == 0){
        console.log('foobar')
    }
    else if(i%3 == 0){
        console.log("foo");
    }
    else if(i%5 == 0){
        console.log("bar")
    }
    else{
        console.log(i)
    }
   
}