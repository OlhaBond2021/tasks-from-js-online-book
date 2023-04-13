// objects

// let user = {};
// user.name = "Ivan";
// user.surname = "Smith";
// user.name = "Peter";
// delete user.name;
// console.log(user);

/////////////////////////////////////

// let schedule = {};

// function isEmpty(obj) {
//   for (let key in obj) {
//     // якщо цикл розпочався, властивість є
//     return false;
//   }
//   return true;
// }

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "Вставай";

// alert( isEmpty(schedule) ); // false

////////////////////////////////////////////////////

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// function sumAllSalaries(obj) {
//   for (let key in obj) {
//     sum += obj[key];
//   }
//   return sum;
// }

// console.log(sumAllSalaries(salaries));

///////////////////////////////////////////////////////

// Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.

// // до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "Моє меню",
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     console.log(obj[key]);
//     console.log(typeof obj[key]);
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }
// multiplyNumeric(menu);
// console.log(menu);

// // після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: "Моє меню",
// };

//////////////////////////////////////////////////////

// let a = {};
// let b = a; // копіювання посилання

// alert( a == b ); // true, обидві змінні посилаються на той самий об’єкт
// alert( a === b ); // true

// let a = {};
// let b = {}; // два незалежні об’єкти

// alert( a == b ); // false

// Ми також можемо використовувати Object.assign щоб замінити цикл for..in для простого клонування:

// let user = {
//   name: "Іван",
//   age: 30
// };

// let clone = Object.assign({}, user);

//////////////////////////////////////////////////////////////

// let a = +prompt("first number?");
// let b = +prompt("second number?");
// function sum(a, b) {
//   return alert(a + b);
// };

// sum(a, b);

///////////////////////////////////////////////////////////////

//   Створіть функцію readNumber, яка запросить число, поки відвідувач не введе дійсне числове значення.

// Отримане значення потрібно повернути як число.

// Відвідувач також може зупинити процес, ввівши порожній рядок або натиснувши “CANCEL”. У цьому випадку функція повинна повернути null.

// function readNumber() {
//   let number = +prompt("write a number");
//   if(isNaN(number)) {
//     number = +prompt("write a number");
//   } else if (number == 0) {
//     alert("null");
//   } else {
//     alert(number);
//   }
// }

// readNumber();   --------------------wrong all above line

// function readNumber() {
//   let num;

//   do {
//     num = prompt("Введіть число", 0);
//   } while ( !isFinite(num) );

//   if (num === null || num === '') return null;

//   return +num;
// }

// alert(`Read: ${readNumber()}`);

/////////////////////////////////////////////////////

// Цей цикл безкінечний. Він ніколи не закінчується. Чому?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
// рішення
// Це тому, що i ніколи не буде дорівнювати 10.

// Запустіть код, щоб побачити реальні значення i:

// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert( i );
// }

//////////////////////////////////////////

// Вбудована функція Math.random() створює випадкове значення від 0 до1 (не враховуючи 1).

// Напишіть функцію random(min, max) для створення випадкового числа з плаваючою крапкою від min до max (не враховуючи max).

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// alert(random(1, 5));
// alert(random(3, 5));
// alert(random(4, 5));

// Створіть функцію randomInteger(min, max), яка генерує випадкове ціле число від min до max включно.

// Будь-яке число з інтервалу min..max повинно з’являтися з однаковою ймовірністю.

// function randomInteger(min, max) {
//   return Math.round(min + Math.random() * (max - min));
// }

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

// Функція працює, але вона неправильна. Ймовірність отримати граничні значення min і max в два рази менше, ніж будь-які інші.

// Якщо ви запускаєте приклад вище, багато разів, ви легко побачите, що 2 з’являється найчастіше.

// Це відбувається тому, що Math.round() отримує випадкові числа з інтервалу 1..3 і округляє їх так:

// values from 1    ... to 1.4999999999  become 1
// values from 1.5  ... to 2.4999999999  become 2
// values from 2.5  ... to 2.9999999999  become 3
// Тепер ми можемо чітко бачити, що 1 генерується вдвічі рідше ніж 2. І те саме з 3.

// Існує багато правильних рішень задачі. Один з них – коригування інтервальних меж. Щоб забезпечити однакові інтервали, ми можемо генерувати значення від 0.5 до 3.5, тим самим додаючи необхідні ймовірності до граничних значеннь:

// function randomInteger(min, max) {
//   // тепер rand від (min-0.5) до (max+0.5)
//   let rand = min - 0.5 + Math.random() * (max - min + 1);
//   return Math.round(rand);
// }

// alert( randomInteger(1, 3) );
// Альтернативним способом може бути використання Math.floor для випадкового числа від min до max + 1:

// function randomInteger(min, max) {
//   // тепер rand від min до (max+1)
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }

// alert( randomInteger(1, 3) );
// Тепер усі інтервали відображаються таким чином:

// values from 1  ... to 1.9999999999  become 1
// values from 2  ... to 2.9999999999  become 2
// values from 3  ... to 3.9999999999  become 3
// Всі інтервали мають однакову довжину, що робить остаточний розподіл рівномірним.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function ucFirst(str) {
//   if(!str) return str;
//   return str = str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst("first"));
// console.log(ucFirst(0));

////////////////////////////////////////////////////////////////////////////////////////////////

//   Напишіть функцію checkSpam(str), яка повертає true, якщо str містить ‘viagra’ or ‘XXX’, інакше false.

