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

// *****Немного о наследовании обьектом свойств*****
const dk = {
    health: 10000,
    attack: 750,
    defence: 600,
    speed: 100
};

const chow = {
    health: 12500
};

Object.setPrototypeOf(chow, dk); //наследует свойства где первый в скобках кто наследует. 2 от кого

const leo = Object.create(dk);

const laika = Object.create(dk);// формат когда изначально наследует свойства 
console.log(chow.health, chow.defence);
console.log(laika.health, laika.speed);
// *****Немного о наследовании обьектом свойств*****
 
 // **** Динамическая типизация ****
// Способ превратить число в строку + (конкантинация есть еще)
 const fontSize = 25 + "px"; //превращаем число в строку для дальнейшего использования в таком виде
// Способы первратить строку в число (унарный плюс, и метод parseInt("", 10-(десятичная система)))
console.log(typeof(+"5"));
console.log(typeof(parseInt("15px", 10)));
// Превращение в булиновое значиние false true
//0, "", null, undefined, NaN - всегда false по умолчанию, все остальное true
//1 способ
let switcher = null;

if (switcher) {
    console.log("working..."); //не работае код так как switcher - false 
}

switcher = 1;

if (switcher) {
    console.log("working..."); // работает код так как switcher - true 
}
// 2 способ
console.log(typeof(!!"4444")); // - !! превращают примитив в булиновое значение
console.log(2 && 1 && null && 32); // и запинается на лжи а или на правде

// Получение элементов со страницы HTML и работа с ними
const box = document.getElementById("box"); // получаем элемент по id только 1 
const btns = document.getElementsByTagName('button'); // вытаскиваем все с тегом <button></button>
// и получаем массив данный [button, button и тд] чтобы обратится btns[0] или btns[2] и тд
const circles = document.getElementsByClassName('circle');//все элементы класса circle по той же схеме
const hearts = document.querySelectorAll(".heart");// вытащит все элементы с классом heart по слектору css
//и также даст возможность использовать метод forEach() что удобно
hearts.forEach(item => {
    console.log(item);
});// выведет все данные масива списком
const oneHeart = document.querySelector("div");//вытащит первый елемент с селектором div(любой css селектор)

box.style.cssText = `background-color: blue; width: 500px`; // работа со стилями внутри js 
// обращаемся к переменной которая втащила елемент(box, btns), после говорим что меняем стиль
//.style и чтобы писать не камелкейс .cssText и меняем стиль динамично если нужно
btns[1].style.borderRadius = '100%';// для вытащеных массивов указываем позицию в масиве

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
}); // применяю ко всем елементам массива который вытащил

const div = document.createElement('div');// создает <div></div> но только внутри js
div.classList.add('black'); // Я создал <div></div> выше и поместил его в переменную div
// теперь я говорю ему наследовать CSS стили для класса black или любого другого через переменную
hearts.append(div); // таким способом я добавляю его в html структуру после массива hearts (в конец)
hearts.prepend(div); // а так перед массивом hearts в начало
hearts[0].before(div); // обращаюсь к индексу в массиве и вставляю перед этим индексом
hearts[0].after(div); // обращаюсь к индексу и вставляю после него 
hearts[0].remove(); // удилил сердце под индексом [0]
hearts[0].replaceWith(circles[0]);// заменил сердце кружком 
//ВЫШЕ МЕТОДЫ ПОСТРОЕНИЯ HTML СТРУКТУРЫ В JS 
div.innerHTML = "<h1>Hello World</h1>";// помещает html структуру 
div.textContent = "текст сюда можно воодить в в div выводить";//работает только с текстом а не структурой
div.insertAdjacentHTML("", "<h2>Hello</h2>");// добавляет структуру в элемент по следующему принципу
//beforebegin - перед элементом (div в данном случае), afterend - после елемента div
//afterbegin - в элемент в начало, beforeend - в элемент в конец "h2" - то что помещаем 


