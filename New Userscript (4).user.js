// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.amazon.nl/*
// @match        https://www.amazon.de/*
// @match        https://www.amazon.fr/*
// @match        https://www.amazon.es/*
// @match        https://www.amazon.co.uk/*
// @match        https://www.amazon.it/*
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
document.querySelector("[name=placeYourOrder1]").click();
    alert("Your page has loaded.")
}, false);