// // IF STATEMENTS:

// // 1.Check even or  odd.

// let number = parseInt(prompt("Enter a Number"));

// if (number %2=== 0) {
//     console.log(number +" is Even number")
// } else {
//     console.log(number +" is Add number")
// }


// // 2.Check if a number is divisible by 5.

// let five= parseInt(prompt("Enter a divisable by five"));

// if (five % 5 == 0) {
//     console.log(five + " is devisible by 5")
// } else {
//     console.log(five +" is not devisible by 5")
// }


// // 3. Compare two numbers and print the larger one.

// let Value_1 = parseInt(prompt("Enter a 1st Value"));
// let Value_2 = parseInt(prompt("Enter a 2nd Value"));

// if (Value_1 > Value_2) {
//     console.log(Value_1 + " is greater than Value_2")
    
// } else if (Value_1 < Value_2) {
//     console.log(Value_2 + " is greter than Value_1")
    
// } else if (Value_1 == Value_2) {
//     console.log("Value_1 and Value_2 are Equal")

// }else {
//      console.log("Please enter the correct Value")
// }


// // 4.Check if a string contains a specific substring.

// let string = prompt("Enter a String");
// let substring = prompt("Enter a Substring");

// if (string.includes(substring)) {
//   console.log("It is string contains a specific substring");
// } else {
//   console.log("It is not string contains a specific substring");
// }


// // 5.Check if a number is between 1 and 10.

// let number_1 = parseInt(prompt("Enter a Value"));

// if (number_1>=0 & number_1<=10) {
//     console.log("It is number between 1 and 10")
// } else {
//     console.log ("It is not number between 1 and 10")
// }


// // 6. Check if a character is a vowel.


// let Vowels = prompt("Enter a Vowels");
// let Character = ["a", "e", "i", "o", "u"];


// if (Character.includes(Vowels)) {                           //in same as includes
//     console.log("It is vowels")
// } else {
//     console.log("It is not vowels")
// }


// NESTED IF STATEMENTS TASK:

// // 1.Find the largest of three numbers.
// let num1 = parseInt(prompt("Enter a num1 :"));
// let num2 = parseInt(prompt("Enter a num2 :"));
// let num3 = parseInt(prompt("Enter a num3 :"));



// if (num1 > num2) {
//   if (num1 > num3) {
//     console.log("It is num1 is greater than num2 and num3");
//   } else {
//     console.log("It is num3 is greater than num1 ");
//   }
// }
// else if (num2 > num1) {
//   if (num2 > num3) {
//     console.log("It is num2 is greater than num2 and num3");
//   } else {
//     console.log("It is num3 is greater than num1 ");
//   }
// }
// else if (num3 > num1) {
//   if (num3 > num2) {
//     console.log("It is num3 is greater than num2 and num1");
//   } else {
//     console.log("It is num2 is greater than num3 ");
//   }
// }

// 2..Check if a number is divisible by 2, 3, or both.

// let num2 = parseInt(prompt("Enter a 1st number"));
// let num3 = parseInt(prompt("Enter a 2st number"));

// if (num2 %2 == 0) {
//     if (num3 %3== 0){
//         console.log("It is divisible by both 2 and 3")
//     else {
//         console.log("It is divisible by 3 only")
//     }
// }
// else if (num3 % 3 == 0) {
//         console.log("It is devisible by both 3 and 2")
// } else {
//     ("It is divisible by 2 only")
//     }


// 3.Check if a number lies in the range 10-50.
// let range = parseInt(prompt("Enter a 1st range number"));

// if (range >= 10) {
//     if (range <= 50) {
//         console.log("It is Range between 10 to 50")
//     } else {
//         console.log("It is out of range ")
//     }
// } else {
//         console.log("It is less of range")
    
// }


// 4.Check if a year is a leap year.

// let year = parseInt(prompt("Is it leap year ? "));
// if (year %4 == 0) {
//     if (year %100== 0) {
//         console.log("It is leap year")
//     }
//     else {
//         console.log("It is somwtimes working leap year")
//     }
// } else if (leap_year%4!=0)
//        if (leap_year%100!=0){
//        }
//        else {
//           console.log("It is not leap year")
//     }

// 5. Check if a number is positive, negative, or zero, and whether it is even or odd.
// 6.check  if a number is positive, negative, or zero.
// 7.check if a number is even or odd and within a 1 -10 range.
// 8.Check if a person is eligible to vote by citizen.

// Switch CASE TASK:

// 1.Check a day as weekday or weekend.

let Day = prompt("Enter a Day");
switch (Day) {
    case "monday" :  case "tuesday":  case "wednesday":  case "thursday" :    case "friday":
        console.log("It is a week Day")
        break;
    
    case "saturday": case "sunday":
        console.log("It is a week end day")
        break;
    default:
        console.log("Please enter a correct day")
}

// // 2.print a no of days in a month.

let Month = prompt("Enter a Month");

switch (Month) {
    case "january":  case "march": case "may":    case "july":case "august": case "october": case "december":
        console.log("It is 31 Days")
        break;
    case "april": case "june": case "september": case "november":
       console.log("It is 30 Days")
        break;
    case "february":
        console.log("It is 28/29 Days")
        break;
    default:
        console.log("Please enter a correct value of month")
}


// // 3.print a entered input is vowels or consonants
let Character = prompt("Enter a character:").toLowerCase();
switch (true) {
  case "aeiou".includes(Character):
    console.log("It is a vowel");
    break;
  case /[a-z]/.test(Character):
    console.log("It is a consonant");
    break;
  default:
    console.log("Please enter a valid letter");
}
   
// // 4.grade by percentage.

// let Grade = prompt("Enter a Grades :");

// switch (Grade) {
//     case "A":
//         console.log("It is 100 to 71")
//         break;
//     case "B":
//         console.log("It is 70 to 50")
//         break;
//     case "C":
//         console.log("It is 49 to 35")
//         break;
//     default:
//         console.log("It is Fail categories")
// }


