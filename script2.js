"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const howMany = prompt("Один из последних просмотреных фильмов", ""),
      reiting = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотреных фильмов", ""),
      d = prompt("На сколько оцените его?", "");

alert(numberOfFilms);
alert(howMany);
alert(reiting);

personalMovieDB.movies[howMany] = reiting;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


