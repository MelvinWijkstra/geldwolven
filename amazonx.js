// ==UserScript==
// @name         AmaazonAutoBuy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.amazon.de/*
// @match        https://www.amazon.nl/*
// @match        https://www.amazon.fr/*
// @match        https://www.amazon.it/*
// @match        https://www.amazon.es/*
// @grant        none
// ==/UserScript==

setTimeout(function(){ document.querySelector("[name=placeYourOrder1]").click(); }, 2000);
