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

// Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи більші-рівні a
// та менші-рівні b і віддає масив цих елементів.

// Функція повинна повертати новий масив і не змінювати вихідний.

// Наприклад:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// function filterRange(arr, a, b) {
//   // let newArray = arr.filter(item => (item >= a && item <= b));
//   // console.log(newArray);
//   // return newArray;

//   return arr.filter(item => (item >= a && item <= b));
// }

// alert( filtered ); // 3,1 (відфільтровані значення)

// alert( arr ); // 5,3,8,1 (не змінюється)

//////////////////////////////////////////////////////////////////////////

// Напишіть функцію filterRangeInPlace(arr, a, b), яка приймає масив arr і видаляє з нього всі значення крім тих,
// які знаходяться між a і b. Тобто, перевірка має вигляд a ≤ arr[i] ≤ b.

// Функція повинна змінювати поточний масив і нічого не повертати.

// Наприклад:

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < a  || arr[i] > b) {
//       arr.splice(i, 1);
//       i--; // це треба, бо splice змінює поточний масив, видаливши за умови потрібну кількість(в данному випадку 1 елемент) елементів
//     }
//   }
// };

// filterRangeInPlace(arr, 1, 4); // видаляє всі числа крім тих, що в діапазоні від 1 до 4
// console.log("arr: " + arr);
// alert( arr ); // [3, 1]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Сортувати за спаданням


// Наприклад, для сортування чисел:
// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }
// let arr = [ 1, 2, 15 ];
// arr.sort(compareNumeric);
// alert(arr);  // 1, 2, 15


// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// alert( arr ); // 8, 5, 2, 1, -10

//////////////////////////////////////////////////////////////////////////////////////

// У нас є масив рядків arr. Потрібно отримати відсортовану копію та залишити arr незміненим.

// Створіть функцію copySorted(arr), яка буде повертати таку копію.

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//   return arr.concat().sort();
// }

// або 
// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без змін)

////////////////////////////////////////////////////////////////////////////////////////

// В Mate bank є можливість покласти гроші на депозит під певний відсоток і отримати прибуток через деякий час.

// Наприклад, якщо покласти 10000 на 3 роки під 4% річних, отримаємо:

// перший рік: 10000 + 4% = 10400 (10000 + 10000 * 0.04);
// другий рік: 10400 + 4% = 10816 (10400 + 10400 * 0.04);
// третій рік: 10816 + 4% = 11248.64 (10816 + 10816 * 0.04);
// чистий прибуток: 11248.64 - 10000 = 1248.64.
// Твоє завдання: напиши функцію calculateProfit, яка приймає 3 параметри:

// amount — початкова сума, яку ми кладемо на депозит;
// percent — річна відсоткова ставка;
// period — кількість років (час, на який гроші кладуться на депозит).
// Функція повинна розрахувати та повернути суму чистого прибутку за весь час.

// Приклади (ми перевіряємо тільки цілу частину):

// calculateProfit(1000, 5, 1); // 50
// calculateProfit(12500, 3, 12); // 5322

// Створи змінну total та присвой їй значення amount.
// Створи цикл від 1 по period (period включено).
// На кожній ітерації збільшуй total на total * percent / 100.
// Поверни різницю між total і amount.

// function calculateProfit(amount, percent, period) {
//   // write code here
//   let total = amount;

//   for (let i = 1; i <= period; i++) {
//     total += total * percent / 100;
//   }

//   return total-amount;
// }

// console.log(calculateProfit(12500, 3, 12));


/////////////////////////////////////////////////////////////

// Наш новий бос, як виявилося, просто ненавидить голосні літери, тому нам потрібно прибрати їх з усієї документації 🤔

// Напиши функцію removeVowels, яка приймає рядок doc і повертає новий рядок, де всі голосні видалені.

// Зверни увагу: голосними літерами є aeiouy у будь-якому регістрі.

// Наприклад:

// removeVowels('document'); // 'dcmnt'
// removeVowels('I like my boss'); // ' lk m bss'
// removeVowels('350 euro'); // '350 r'


// function removeVowels(doc) {
//   // write code here
//   let vowels = 'aeiouy';
//   let newWord = '';

//   for (const ch of doc) {
//     if (!vowels.includes(ch.toLowerCase())) {
//       newWord += ch;
//     }
//   }

//   return newWord;
// }

////////////////////////////////////////////////////////////////////////////////////

// У цьому завданні створи функцію makeAbbr, яка приймає рядок зі слів words та повертає абревіатуру з них у верхньому регістрі.

// Рядок words містить одне або декілька слів, розділених одним пробілом.

// Наприклад:

// // 'NASA'
// makeAbbr('national aeronautics space administration');

// // 'CPU'
// makeAbbr('central processing unit');

// // 'SMILES'
// makeAbbr('simplified molecular input line entry specification');

// ❗❗ Підказка 1
// Створи змінну abbreviation та присвой їй значення першого символу рядка words.
// Створи цикл for, який буде перебирати кожен символ words.
// Якщо поточний символ є пробілом, то додай наступний символ до abbreviation.

// function makeAbbr(words) {
//   // write code here
//   let abbreviation = words[0];

//   for (let i = 0; i < words.length; i++) {
//     if (words[i] === ' ') {
//       console.log(words[i + 1]);
//       abbreviation += words[i + 1];
//     }
//   }

//   console.log(abbreviation);

//   return abbreviation.toUpperCase();
// }

// console.log(makeAbbr('central processing unit'));

///////////////////////////////////////////////////////////////////////////////////

// А тепер навчимося перебирати рядок із кінця.

// Створи функцію decryptMessage, яка приймає рядок message та повертає новий рядок, де символи з message розташовані у зворотному порядку.

// Наприклад:

// // 'We like drinking beer!!!'
// decryptMessage('!!!reeb gniknird ekil eW');

// function decryptMessage(message) {
//   // write code here
//   let reverse = '';

//   for (const ch of message) {
//     reverse = ch + reverse;
//   }

//   return reverse;
// }

////////////////////////////////////////////////////////////////

// У цьому завданні ти навчишся «перевертати» рядок та прибирати зайві символи.

// Створи функцію isWerewolf, яка приймає рядок target і повертає true, якщо це перевертень, або false — якщо ні.

// Перевертень — це слово або речення, яке читається однаково в обох напрямках (зліва направо й навпаки), при цьому ігноруючи регістр, пробіли та розділові знаки.

// Наприклад:

// isWerewolf('rotator') === true // rotator --> rotator
// isWerewolf('home') === false // home --> emoh
// isWerewolf('Racecar') === true // регістр ігнорується

// function isWerewolf(target) {
//   // write code here
//   let reverse = '';
//   let direct = '';

//   for (const ch of target) {
//     if (ch.toLowerCase() !== ch.toUpperCase()) {
//       reverse = ch + reverse;
//       console.log('reverse: '+ reverse);
//       direct += ch;
//       console.log('direct: '+ direct);
//     }
//   }

//   return reverse.toLowerCase() === direct.toLowerCase();
// }

// console.log(isWerewolf('Racecar'));
// console.log(isWerewolf('home'));

/////////////////////////////////////////////////////////

// А тепер ти знайдеш відсоток входження символу в рядок.

// Ми вдосконалили нашу програму для збору статистики з вебінарів Міші. Тепер вона надсилає дані на сервер у вигляді рядка 111001010111011, де 1 — це студент, який зрозумів тему, а 0 — відповідно, ні.

// Але було б корисно зрозуміти, скільки відсотків студентів засвоїли матеріал, тобто наскільки вебінар був ефективним.

// Для цього створи функцію getSuccessRate, яка приймає рядок statistic і повертає відсоток студентів, які зрозуміли матеріал, округлюючи до найближчого цілого (використай метод Math.round).

// Зверни увагу: якщо вхідний рядок порожній — поверни 0.

// Наприклад:

// getSuccessRate('11100'); // 60
// getSuccessRate('1100'); // 50
// getSuccessRate('000000'); // 0
// getSuccessRate('11111'); // 100
// getSuccessRate(''); // 0

// function getSuccessRate(statistic) {
//   // write code here
//   let amountOne = 0;

//   for (const num of statistic) {
//     if (num === '1') {
//       amountOne++;
//     }
//   }

//   if (statistic === '') {
//     return 0;
//   }

//   return Math.round(amountOne / statistic.length * 100);
// }

// console.log(getSuccessRate('11100'));
// console.log(getSuccessRate('1100'));
// console.log(getSuccessRate(''));

///////////////////////////////////////////////////////////////////////

// Настав час попрацювати з масивами!

// Напиши функцію createArray, яка приймає ціле число N і повертає масив, який містить усі цілі числа від 1 до N включно.

// Зверни увагу: якщо N = 0, поверни порожній масив.

// function createArray(N) {
//   // write code here
//   let array = [];

//   if (N === 0) {
//     return [];
//   }

//   for (let i = 1; i <= N; i++) {
//     array.push(i);
//   }

//   return array;
// }

// console.log(createArray(1)); // [1]
// console.log(createArray(3)); // [1, 2, 3]
// console.log(createArray(0)); // []

///////////////////////////////////////////////////////////////////

// Настав час запускати масове виробництво роботів!

// Щоб роботи на лінії збиралися правильно, потрібно маркувати деталі. Різні частини робота будуть складатися з різної кількості деталей. Тож зробимо наліпки для них!

// Напиши функцію makeStickers, яка приймає число detailsCount і рядок robotPart. Функція повинна повертати масив рядків у наступному форматі: {{robotPart}} detail #{{n}} (наприклад, Hand detail #1).

// Зверни увагу: якщо detailsCount = 0, поверни порожній масив.

// function makeStickers(detailsCount, robotPart) {
//   // write code here

//   let arrayStikers = [];
//   if (detailsCount === 0) {
//     return [];
//   }

//   for (let i = 1; i <= detailsCount; i++) {
//     arrayStikers.push(`${robotPart} detail #${i}`);
//   }

//   return arrayStikers;
// }

// console.log(makeStickers(3, 'Body')); // ['Body detail #1', 'Body detail #2', 'Body detail #3']
// console.log(makeStickers(4, 'Head')); // ['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4']
// console.log(makeStickers(0, 'Foot')); // []

/////////////////////////////////////////////////////////////////////////////////////

// Наліпки готові? Чудово! Тепер потрібно збільшити продуктивність наших ліній удвічі!

// Напиши функцію doublePower, яка приймає масив потужностей currentPowers та повертає новий масив
//  із подвоєними значеннями.

// function doublePower(currentPowers) {
//   // write code here

//   let doublePowers = [];
//   for (let i = 0; i < currentPowers.length; i++) {
//     doublePowers.push(currentPowers[i] * 2);
//   }

//   return doublePowers;
// }


// console.log(doublePower([100, 150, 200, 220])); // [200, 300, 400, 440]
// console.log(doublePower([45, 34, 56, 67])); // [90, 68, 112, 134]
// console.log(doublePower([])); // []

///////////////////////////////////////////////////////////////////////////////////////

// А тепер навчимо наших роботів сортувати коробки на складі. Кожна коробка має свій унікальний номер, а роботи вчаться сортувати в порядку зростання.

// Але сортування — справа нелегка, іноді трапляються помилки. Тому нам поки що доведеться перевіряти, чи правильно робот відсортував коробки.

// Для цього напиши функцію isSorted, яка отримує масив чисел boxNumbers і повертає true, якщо всі числа розташовані в порядку зростання, або false — якщо ні.

// Зверни увагу: числа в масиві можуть повторюватися.

// function isSorted(boxNumbers) {
//   // write code here

//   if (boxNumbers.length <= 1) {
//     return true;
//   }

//   for (let i = 1; i <= boxNumbers.length; i++) {
//     let currentNumber = boxNumbers[i];
//     let previousNumber = boxNumbers[i - 1];

//     if (currentNumber < previousNumber) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isSorted([1, 2, 3, 4, 5])); // true
// console.log(isSorted([0, 1, 1, 1, 2])); // true
// console.log(isSorted([1, 2, 11])); // true
// console.log(isSorted([5])); // true
// console.log(isSorted([])); // true
// console.log(isSorted([0, 3, 1, 2, 2, 2])); // false
// console.log(isSorted([1, 11, 2])); // false

//////////////////////////////////////////////////////////////////////////////

// Ускладнюємо роботу нашого робота! Тепер він вміє перетворювати команди руху на правильний
// сигнал і рухатися відповідно до нього:

// 'forward' означає y + 1 (крок уперед);
// 'back' означає y - 1 (крок назад);
// 'right' означає x + 1 (крок праворуч);
// 'left' означає x - 1 (крок ліворуч).
// Але було б чудово, щоб робот знав, де він знаходиться навіть без GPS.

// Для цього реалізуй функцію getLocation, яка приймає 2 параметри:

// масив початкових координат coordinates у вигляді [x, y];
// масив із командами commands у вигляді ['command1', 'command2', 'command3' ...].
// Функція повинна повертати масив кінцевих координат [x, y] після рухів згідно команд із масиву commands.

// Наприклад, ми маємо масив із координатами coordinates = [2, 1] та масив із 
// командами commands = ['left', 'back', 'back']:

// координати після першої команди — [1, 1] (1 крок ліворуч);
// координати після другої команди — [1, 0] (1 крок назад);
// координати після третьої команди — [1, -1] (1 крок назад);
// результатом буде масив [1, -1].

// function getLocation(coordinates, commands) {
//   // write code here
//   let x = coordinates[0];
//   let y = coordinates[1];

//   for (const com of commands) {
//     if (com === 'forward') {
//       y += 1;
//     }
//     if (com === 'right') {
//       x += 1;
//     }
//     if (com === 'back') {
//       y -= 1;
//     }
//     if (com === 'left') {
//       x -= 1;
//     }
//   }
//   return [x, y];
// }

// console.log(getLocation([0, 0], ['forward', 'right'])); // [1, 1]
// console.log(getLocation([2, 3], ['back', 'back', 'back', 'right'])); // [3, 0]
// console.log(getLocation([0, 5], ['back', 'back', 'back', 'right', 'left', 'forward'])); // [0, 3]

//////////////////////////////////////////////////////////////////////////////////////////////////////

// А тепер настав час збільшити обсяги виробництва роботів!

// Напиши функцію getPlan, яка приймає 3 аргументи:

// startProduction — поточна кількість роботів, яку ми виробляємо за місяць;
// numberOfMonths — кількість місяців, протягом якої виробництво має зростати;
// percent — відсоток, на який має зростати виробництво щомісяця.
// Функція має повертати масив із цілями на кожен місяць (скільки роботів треба виробити щоб 
//   дотримуватись запланованого зростання).

// Щоб краще зрозуміти, як це працює, розглянемо приклад. Припустимо, нам дано startProduction = 200, 
// numberOfMonths = 3 та percent = 50:

// план на перший місяць — 200 + 50% = 300 роботів;
// на другий місяць це вже 300 + 50% = 450 роботів;
// і нарешті на третій місяць це 450 + 50% = 675 роботів.
// В результаті маємо отримати масив [300, 450, 675].

// Зверни увагу: ціль на наступний місяць потрібно рахувати на основі попереднього місяця. 
// Якщо число роботів попереднього місяця виявиться дробовим, округли його за допомогою Math.floor.

// function getPlan(startProduction, numberOfMonths, percent) {
//   // write code here

//   let currentProduction = startProduction;
//   let goals = [];

//   for (let i = 1; i <= numberOfMonths; i++) {
//     currentProduction += Math.floor(currentProduction * percent / 100);
//     goals.push(currentProduction);
//   }
//   return goals;
// }

// console.log(getPlan(10, 4, 30)); // [13, 16, 20, 26]
// console.log(getPlan(1000, 6, 20)); // [1200, 1440, 1728, 2073, 2487, 2984]

///////////////////////////////////////////////////////////////////////////////////

// Перша партія роботів готова, тепер їх треба перевірити. Усі роботи унікальні, 
// і швидкість руху в кожного своя. У цьому завданні тобі потрібно знайти найменшу, 
// найбільшу та середню швидкості роботів.

// Напиши функцію getSpeedStatistic, яка приймає масив швидкостей роботів testResults
//  і повертає статистику у вигляді масиву, у якому:

// перший елемент — найменша швидкість;
// другий елемент — найбільша швидкість;
// третій елемент — середнє значення, округлене вниз (використай Math.floor).
// Зверни увагу: якщо вхідний масив швидкостей порожній — поверни масив [0, 0, 0].
// Розділи теорії Вибір елементу за критерієм та Середнє значення елементів масиву 
// допоможуть тобі виконати це завдання.

// function getSpeedStatistic(testResults) {
//   // write code here
//   if (testResults.length === 0) {
//     return [0, 0, 0];
//   }

//   let minSpeed = testResults[0];
//   let maxSpeed = testResults[0];
//   let sum = testResults[0];

//   for (let i = 1; i < testResults.length; i++) {
//     if(minSpeed > testResults[i]) {
//       minSpeed = testResults[i];
//     }

//     if (maxSpeed < testResults[i]) {
//       maxSpeed = testResults[i]
//     }

//     sum += testResults[i];
//   }

//   return [minSpeed, maxSpeed, Math.floor(sum / testResults.length)];
// }


// console.log(getSpeedStatistic([])); // [0, 0, 0]
// console.log(getSpeedStatistic([10])); // [10, 10, 10]
// console.log(getSpeedStatistic([8, 9, 3, 12])); // [3, 12, 8]
// console.log(getSpeedStatistic([10, 10, 11, 9, 12, 8])); // [8, 12, 10]

//////////////////////////////////////////////////////////////////////////////////////

// Роботи протестовані. Повільних ми відправили на апгрейд. Служба доставки 
// Mate Post хоче купити в нас десяток роботів для перевезення вантажу містом. 
// А для цього їм потрібні роботи, які перевозитимуть за день найбільше вантажу.

// Напишемо функцію compareRobots, яка отримує два масиви. Перший масив firstRobotResults — 
// це вага вантажів, перевезених за день першим роботом, другий secondRobotResults — відповідно, другим.

// Перевір, хто з роботів може перевезти більше вантажу за день, і поверни рядок із рекомендацією, 
// кого з роботів варто купити:

// 'First robot for sale!' — якщо перший робот перевозить більше вантажу;
// 'Second robot for sale!' — якщо другий робот перевозить більше вантажу;
// 'Both robots for sale!' — якщо обидва роботи перевозять однакову кількість вантажу.

// function compareRobots(firstRobotResults, secondRobotResults) {
//   // write code here
//   let firstSum = 0;
//   let secondSum = 0;

//   for (const result of firstRobotResults) {
//     firstSum += result;
//   }

//   for (const result of secondRobotResults) {
//     secondSum += result;
//   }

//   if (firstSum > secondSum) {
//     return 'First robot for sale!';
//   }

//   if (firstSum < secondSum) {
//     return 'Second robot for sale!';
//   }

//   if (firstSum === secondSum) {
//     return 'Both robots for sale!';
//   }
// }

// console.log(compareRobots([12, 4, 13], [1, 1, 4, 5, 12])); // 'First robot for sale!' (29 > 23)
// console.log(compareRobots([9, 7, 9], [1, 3, 4, 5, 12])); // 'Both robots for sale!' (25 = 25)
// console.log(compareRobots([1, 3, 4], [1, 1, 4, 5])); // 'Second robot for sale!' (8 < 11)

/////////////////////////////////////////////////////////////////////////////////////////

// У цьому завданні згадаємо як працювати з числами.

// Створи функцію checkNumber, яка приймає ціле число та перевіряє його за 3 критеріями:

// це число додатне?
// це число парне?
// це число кратне 10?
// Функція має повернути масив із результатами перевірок у вигляді булевих значень: true або false.


// function checkNumber(number) {
//   // write code here
//   let result = [];

//   if (number > 0) {
//     result.push(true);
//   }

//   if (number <= 0) {
//     result.push(false);
//   }

//   if (number % 2 === 0) {
//     result.push(true);
//   }

//   if (number % 2 > 0 || number % 2 < 0) {
//     result.push(false);
//   }

//   if (number % 10 === 0) {
//     result.push(true);
//   }

//   if (number % 10 > 0 || number % 10 < 0) {
//     result.push(false);
//   }

//   return result;
// }


// console.log(checkNumber(3)); // [true, false, false]
// console.log(checkNumber(10)); // [true, true, true]
// console.log(checkNumber(0)); // [false, true, true]
// console.log(checkNumber(-1)); // [false, false, false]
// console.log(checkNumber(-2)); // [false, true, false]

///////////////////////////////////////////////////////////////////////////////////////////


// Реалізуй функцію combineArrays, яка приймає 2 масиви чисел однакового розміру (first та second)
// та повертає масив чисел, де result[i] — це сума чисел first[i] та second[i].

// debugger;

// function combineArrays(first, second) {
//   // write code here
//   let result = [];

//   for (let i = 0; i < Math.max(first.length, second.length); i++) {
  
//     result.push(first[i] + second[i]);
//   }
//   return result;
// }

// console.log(combineArrays([1, 2, 5], [3, 6, 1])); // [4, 8, 6]
// console.log(combineArrays([1], [6])); // [7]
// console.log(combineArrays([], [])); // []

//////////////////////////////////////////////////////////////////////////////////////////////

// А тепер «розріжемо» рядок на частини 😎

// Реалізуй функцію splitString, яка приймає рядок str, ділить його на частини по 2 символи, 
// а потім повертає масив з отриманих частин.

// Зверни увагу: якщо рядок містить непарну кількість символів, додай символ _ після останнього символу.

// function splitString(str) {
//   // write code here

//   let arrayResults = [];
//   let arrayFromStr = str.split('');
  
//   if (arrayFromStr.length % 2 !== 0) {
//     arrayFromStr.push('_');
//   } 

//   for (let i = 0; i < arrayFromStr.length; i += 2) {
//     let currentStr = arrayFromStr[i] + arrayFromStr[i + 1];
//     arrayResults.push(currentStr);
//   }

//   if (str.length === 0) {
//     return [];
//   }

//   return arrayResults;
// }

// // АБО

// function splitString(str) {
//   let string = str;

//   if (string.length % 2 !== 0) {
//     string += '_';
//   }

//   const result = [];

//   for (let i = 1; i < string.length; i += 2) {
//     result.push(string[i - 1] + string[i]);
//   }

//   return result;
// }

// console.log(splitString('123456')); // ['12', '34', '56']
// console.log(splitString('ab cd ef')); // ['ab', ' c', 'd ', 'ef']
// console.log(splitString('abc')); // ['ab', 'c_']
// console.log(splitString(' ')); // [' _']
// console.log(splitString('')); // []

////////////////////////////////////////////////////////////////////////////////////////////

// А тепер ти навчишся міняти порядок символів у рядку.

// Напиши функцію scrollingText, яка:

// приймає рядок word;
// послідовно переставляє всі символи в рядку з нульового індексу на останній;
// повертає масив з отриманими комбінаціями рядка у верхньому регістрі.
// Наприклад, для слова 'robot':

// перший крок: беремо першу літеру (r) слова 'robot' і переставляємо її в кінець слова — 'obotr';
// другий крок: беремо першу літеру (о) слова 'obotr' і переставляємо її в кінець – 'botro' і так далі.
// У консолі ми побачимо:

// [ 'ROBOT', // спочатку вхідне слово
//   'OBOTR', // потім із переставленим порядком символів
//   'BOTRO',
//   'OTROB',
//   'TROBO' ]

// function scrollingText(word) {
//   // write code here
//   let newArray = [];

//   let array = word.split('');

//   for (let i = 0; i < array.length; i++) {
//     newArray.push(word.slice(i, word.length).toUpperCase() + word.slice(0, i).toUpperCase());
//   }

//   return newArray;
// }

// console.log(scrollingText('robot'));

// АБО

// function scrollingText(word) {
//   const result = [];

//   for (let i = 0; i < word.length; i++) {
//     const part = word.slice(i) + word.slice(0, i);

//     result.push(part.toUpperCase());
//   }

//   return result;
// }

//////////////////////////////////////////////////////////////////////////////////////////////

// Створи функцію isSpecialNumber, яка приймає додатне число n і визначає, чи є воно особливим.

// Число називається особливим, якщо кожна його цифра не більша ніж 5 (0, 1, 2, 3, 4 або 5).

// Функція повинна повернути рядок 'Special!!', якщо число особливе, та 'NOT!!' — якщо ні.

// function isSpecialNumber(n) {
//   // write code here
//   let arrayFromN = String(n).split('');

//   for (const num of arrayFromN) {
//     if (num > 5) {
//       return 'NOT!!';
//     }
//   }

//   return 'Special!!';
// }



// console.log(isSpecialNumber(2)); // 'Special!!'
// // 2 — знаходиться в інтервалі від 0 до 5

// console.log(isSpecialNumber(9)); // 'NOT!!'
// // 9 > 5

// console.log(isSpecialNumber(23)); // 'Special!!'
// // всі цифри числа 23 знаходяться в інтервалі від 0 до 5

// console.log(isSpecialNumber(38)); // 'NOT!!'
// // 8 > 5

///////////////////////////////////////////////////////////////////////////////////

// А тепер перевіримо, чи всі наші числа охайні. Число вважається охайним, 
// якщо кожна його цифра не менша за попередню.

// Реалізуй функцію isTidy, яка приймає додатне число та повертає true, якщо воно охайне, інакше — false.

// function isTidy(number) {
//   // write code here
//   let arrayFromNum = String(number);
  

//   for (let i = 1; i < arrayFromNum.length; i++) {
//     let currentNum = arrayFromNum[i];
//     let previousNum = arrayFromNum[i - 1];

//     if (previousNum > currentNum) {
//       return false;
//     }
//   } 
//   return true;
// }

// console.log(isTidy(12)); // true
// // цифри розташовані за зростанням

// console.log(isTidy(32)); // false
// // цифри розташовані за спаданням

// console.log(isTidy(1024)); // false
// // 1 > 0

// console.log(isTidy(3445)); // true
// // однакові цифри можуть бути поруч

// console.log(isTidy(13579)); // true
// // цифри розташовані за зростанням

/////////////////////////////////////////////////////////////////////////////////////////////////

// Реалізуй функцію isJumping, яка приймає число та повертає рядок 'JUMPING', 
// якщо кожна цифра в числі відрізняється від сусідньої на 1, а якщо ні — рядок 'NOT JUMPING'.

// Зверни увагу:

// вхідне число завжди додатне;
// різниця між 9 і 0 не дорівнює 1;
// якщо поруч стоять однакові цифри, то число 'NOT JUMPING';
// якщо число складається з однієї цифри — воно 'JUMPING'.

// function isJumping(number) {
//   let arrayFromNum = String(number);

//   if (arrayFromNum.length === 1) {
//     return 'JUMPING';
//   }

//   for (let i = 1; i < arrayFromNum.length; i++) {
//     let currentNum = arrayFromNum[i];
//     let previousNum = arrayFromNum[i - 1];
//     let difference = currentNum - previousNum;

//     if (difference !== 1 && difference !== -1) {
//       return 'NOT JUMPING';
//     }
//   }
//   return 'JUMPING';
// }

// // число з однієї цифри
// console.log(isJumping(9)); // 'JUMPING'

// // 7 і 9 відрізняються на 2, а не на 1
// console.log(isJumping(79)); // 'NOT JUMPING'

// // різниця між однаковими цифрами дорівнює 0
// console.log(isJumping(7889)); // 'NOT JUMPING'

// // усі сусідні цифри відрізняються на 1
// console.log(isJumping(23454)); // 'JUMPING'

///////////////////////////////////////////////////////////////////////

// Допиши функцію removeZS так, щоб вона повертала рядок string без символів z та s. 
// Потрібно видалити символи у всіх регістрах.

// function removeZS(string) {
//   // write code here
//   let newArStr = [];
//   let arrayFromStr = string.split('');

//   for (let i = 0; i < arrayFromStr.length; i++) {
//     if (arrayFromStr[i].toLowerCase() !== 'z' && arrayFromStr[i].toLowerCase() !== 's') {
//       newArStr.push(arrayFromStr[i]);
//     }
//   }

//   return newArStr.join('');
// }

// console.log(removeZS('Mate academy')); // === 'Mate academy'
// console.log(removeZS('zzzmatesss')); // === 'mate'
// console.log(removeZS('ZMzastSe AcaZzzzdemsSy')); // === 'Mate Academy'
// console.log(removeZS('zszszSSZsz')); // === ''

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Реалізуй функцію findSmallestElement, яка приймає масив numbers та повертає найменше з цього масиву.

// function findSmallestElement(numbers) {
//   // write code here
//   let minNum = numbers[0];

//   for (const n of numbers) {
//     if (minNum >= n) {
//       minNum = n;
//     }
//   }
//   return minNum;
// }

// console.log(findSmallestElement([5, 2, 8, 12, 6])); // === 2
// console.log(findSmallestElement([4, 4, 4, 4])); // === 4
// console.log(findSmallestElement([0, -1, -2, -3])); // === -3

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напиши функцію removeZeros, яка приймає ціле число n та повертає нове число, 
// яке складається з усіх цифр числа n, окрім нулів. 
// Зверни увагу: якщо твоє число 0, то з функції потрібно повернути 0.

// function removeZeros(number) {
//   // write code here
//   let strFromNum = String(number);
//   let arNums = strFromNum.split('');
//   let newAr = [];

//   for (const n of arNums) {
//     if (+n !== 0) {
//       newAr.push(n);
//     }
//   }
//   return +newAr.join('');
// }

// console.log(removeZeros(100)); // 1
// console.log(removeZeros(101002)); // 112
// console.log(removeZeros(-2410)); // -241
// console.log(removeZeros(0)); // 0

/////////////////////////////////////////////////////////////////////////////////

// Допиши функцію getSum, яка приймає масив numbers і повертає суму всіх чисел в ньому.

// Масив містить тільки числа.

// function getSum(numbers) {
//   // write code here

//   let sum = 0;
  
//   for (const n of numbers) {
//     sum += n;
//   }

//   return sum;
// }

// console.log(getSum([1, 2, 3]));// === 6
// console.log(getSum([1.2, 2.8, 3]));// === 7
// console.log(getSum([-7, 2, 3]));// === -2

/////////////////////////////////////////////////////////////////////////

// Дано масив years, який містить роки життя різних людей у вигляді рядків в форматі 1714-1748 
// (рік народження - рік смерті).

// Допиши функцию getAverageAge так, щоб вона повертала средню тривалість життя всіх людей, 
// округлену до найближчого цілого (Math.round)

// function getAverageAge(years) {
//   // write code here
//   let sum = 0;
//   let count = 0;
//   for (const y of years) {
//     let arrayNums = y.split('-');
//     count++;

//     sum += +arrayNums[1] - +arrayNums[0];
//   }

//   if (sum === 0) {
//     return 0;
//   }

//   return Math.round(sum/count);
// }

// console.log(getAverageAge(['1832-1905', '1876-1956', '1683-1724', '1714-1748'])); // === 57

// console.log(getAverageAge([
//   '1907-1997',
//   '1761-1833',
//   '1535-1582',
//   '1918-2012',
//   '1877-1968',
//   '1696-1724',
//   '1602-1642',
//   '1692-1743',
//   '1695-1762',
//   '1570-1636',
//   '1762-1807',
//   '1668-1731',
// ])); // === 63

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напиши функцію getUniqNames, яка приймає масив рядків names та повертає масив тих саме імен, але без повторень.

// const names = [
//   'Eileen',
//   'Peter',
//   'Jared',
//   'Robert',
//   'Robert',
//   'Robert',
//   'David',
// ];

// function getUniqNames(names) {
//   // write code here
//   let newArray = [];

//   for (let i = 0; i < names.length; i++) {
//     if (!newArray.includes(names[i])) {
//       newArray.push(names[i]);
//     }
//   }

//   return newArray;
// }

// console.log(getUniqNames(names)); // === ['Eileen', 'Peter', 'Jared', 'Robert', 'David']

//////////////////////////////////////////////////////////////////////////////////////////










