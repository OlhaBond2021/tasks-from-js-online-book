//////////////////////////////////////////////////////////////////////////////////////////
// TASKS FROM CODEWARS:
// 8 LEVEL

// 1) У цій простій вправі ви побудуєте програму, яка приймає значення ,
// integer і повертає список його кратних до іншого значення, limit .
// Якщо limitкратне integer, його також слід включити. У функцію будуть передані лише додатні цілі числа,
// які не складатимуться з 0. Межа завжди буде вищою за базову.

// Наприклад, якщо переданими параметрами є (2, 6), функція має повертати [2, 4, 6],
// оскільки 2, 4 і 6 є кратними числам від 2 до 6.

// function findMultiples(integer, limit) {
//   //your code here
//   let array = [];

//   for (let i = integer; i <= limit; i += integer) {
//     array.push(i);
//   }

//   return array;
// }

// console.log(findMultiples(2, 6));

/////////////////////////////////////////////////////////////////////////////////////

// 2) Ваша функція приймає два аргументи:

// поточний вік батька (років)
// поточний вік його сина (років)
// Обчисліть, скільки років тому батько був удвічі старший за сина
// (чи через скільки років він буде удвічі старший). Відповідь завжди більше або дорівнює 0,
// незалежно від того, було це в минулому чи в майбутньому.

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   // your code here
//   // let result = dadYearsOld - (sonYearsOld * 2);
//   // if (result < 0) {
//   //   result *= -1;
//   // }
//   // return result;
//   // return Math.abs(dadYearsOld - 2 * sonYearsOld);
//   return (a > 2 * b) ? (a - 2 * b) : (2 * b - a);
// }

// console.log(twiceAsOld(36, 7)); // 22

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3) Дано три цілі числа a ,b,c, повернути найбільше число, отримане після вставки наступних операторів
// і дужок :+,*,()
// Іншими словами, спробуйте кожну комбінацію a, b, c із [*+()] і поверніть максимально отримане
// значення (прочитайте примітки, щоб дізнатися більше про це)
// приклад
// Якщо цифри 1, 2 і 3 , ось кілька способів розміщення знаків і дужок :

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// Отже, максимальне значення , яке ви можете отримати, це 9 .

// function expressionMatter(a, b, c) {
// let firstAttempt = a * (b + c);
// let secondAttempt = a * b * c;
// let thirdAttempt = a + (b * c);
// let fourthAttempt = (a + b) * c;
// let fifthAttempt = a + b + c;
// let array = [firstAttempt, secondAttempt, thirdAttempt, fourthAttempt, fifthAttempt];
// let max = array[0];

// for (let i = 1; i < array.length; i++) {
//   if (max < array[i]) {
//     max = array[i];
//   }
// }

// return max;// highest achievable result
//////////////////////////////////////
// let arr = [];
// arr.push(a + b + c);
// arr.push(a * b * c);
// arr.push(a + b * c);
// arr.push(a * b + c);
// arr.push((a + b) * c);
// arr.push(a * (b + c));
// return arr.reduce((a, b) => Math.max(a, b));
//////////////////////////////////////////////
//   return Math.max(
//     a + b + c,
//     a * b * c,
//     a * (b + c),
//     (a + b) * c,
//     a + b * c,
//     a * b + c
//   );
// }

// АБО

// const expressionMatter = (a, b, c) =>
//   Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);

// console.log(expressionMatter(2, 1, 2)); // 6
// console.log(expressionMatter(1, 2, 3)); //9
// console.log(expressionMatter(1, 1, 1)); // 3

///////////////////////////////////////////////////////////////////////////////////////........................................

// Прості числа Вільсона задовольняють наступну умову. НехайPпредставляє просте число.

// Потім,

// ((P-1)! + 1) / (P * P) , де "!" факторіал
// має давати ціле число.

// Ваше завдання — створити функцію, яка повертає, true якщо дане число є простим числом Вільсона .

// function amIWilson(p) {
// check if prime is Wilson                         ...........................   // не
// let mult = 0;                                     ...........................     вірне
//                                                     ...........................    рішення
// for (i = p - 1; i >= 1; i--) {
//   mult *= i;
// }
// let wilsonNum = (mult + 1) / (p * p);
// let str = String(wilsonNum);
// console.log(str);
// if (!str.includes('.')) {
//   return true;
// }
// return false;
// }
//..........................................................................................не вірне рішення

// function amIWilson(p) {
//   // "The only known Wilson primes are 5, 13 and 563."
//   return p==5 || p==13 || p==563
// }

// console.log(amIWilson(5)); // true
// console.log(amIWilson(9)); //false

////////////////////////////////////////////////////////////////////////////////////..................................................

// 4) Make a function that will return a greeting statement that uses an input; your program should return,
// "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

// function greet(name){
//   return `Hello, ${name} how are you doing today?`;
// }

