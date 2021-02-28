// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.amazon.nl/gp/cart/mobile/go-to-checkout.html/ref=ox_sc_proceed?proceedToCheckout=1
// @match        https://www.amazon.de/gp/cart/mobile/go-to-checkout.html/ref=ox_sc_proceed?proceedToCheckout=1
// @match        https://www.amazon.fr/gp/cart/mobile/go-to-checkout.html/ref=ox_sc_proceed?proceedToCheckout=1
// @match        https://www.amazon.es/gp/cart/mobile/go-to-checkout.html/ref=ox_sc_proceed?proceedToCheckout=1
// @match        https://www.amazon.co.uk/gp/cart/mobile/go-to-checkout.html/ref=ox_sc_proceed?proceedToCheckout=1
// @match        https://www.amazon.it/gp/cart/mobile/go-to-checkout.html/ref=ox_sc_proceed?proceedToCheckout=1
// @grant        none
// ==/UserScript==

(function() {
location.reload();
    document.querySelector("[name=placeYourOrder1]").click();
})();