"use strikt"

function calculateTotalMortgage(percent, contribution, amount, date) {
    console.log(typeof percent, typeof contribution, typeof amount, date.valueOf);
    if (typeof percent === undefined || percent <= 0) {
        return `Некорректный ввод ${percent}`;
    } else if (typeof contribution === undefined || typeof contribution <= 0) {
        return `Некорректный ввод ${contribution}`;
    } else if (typeof amount === undefined || typeof amount <= 0) {
        return `Некорректный ввод ${amount}`;
    } //else if (typeof date === undefined || typeof date <= 0) {
    //return `Некорректный ввод ${date}`;                      // ????

    // return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}