const phones = [
    { name: 'samsung', price: 40000, quantity: 2 },
    { name: 'xaiomi', price: 30000, quantity: 3 },
    { name: 'oppo', price: 20000, quantity: 1 },
    { name: 'iphone', price: 80000, quantity: 4 },
    { name: 'vivo', price: 10000, quantity: 5 },
];

function product(number){
    let sum =0;
    for(i=0; i<number.length; i++){
        const phone = number[i];
        const phonePrice = phone.price * phone.quantity
        sum = sum + phonePrice;
    }
    return sum;
    
}
const totalPrice = product(phones);
console.log(totalPrice);

const nayoks=['Bangla Bhai','English Bhai','Korean Bhai']
for( const nayok of nayoks){
    // console.log(nayoks)
}

let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 

}
console.log(sum)


const nayok=['Bangla Bhai','English Bhai','Korean Bhai']
const length = nayok.length;
console.log(length);
const inDex = nayok.indexOf('Bangla Bhai');
console.log(inDex);