// Функція має бути нечутливою до регістру:

// function checkSpam(str) {
//   if(str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")) {
//     return true;
//   }
//   return false;
// }

// або такий  варіант:

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// checkSpam('buy ViAgRA now');
// checkSpam('free xxxxx');
// checkSpam("innocent rabbit");

///////////////////////////////////////////////////////////////////////////////////////////////////

// Створіть функцію truncate(str, maxlength), яка перевіряє довжину str і, якщо вона перевищує maxlength – замінює кінець str символом трьох крапок "…", щоб його довжина була рівною maxlength.

// Результатом функції повинен бути урізаний (якщо потребується) рядок.

// function truncate(str, maxlength) {
//   if(str.length > maxlength) {
//     return str.slice(0, maxlength) + "…"; //це не три послідовні крапочки, це спеціальний юнікод
//   }
//   return str;
// }

// console.log(truncate("Що я хотів би розповісти на цю тему:", 20));

// console.log(truncate("Всім привіт!", 20));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Давайте спробуємо 5 операцій з масивом.

// Створіть масив styles з елементами “Jazz” та “Blues”.
// Додайте “Rock-n-Roll” в кінець масиву.
// Замініть значення в середині масиву на “Classics”. Ваш код повинен шукати медіанний елемент у масивах будь-якої довжини.
// Видаліть перший елемент масиву та покажіть його.
// Вставте Rap та Reggae на початок масиву.

// let array = ["Jazz", "Blues"];
// array.push("Rock-n-Roll");
// console.log(array);

// let middleItem = Math.floor((array.length - 1) / 2);
// console.log(middleItem);
// array[middleItem] = "Classics";

// console.log(array.shift());

// array.unshift("Rap", "Reggae");
// console.log(array);

////////////////////////////////////////////////////////////////////

// Напишіть функцію sumInput() яка:

// Просить користувача ввести дані за допомогою prompt та зберігає їх в масив.
// Закінчує робити запити в користувача після того, як введено не числове значення, порожня строка або натиснуто “відмінити”.
// Підраховує та повертає суму елементів масиву.
// P.S. Нуль 0 це – валідне число, будь ласка, не зупиняйте функцію при введені 0.

// function sumInput() {
//   let array = [];
//   let number = 0;

//   while (true) {
//     number = +prompt("number?");

//     if (number == null || number == "" || !isFinite(number)) break;

//     array.push(number);
//   }

//   let sum = 0;
//   for (number of array) {
//     sum += number;
//   }
//   console.log(sum);
//   return sum;
// }

// alert(sumInput());

///////////////////////////////////////////////////////////

// На вході масив чисел, наприклад arr = [1, -2, 3, 4, -9, 6].

// Завдання: знайти неперервний підмасив arr з максимальною сумою елементів.

// Написати функцію getMaxSubSum(arr) яка повертає таку суму.

// Наприклад:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)
// Якщо всі елементи менші нуля, нічого не беремо, це означає, що підмасив пустий, а сума рівна нулю:

// getMaxSubSum([-1, -2, -3]) = 0
// Будь ласка, подумайте над швидким рішенням: O(n2) або навіть над рішенням O(n), якщо зможете.

// function getMaxSubSum(arr) {
//   let maxSum = 0; // якщо елементи відсутні - повертаємо 0

//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//   }

//   return maxSum;
// }

// alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// alert( getMaxSubSum([1, 2, 3]) ); // 6
// alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100

// або

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) { // for each item of arr
//     partialSum += item; // add it to partialSum
//     maxSum = Math.max(maxSum, partialSum); // remember the maximum
//     if (partialSum < 0) partialSum = 0; // zero if negative
//   }

//   return maxSum;
// }

// alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
// alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
// alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
// alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
// alert( getMaxSubSum([1, 2, 3]) ); // 6
// alert( getMaxSubSum([-1, -2, -3]) ); // 0

////////////////////////////////////////////////////////////////////////

// Напишіть функцію camelize(str), яка перетворює такі рядки “my-short-string” в “myShortString”.

// Тобто дефіси видаляються, а всі слова після них починаються з великої літери.

// Приклади:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Підказка: використовуйте split, щоб розбити рядок на масив символів, 
// потім переробіть все як потрібно та методом join зʼєднайте елементи в рядок.

// моє рішення:
// function camelize(str) {
//   let arraySigns = str.split("");

//   for(let i = 0; i < arraySigns.length; i++) {
//     if (arraySigns[i] == "-") {
//       arraySigns.splice(i, 1);
//       console.log("slice(i, 1): " + arraySigns);

//       let upperCaseSign = arraySigns[i].toUpperCase();
//       console.log(upperCaseSign);
//       arraySigns.splice(i, 1, upperCaseSign);
//     }
//   }
//   console.log(arraySigns.join(""));
//   return arraySigns.join("");
// }

// рішення з книги:

// function camelize(str) {
//   return str
//     .split('-') // розбиваємо 'my-long-word' на масив елементів ['my', 'long', 'word']
//     .map(
//       // робимо першу літеру велику для всіх елементів масиву, крім першого
//       // конвертуємо ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//       (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(''); // зʼєднуємо ['my', 'Long', 'Word'] в 'myLongWord'
// }

// console.log(camelize("background-color"));

//////////////////////////////////////////////////////////////////////////////////

















