function parseCount(count) {
    const numberParse = Number.parseInt(count, 10);
    if (isNaN(numberParse) === true) {
        const parsError = new Error("Невалидное значение");
        throw parsError;
    }
    return numberParse;
}

function validateCount(count) {
    try {
        parseCount(count); // пробую распарсить
    } catch (e) { //перехватываю исключение
        return e; //возвращаю ошибку
    }
    return parseCount(count); //возвращаю результат, если нет ошибок
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || c + b < a || a + c < b) {
            const error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        const p = (1 / 2) * this.getPerimeter();
        const x = p * (p - this.a) * (p - this.b) * (p - this.c);
        const S = Math.sqrt(x);
        const toFixS = S.toFixed(3);
        return parseFloat(toFixS);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getPerimeter() {
                return "Ошибка! Треугольник не существует"
            },
            getArea() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}