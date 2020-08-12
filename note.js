"use strict";

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    console.log(i);
}







//                 *******************ВСЕ О ОБЪЕКТАХ*****************************
const options  ={ //------------- это обьект называется options -------
    name: "test", //----свойство (любое)----
    width : 1024,
    heigth: 1024,
    colors: {           //обьект вложеный в обьект
        border: "black",
        bg: "red"
    },
    makeTest: function() {
        console.log("test");
    }
};

options.makeTest(); //запускает метод 

const {border, bg} = options.colors; //деструктурирую свойства - или просто работаю 
                                     //c ними на прямую

console.log(Object.keys(options).length); //указывет сколько ключей в обьекте - счетчик

console.log(options.name); // Могу воспользоватся любым свойством обьекта

delete options.name; //Удаляет свойство внутри обьекта, может быть цикличен

for (let key in options) {
    if (typeof(options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`); //достает ключи и значения вложеных обьектов
        }
    } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`); // достает ключи ${key} ${имя обьекта[key]}
}                                                                  // достает значения
}
//             *******************ВСЕ О ОБЪЕКТАХ*****************************



//             ****************     МАССИВЫ И ПСЕВДОМАСИВЫ      *****************
const arr = [1, 2, 3, 6, 8];

arr.pop();//удаляет последний элемент массива
arr.push(10); // добавляет елемент в конец массива

for (let i = 0; i < arr.length; i++) { //<<<<перебор элементов внутри массива посредством цикла
    console.log(arr[i]);
}

for (let value of arr) { //<<< переберает элементы внутри массива псевдомасива тоже самое выше
    console.log(value);
}

arr.forEach(function(item, i, arr){               //перебор масива с настройкой в виде функции (метод с функцией)
console.log(`${i}:${item} внутри массива ${arr}`);//где Item - имя (сам придумываешь) елемента, i - номер по порядку
});                                               //arr - ссылка на массив к которому обращаешся

const str = prompt("", "");        //задает вопрос - все просто
const products = str.split(", ");  //собирает ответы в массив где ", " - разделитель для ответов

arr.sort(compareNum);              //метод для сортировки массива где (имя функции которая обрабатывает)

function compareNum(a, b) {        //функция для сравнения чисел
    return a - b;
}


