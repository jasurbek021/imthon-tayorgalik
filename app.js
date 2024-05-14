// N{1}

// function reverseStringDigits(str) {
//     return str.split('').reverse().map(Number);
// }

// // Test qiling
// let input = "34567";
// let result = reverseStringDigits(input);
// console.log(result); // [7, 6, 5, 4, 3]

// N{2}

// let a = 10;
// let b = 10;

// if (a === 10 && b === 10) {
//     console.log("a va b teng 10 ga");
// } else {
//     console.log("a va b teng emas 10 ga");
// }


// N{3}

// function createArray(n, arr = []) {
//     if (n <= 0) {
//       return arr;
//     } else {
//       arr.unshift(n);
//       return createArray(n - 1, arr);
//     }
//   }

//   // Misol uchun, n=5
//   const n = 5;
//   const resultArray = createArray(n);
//   console.log(resultArray); // [1, 2, 3, 4, 5]

// N{4}

// const numbers = [10, 7, 25, 30, 42, 11]; // Misol uchun berilgan raqamlar arrayi

// const result = numbers.reduce((acc, curr) => {
//   if (curr % 2 === 0) {
//     acc[1] += curr; // Juft sonlarni yig'indini saqlash
//   } else {
//     acc[0] += curr; // Toq sonlarni yig'indini saqlash
//   }
//   return acc;
// }, [0, 0]);

// console.log(result); // Yangi arrayni consolga chiqaring

// N{5}

// function removeExclamationMarks(str) {
//     return str.replace(/!/g, '');
// }

// let text = "Bu ! bir ! misol ! matn !";
// let newText = removeExclamationMarks(text);
// console.log(newText); // "Bu  bir  misol  matn "

// N{6}

// function yigindi(array1, array2) {
//     let sum = 0;

//     for (let num of array1) {
//         sum += num;
//     }

//     for (let num of array2) {
//         sum += num;
//     }

//     return sum;
// }

// N{7}

// function removeFirstAndLast(str) {
//     return str.slice(1, -1);
// }

// N{8}

// function reverseArray(arr) {
//     return arr.reverse();
// }

// // Test qilish
// let array = [1, 2, 3, 4, 5];
// console.log(reverseArray(array)); // Natija: [5, 4, 3, 2, 1]

// N{9}

// function ochiribTashlash(string) {
//     if (string.endsWith('0')) {
//       return string.slice(0, -1);
//     }
//     return string;
//   }

//   // Test qilish
//   console.log(ochiribTashlash("12340")); // 1234
//   console.log(ochiribTashlash("56789")); // 56789

// N{10}

// function engKichikSon(array) {
//     let min = Math.min(...array);
//     return min ** 4 + "";
//   }
  
//   // Test
//   let numbers = [3, 7, 2, 9, 5];
//   console.log(engKichikSon(numbers)); // Output: "16"