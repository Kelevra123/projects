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

let a = 5, //При работе с примитивами переменная принимает значение a = 5 в этом случае
    b = a;

b = b + a;

console.log(b);
console.log(a);

const obj = {  //При работе с объектами переменная принимает ссылку на сам объект
    a: 5,      // и после этого изменяет структуру объекта copy != copy; copy = obj;
    b: 10
};

const copy = obj;
copy.a = 10;

console.log(copy);
console.log(obj);


function copy2(mainObj) {  // Функция которая копирует обьект для изменения свойств
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;  // результат копирования
}

const numbers = {  // объект которым оперирует функция(который копирует)
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy2(numbers); // новая переменная, которая равна результату функции copy2(mainObj)

newNumbers.a = 10; // меняет скопированные ключи не затрагивая оригинальный объект
newNumbers.c.x = 10; // но при смене ключей вложенного объекта значения меняются и в оригинале

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 34,
    e: 25
};

console.log(Object.assign(numbers, add)); //объединяет два объекта

const clone = Object.assign({}, add); //Более простой способ копирования объекта пустой объект +
                                      // + объект который нужно скопировать = копия object.assign
clone.d = 20;
console.log(add);
console.log(clone);

const q = {         // Наиболее простой способ копирования объекта 
    one: 1,
    two: 2
};

const newObj = {...q}; // Развернули как конфету и отдали уже не как ссылку а как значения УРА
newObj.one = 55;
console.log(newObj);
console.log(q);

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

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(); // Метод копирования массива 

newArray[1] = "asdasdasd"; // Задаю новое значение для элемента скопированного массива №1


const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; // ... - оператор разворота массива
      // он вытаскивает содержимое одного массива сохраняя порядок данных и передает другому - все
console.log(internet);

function log(a, b, c) {  // функция не может использовать массив напрямую 
    console.log(a);
    console.log(b);
    console.log(c);
}

const webs = [1, 5, 76]; // массив нужно "развернуть как конфетку" - ... разворачивают массив
log(...webs);             // функция читает норм данные (какие угодно не только цифры)

const array = ['a', 'b', ];
const newAarray = [...array]; // упрощаем развернутый массив до переменной и пользуем ее

