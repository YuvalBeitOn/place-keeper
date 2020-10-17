'use strict';

const STORAGE_KEY = 'userData';
var gUserPrefs = loadPrefernces();


function changePrefs(backGroundColor, textColor, dateBirth, eMail, age) {
    const userPrefs = { backGroundColor, textColor, dateBirth, eMail, age };
    console.log(userPrefs);
    _savePrefsToStorage(userPrefs);
}

function loadPrefernces() {
    var prefs = loadFromStorage(STORAGE_KEY);
    if (!prefs) {
        prefs = {
            backGroundColor: 'rgb(233, 233, 221)',
            textColor: 'rgb(20,20,20)',
            dateBirth: '2020-10-16',
            eMail: 'yuvalbeiton@gmail.com',
            age: '25'
        };
    }
    _savePrefsToStorage(prefs);
    return prefs;
}

function getPrefs() {
    return gUserPrefs;
}


function _savePrefsToStorage(prefs) {
    saveToStorage(STORAGE_KEY, prefs);
}