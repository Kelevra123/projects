"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

function start() {

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let a = prompt("Один из последних просмотреных фильмов", ""),
//     b = prompt("На сколько оцените его?", "");
    //   c = prompt("Один из последних просмотреных фильмов", ""),
    //   d = prompt("На сколько оцените его?", "");


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотреных фильмов", ""),
          b = prompt("На сколько оцените его?", "");
    
          if ( a != null && b != null && a != "" && b != "" && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
            console.log("done");
          } else {
              console.log("error");
              i--;
          }   
    }
}

rememberMyFilms();

function detectPersonaLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log("Вы ксассический зритель");
    } else if (personalMovieDB.count >= 30 ) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
    
    console.log(personalMovieDB);
}

detectPersonaLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        const gen = prompt(`Ваш любимый жанр? ${i}`); 
    if (gen != null && gen != "" && gen.length < 25) { 
        personalMovieDB.genres[i - 1] = gen;
        console.log("Awesome");
    } else { 
        console.log("fail");
        i--;
    }
}
}

writeYourGenres();


// let i = 0;
// while(i < 2) {
//     let a = prompt("Один из последних просмотреных фильмов", ""),
//         b = prompt("На сколько оцените его?", "");
//         i++;
//     if ( a != null && b != null && a != "" && b != "" && a.length < 50 ) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");  
// } else {
//     console.log("error");
//     i--;
// }
// }






