// // for loop       
  
// for (let i = 1; i <= 5; i++) {                                                         
//   console.log(i); // Prints numbers 1 to 5                                       
// }

// // while loop
// let i = 1;
// while (i <= 5) {
//   console.log(i); // Prints numbers 1 to 5
//   i++;
// }

// // do while loop
// let i = 1;
// do {
//   console.log(i); // Prints numbers 1 to 5
//   i++;
// } while (i <= 5);






// for loop

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }

// for (let i = 1; i <= 10; i++) {
//     console.log(i ** i);
//   }

// let str = "Hello";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// let list = [5, 10, 15, 20, 25];
// for (let i = 0; i < list.length; i++) {
//   console.log(list[i]);
// }

// 6. Print numbers from 10 to 1 (reverse order)
// for (let i = 10; i >= 1; i--) {
//     console.log(i,"reverse");
//   }

// 7. Print only even numbers from 10 to 20
//   for (let i = 10; i <= 20; i++) {
//     if (i % 2 == 0) {
//       console.log(i,"even");
//     }
//   }

// 8. Print the multiples of 5 between 20 to 50
//   for (let i = 20; i <= 50; i++) {
//     if (i % 5 == 0) {
//       console.log(i,"five");
//     }
//   }

//9. Print the factorial of a number (e.g., 5!)

//   let n = 5;
//   let factorial = 1;

//   for (let i = 1; i <= n; i++)
//     factorial *= i;

//   console.log(factorial,"factorial");







// while loop

//   // 1. Print numbers 1 to 10
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// // 2. Print the square of each number from 1 to 10
// let j = 1;
// while (j <= 10) {
//   console.log(j ** 2);
//   j++;
// }

// // 3. Print each character in a string
// let str = "Hello, World!";
// let k = 0;
// while (k < str.length) {
//   console.log(str[k]);
//   k++;
// }

// // 4. Sum of numbers from 1 to 10
// let l = 1;
// let sum = 0;
// while (l <= 10) {
//   sum += l;
//   l++;
// }
// console.log("Sum:", sum);

// // 5. Print each element in a list
// let list = [1, 2, 3, 4, 5];
// let m = 0;
// while (m < list.length) {
//   console.log(list[m]);
//   m++;
// }

// // 6. Print numbers from 10 to 1 (reverse order)
// let n = 10;
// while (n >= 1) {
//   console.log(n);
//   n--;
// }

// // 7. Print only even numbers from 10 to 20
// let o = 10;
// while (o <= 20) {
//   if (o % 2 == 0) {
//     console.log(o);
//   }
//   o++;
// }

// // 8. Print the multiples of 5 between 20 to 50
// let p = 20;
// while (p <= 50) {
//   if (p % 5 == 0) {
//     console.log(p);
//   }
//   p++;
// }

// // 9. Print the factorial of a number (e.g., 5!)
// let num = 5;
// let factorial = 1;
// let q = num;
// while (q > 0) {
//   factorial *= q;
//   q--;
// }
// console.log("Factorial:", factorial);

// // 10. Print numbers from a list that are greater than 10
// let numList = [5, 8, 12, 15, 3, 20];
// let r = 0;
// while (r < numList.length) {
//   if (numList[r] > 10) {
//     console.log(numList[r]);
//   }
//   r++;
// }




// // do while loop


// // 1. Print numbers 1 to 10
// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// // 2. Print the square of each number from 1 to 10
// i = 1;
// do {
//     console.log(i * i);
//     i++;
// } while (i <= 10);

// // 3. Print each character in a string
// let str = "Hello";
// i = 0;
// do {
//     console.log(str[i]);
//     i++;
// } while (i < str.length);

// // 4. Sum of numbers from 1 to 10
// let sum = 0;
// i = 1;
// do {
//     sum += i;
//     i++;
// } while (i <= 10);
// console.log(sum);

// // 5. Print each element in a list
// let list = [10, 20, 30, 40, 50];
// i = 0;
// do {
//     console.log(list[i]);
//     i++;
// } while (i < list.length);

// // 6. Print numbers from 10 to 1 (reverse order)
// i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i >= 1);

// // 7. Print only even numbers from 10 to 20
// i = 10;
// do {
//     console.log(i);
//     i += 2;
// } while (i <= 20);

// // 8. Print the multiples of 5 between 20 to 50
// i = 20;
// do {
//     console.log(i);
//     i += 5;
// } while (i <= 50);

// // 9. Print the factorial of a number (e.g., 5!)
// let num = 5, fact = 1;
// i = 1;
// do {
//     fact *= i;
//     i++;
// } while (i <= num);
// console.log(fact);

// // 10. Print numbers from a list that are greater than 10 using do...while
// let numbers = [5, 12, 7, 20, 15, 3, 25];
// i = 0;
// do {
//     if (numbers[i] > 10) {
//         console.log(numbers[i]);
//     }
//     i++;
// } while (i < numbers.length);