//////////////////////////////////////////////////////////////////////////////////////

// 5) This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

// function checkForFactor (base, factor) {
//   // code here
//   // if (base % factor === 0) {
//   //   return true;
//   // }
//   // return false;

//   return base % factor === 0;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////

// 6)Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// function opposite(number) {
//   //your code here
//   return number * (-1);
// }

//////////////////////////////////////////////////////////////////

//7) Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// function digitize(n) {
//   //code here
//   let arrayOfNum = String(n).split('');
//   let newAr = [];
//   for (const n of arrayOfNum) {
//     newAr.push(+n);
//   }
//   return newAr.reverse();
//.........................АБО
//return String(n).split('').map(Number).reverse()
// }

// console.log(digitize(35231));

///////////////////////////////////////////////////////////////////////////////////

// 8)You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
// let sum = 0;

// for (const n of arr) {
//   if (n >= 0) {
//     sum +=n
//   }
// }
// return sum;
//.........................
// return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//............................
//return arr.filter(num => num >= 0).reduce((prev, curr) => prev + curr, 0);
//........................................
//const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
// }

//////////////////////////////////////////////////////////////////////////////////////

// 9) Write a function that checks if a given string (case insensitive) is a palindrome.
//  A palindrome is a word, number, phrase, or other sequence of symbols that reads the same
//  backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence:
//  "A man, a plan, a canal – Panama".

// function isPalindrome(x) {
// your code here
// let normX = x.toLowerCase();
// let revNormX = normX.split('').reverse().join('');
// if (normX === revNormX) {
//   return true;
// }
// return false;
//................................
//return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
//..............................................
// x = x.toLowerCase();
// let a = 0;
// let b = x.length;
// while (a < b) {
//   if (x[a] != x[b-1])
//     return false;
//   a++;
//   b--;
// }
// return true;
// }

// console.log(isPalindrome("a")); //true
// console.log(isPalindrome("Abba"));//true
// console.log(isPalindrome("hello"));//false

/////////////////////////////////////////////////////////////////////////////////////////

// 10) Timmy & Sarah think they are in love, but around where they live,
// they will only know once they pick a flower each. If one of the flowers has an even
// number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2){
//   // moment of truth
//   if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
//     return true;
//   }
//   if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
//     return true;
//   }
//   return false;
// }
// //................................

// function lovefunc(flower1, flower2){
//   return flower1 % 2 !== flower2 % 2;
// }
// //.................................
// function lovefunc(flower1, flower2){
//   return (flower1 + flower2) % 2 === 1
// }
// //..............................
//        const
//        lovefunc
//       =( Ͼ , Ͽ )=>
//           ! !
// ( ( Ͼ & 1) ^ (1 & Ͽ ) );

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 11) It's the academic year's end, fateful moment of your school report.
// The averages must be calculated. All the students come to you and entreat you to calculate their average for them.
// Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// function getAverage(marks){
//TODO : calculate the downward rounded average of the marks array
// let sum = 0;

// for (const n of marks) {
//   sum += n;
// }
// return Math.floor(sum / marks.length);
//....................
//return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
//.............................................
//return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
// }

//////////////////////////////////////////////////////////////////////////

// 12)Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// function abbrevName(name) {
// code away
// let arrayFromName = name.split("");
// console.log(arrayFromName);
// let firstLetter = arrayFromName[0].toUpperCase();
// let result = [];
// result.push(firstLetter + '.');

// for (let i = 1; i < arrayFromName.length; i++) {
//   if (arrayFromName[i] === " ") {
//     result.push((arrayFromName[i + 1]).toUpperCase());
//   }
// }
// return result.join('');
//...........................................
// var nameArray = name.split(" ");
// return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
//..........................................
//return name.split(' ').map(i => i[0].toUpperCase()).join('.');
// }

// console.log(abbrevName("Sam Harris")); // "S.H"

///////////////////////////////////////////////////////////////////////////////////

//               не вирішила самостійно
// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever
// it does not contain any lowercase letter so any string containing no letters
// at all is trivially considered to be in ALL CAPS.

// String.prototype.isUpperCase = function() {               не вирішила самостійно
//   // your code here
//   if (this === this.toUpperCase()) {
//     return true;
//   }
//   return false;
// }                                                          не вирішила самостійно

// String.prototype.isUpperCase = function () {
//   return this == this.toUpperCase();
// };
//.........................................
// String.prototype.isUpperCase = function() {
//   return this.toUpperCase() === this.toString();
// }
//..........................................
// String.prototype.isUpperCase = function () {
//   return !/[a-z]/.test(this);
// };
//.............................................
// String.prototype.isUpperCase = function() {
//   return this.valueOf().toUpperCase() === this.valueOf();
// };

// console.log("hello I AM DONALD".isUpperCase()); // false
