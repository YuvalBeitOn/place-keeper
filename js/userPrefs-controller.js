'use strict';

var gPrefs = getPrefs();

function onInit() {
    renderCurrPrefs();
    renderUserStyle();
}

function onSetPrefs(ev) {
    ev.preventDefault();
    const backGroundColor = document.getElementById('bgc').value;
    document.body.style.background = backGroundColor;
    const textColor = document.getElementById('text-color').value;
    document.body.style.color = textColor;
    const dateBirth = document.getElementById('date-birth').value;
    const eMail = document.getElementById('the-email').value;
    const age = document.getElementById('age').value;
    changePrefs(backGroundColor, textColor, dateBirth, eMail, age);
}

function showAge(newVal) {
    document.querySelector(".age-display").innerHTML = newVal;
    checkIfDateIsValid();
}

function renderCurrPrefs() {
    const backGroundColor = document.getElementById('bgc');
    backGroundColor.value = gPrefs.backGroundColor;
    const textColor = document.getElementById('text-color');
    textColor.value = gPrefs.textColor;
    const dateBirth = document.getElementById('date-birth');
    dateBirth.value = gPrefs.dateBirth;
    const eMail = document.getElementById('the-email');
    eMail.value = gPrefs.eMail;
    const age = document.getElementById('age');
    age.value = gPrefs.age;
}

function renderUserStyle() {
    document.body.style.background = gUserPrefs.backGroundColor;
    document.body.style.color = gUserPrefs.textColor;
}

function checkIfDateIsValid() {
    console.log('im here');
    const dateBirth = document.getElementById('date-birth').value;
    const elAge = document.getElementById('age');
    const age = +elAge.value;
    const yearBirth = new Date(dateBirth).getYear();
    const currYear = new Date().getFullYear();
    console.log((currYear - age), yearBirth)
        // if ((currYear - age) !== yearBirth) alert("Age do not match to date birth");
        // if ((currYear - age) !== yearBirth) elAge.setCustomValidity("Age do not match to date birth");
        // else elAge.setCustomValidity("");
}

function getAstrologicalForecast() {
    var elRandForecast = document.querySelector('.rand-forecast');
    const astroForecast = ['This is a time in your life when you don’t sweat the small stuff as much as you normally do. You see the broader perspective on life, and you generally feel supported, so that smaller inconveniences don’t stress you out quite as easily. Your positive outlook is notable during this cycle. Learn as much as you can now, in preparation for the next cycle beginning in December 2020 that puts your career on center stage. You’ll want to be prepared!', 'Until December 18th, 2020, your work, daily routines, and health endeavors continue to expand, improve, and grow. This is a time when your work projects or duties expand, or you have increased opportunities for employment. You can be so confident in your ability to take on projects and endeavors, however, that you overload your plate, so do watch for that. Even so, Saturn’s concurrent transit can help keep you in line and productive. This influence is with you for all of 2020 with the exception of the last two weeks of the year.', 'Your personality, confidence, and verve can add to your income during this period. Earning your way is more important to you than usual in the year ahead. It can be a time of a pleasant feeling of self-sufficiency. There can be powerful changes in how you view your money, resources, assets, personal belongings, and natural talents or earning power during this period.'];
    const randomForecast = astroForecast[Math.floor(Math.random() * astroForecast.length)];
    elRandForecast.innerText = randomForecast;
}