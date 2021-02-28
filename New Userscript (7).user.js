// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.amazon.de/*
// @grant        none
// ==/UserScript==

(function() {
    document.querySelector("[name=placeYourOrder1]").click();
})();