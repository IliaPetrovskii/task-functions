/*
Напишите коллбек для array.filter, который отбирает все числа больше num
 */

export function higherThan(num) {
    return (element) => element > num;
}

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
 */
export function hasSubstring(substr) {
    return (element) => element.search(substr) !== -1;
}

/*
Напишите функцию `multiply(num)`, которая работает вот так:

console.log(multiply(5)(10));
// 50
 */
export function multiply(num) {
    return function (num2) {
        return num * num2;
    };
}
