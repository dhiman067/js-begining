function getOddNumbersAndSum(array) {
    let oddNumbers = [];
    let oddSum = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        oddNumbers.push(array[i]);
        oddSum += array[i];
      }
    }
    return { oddNumbers, oddSum };
  }
  
  const numbers = [12, 65, 45, 78, 32, 45, 91];
//   const result = getOddNumbersAndSum(numbers);
//   console.log(result.oddNumbers); // Output: [65, 45, 45, 91]
//   console.log(result.oddSum); // Output: 246
console.log(getOddNumbersAndSum(numbers));
  