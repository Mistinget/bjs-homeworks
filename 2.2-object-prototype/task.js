String.prototype.isPalindrome = function isPalindrome() {
    const string = this.toLowerCase().split(' ').join('');
    // let arr = string.split('');
    // let arr1 = arr.reverse();
    // const strReverse = arr1.join('');
    const strReverse = string.split('').reverse().join('');
    if (strReverse === string) {
        // if (strReverse.split(' ').join('') === string) {
        return true;
    } else {
        return false;
    }
}
console.log("А роза упала на лапу Азора");


function getAverageMark(marks) {
    let sum = 0; //общее чисчисло баллов
    let length = marks.length;
    if (length === 0) {
        return 0;
    }
    for (let i = 0; i < length; i++) {
        sum += marks[i];
    }
    let average = sum / length;
    let roundedAverage = Math.round(average);
    return roundedAverage; //средняя оценка по предмету
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}