"use strikt";

function calculateTotalMortgage(percent, contribution, amount, date) {
    let today = new Date;
    console.log(typeof percent, typeof contribution, typeof amount);
    if (typeof percent === "undefined" || Number(percent) <= 0) {
        return `Некорректный ввод "Процентная ставка" ${percent}`;
    } else if (typeof contribution === "undefined" || Number(contribution) < 0) {
        return `Некорректный ввод "Начальный взнос" ${contribution}`;
    } else if (typeof amount === "undefined" || Number(amount) <= 0) {
        return `Некорректный ввод "Общая стоимость" ${amount}`;
    } else if (isNaN(date) || (Number(date) - Number(today)) <= 30) {
        return `Некорректный ввод "Срок ипотеки" ${date}`;
    }

    let P = percent / 100 / 12; // 1/12 процентной ставки
    console.log(date.getFullYear(), today.getFullYear());
    //кол-во выплач. месяцев:
    let amountMonth = ((date.getFullYear() - today.getFullYear()) * 12 + (date.getMonth() - today.getMonth()));
    console.log(amountMonth);
    let S = amount - contribution; //тело кредита
    console.log(S, P);
    let monthPay = S * (P + P / (((1 + P) ** amountMonth) - 1));
    console.log(monthPay);
    let totalAmount = (monthPay * amountMonth);
    console.log(totalAmount.toFixed(2));
    console.log(typeof totalAmount);
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    if (!name || typeof name === "undefined" || Boolean(name) === false || name.trim() === "") {
        name = "Аноним";
    }
    console.log("Привет, мир! Меня зовут ${name}.", typeof name, name.length);
    console.log(Boolean(name));
    return `Привет, мир! Меня зовут ${name}.`;
}