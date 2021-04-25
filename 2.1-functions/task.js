function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    let sqrtD = Math.sqrt(D);
    let roots = [];
    // let x1;
    // let x2;

    if (D < 0) {
        return {
            D: b ** 2 - 4 * a * c,
            roots: []
        }
    } else if (D > 0) {
        x1 = (-b + sqrtD) / (2 * a);
        x2 = (-b - sqrtD) / (2 * a);
        return {
            D: b ** 2 - 4 * a * c,
            roots: [x1, x2]
        }
    } else if (D === 0) {
        x1 = -b / 2 * a;
        return {
            D: b ** 2 - 4 * a * c,
            roots: [x1]
        }
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${x1}`);
    } else if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}`)
    }
}

const data = {
    algebra: [4, 3, 3, 5],
    geometry: [2, 5, 4],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 5],
    english: [4, 4, 3, 3],
    poetry: [5, 3, 4],
    chemistry: [2, 3],
    french: [4, 4]
};

function getAverageMark(marks) {
    let sum = 0; //общее чисчисло баллов
    let length = marks.length;
    if (length === 0) {
        return 0;
    }
    for (let i = 0; i < length; i++) {
        sum += marks[i];
    }
    return sum / length;
}

function getAverageScore(marks) {
    const subject = Object.values(marks); //количество предметов
    if (subject.length >= 10) {
        return "Неверное количество предметов";
    } else {
        let newMarks = {};
        for (let value in marks) {
            //console.log(`${value}: ${getAverageMark(marks[value])}`);
            newMarks[value] = getAverageMark(marks[value]);
        }
        newMarks.average = getAverageMark(Object.values(newMarks))
        return newMarks;
    }
}

getAverageScore(data);