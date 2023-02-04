const phones = [
    { name: 'samsung', camera: 16, storage: '32gb', price: 40000 },
    { name: 'xaiomi', camera: 16, storage: '32gb', price: 30000 },
    { name: 'oppo', camera: 16, storage: '32gb', price: 20000 },
    { name: 'iphone', camera: 16, storage: '32gb', price: 80000 },
    { name: 'vivo', camera: 16, storage: '32gb', price: 10000 },
];
function cheapestphone(number){
    let cheapest = number[0];
    for( i=0; i<number.length; i++){
        const phone = number[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
   return cheapest
}
const mySelection = cheapestphone(phones);
console.log(mySelection);

