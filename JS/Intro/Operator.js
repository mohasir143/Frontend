// It is used as variable name as 1. LET  2.  VAR   3.  CONST



// Arithmetic Operators

// let x = 10;
//  x++;
//  x--;
// let y = 5;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);
// console.log(x + y);
// console.log(x - y);


// Assignment Operators

// let x = 5

// x = 5;
// x += 8;
// x -= 8;
// x *= 8;
// x /= 8;
// x %= 8;
// x **= 8;

// console.log(x);



// Shift Assignment Operators


// Left shift
// let x = 5;   // 5 in binary is 0000000000101                101 -5 number binary number
// x <<= 2;     // Shift left by 2 positions: 00000010100      add right to left  2 zero =  101+00 = 10100
// console.log(x); // 20                                       It is add last value
  

// Right Shift
// let y = 20;  // 20 in binary is 00000010100                 10100 - 20 number binary value
// y >>= 2;     // Shift right by 2 positions: 00000000101     minus last two numbers = 10100  = 101
// console.log(y); // 5                                        It is minus last value



// Biwise Assignment Operators

// And = True + True  =True
// Or  = Any one value True is True
// Xor = It is any value true is true but same value same as false  (TT=F - FF=F)  (TF=T - FT=T)

// let a = 5;
// let b = 3;

// console.log(a &= b);
// console.log(a |= b);
// console.log(a ^= b);



// Logical Assignment Operators

// Same as bitwise method

// let j = 19;
// let m = 7;

// console.log(m &&= j);
// console.log(m ||= j);
// console.log(m ??= j);             It is nulle set concept



// Ternary Operators

// It has one line to output without conditions write
// Syntax = variable = (condition) ? "expression1" : "expression2";

// let age = 15;
// let canDrive = (age >= 16) ? "Yes, you can drive" : "No, you cannot drive";
// console.log(canDrive); // Output: Yes, you can drive

// Nested
// Syntax = variable = (condition) ? "expression1" : (condition) ? "expression2" : "expression3";

// let age = 20;
// let message = (age < 18) ? "You are a minor" : (age < 21) ? "You are an adult, but can't drink in the US" : "You are an adult and can drink";
// console.log(message); // Output: You are an adult, but can't drink in the US




