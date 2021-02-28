// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.amazon.nl/gp/buy/spc/handlers/display.html?hasWorkingJavascript=1
// @match        https://www.amazon.de/gp/buy/spc/handlers/display.html?hasWorkingJavascript=1
// @match        https://www.amazon.fr/gp/buy/spc/handlers/display.html?hasWorkingJavascript=1
// @match        https://www.amazon.es/gp/buy/spc/handlers/display.html?hasWorkingJavascript=1
// @match        https://www.amazon.co.uk/gp/buy/spc/handlers/display.html?hasWorkingJavascript=1
// @match        https://www.amazon.it/gp/buy/spc/handlers/display.html?hasWorkingJavascript=1
// @grant        none
// ==/UserScript==

window.addEventListener('load', function() {
document.querySelector("[name=placeYourOrder1]").click();
    alert("Your page has loaded.")
}, false);