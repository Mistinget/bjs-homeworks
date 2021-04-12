"use strikt"

function getResult(a, b, c) {
    let d = b ** 2 - 4 * a * c;
    let x = [];
    let sqrtD = Math.sqrt(d);

    if (d < 0) {
        x.length = 0;
        return x;
    } else if (d > 0) {
        x = [(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)];
        return x;
    } else if (d === 0) {
        x = [-b / 2 * a];
        return x;
    }
}

function getAverageMark(marks) {

    let averageMark = 0; //средний балл
    let sumMark = 0; //общее чисчисло баллов
    let newMarks = []; //массива из 5 баллов

    if (marks.length === 0) {
        return 0;
    }
    newMarks = marks.slice(0, 5);

    for (let i = 0; i < newMarks.length; i++) {
        sumMark += newMarks[i];
    }
    averageMark = sumMark / newMarks.length; //средний балл

    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    dateOfBirthday.getFullYear();
    new Date().getFullYear();
    let yearsOld = new Date().getFullYear() - dateOfBirthday.getFullYear();

    if (yearsOld >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
    //return result;
}