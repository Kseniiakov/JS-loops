// 1.1) вывести в консоль числа от 1 до 10 включительно

// for (let num = 1; num <= 10; num++) {
//   console.log(num);
// }

// 1.2) * вывести в консоль числа от -1 до -10 включительно

// for (let num = -1; num >= -10; num--) {
//   console.log(num);
// }

// 2) посчитать результат умножения чисел от 1 до 5

// let result = 1;
// for (let num = 1; num <= 5; num++) {
//   result *= num;
// }
// console.log(result);

// 3) вывести в консоль таблицу умножения на 7

// for (let num = 7; num <= 7; num++) {
//   console.log('Умножение на', num);
//   for (let factor = 1; factor <= 9; factor++) {
//     console.log(num,'*', factor, '=', num*factor);
//   }
// }

// 4) посчитать сумму нечетных чисел от 1 до 15

// let result = 0;
// for (let num = 1; num <= 15; num += 2) {
//   result += num;
// }
// console.log(result);

// 5.1) циклом добавить 7 звездочек в строку 

// let stars = ''
// for (let num = 1; num <= 7; num ++) {
//   stars += '*';
// }
// console.log(stars);

// 5.2) * кол-во звездочек определяет пользователь

// let userNum = Number (prompt('введите число звездочек'));

// function sandbox (userStars) {

//   let stars = ''
//   for (let num = 1; num <= userStars; num ++) {
//     stars += '*';
//   }
//   return stars;
// }

// const result = sandbox (userNum);

// console.log(result);

// 6) * 2 цикла которые добавят звездочки и "\n" 
// в переменную и составят квадрат из звездочек,


// let userNum = Number (prompt('введите число звездочек'));

// function sandbox (userStars) {

//   let stars = ''
//   for (let row = 1; row <= userStars; row ++) {
//     for (let num = 1; num <= userStars; num ++) {
//       stars += '*';
//     }
//     stars += '\n';
//   }
//   return stars;
// }

// const result = sandbox (userNum);
// console.log(result);

// 7) * спрашивать пользователя определенное число 
// до тех пор пока он его не отгадает

// function guessNumber () {
//   for ( ; ; ) {
//     let userNum = Number (prompt('угадайте число'));
//     if (userNum === 6) {
//       alert ('вы угадали :)');
//       break;
//     }
//     alert ('вы не угадали, попробуйте еще раз :(');
//   }
// }

// guessNumber();