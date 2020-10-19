// ==UserScript==
// @name         Facebook Auto Add Friend
// @namespace    https://www.github.com/farrriq/
// @version      0.1.2
// @description  Facebook Add Friends Script
// @author       Fariq
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

! function() {
    "use strict";
    var fariq = 1;
    document.getElementById("fbSearchResultsBox").scrollIntoView(!0);
    var l = setInterval(function() {
            var fariq, l = document.querySelectorAll(".layerCancel");
            for (fariq = 0; fariq < l.length; ++fariq) l[e].click()
        }, 100),
        t = setInterval(function() {
            var n = document.querySelectorAll(".FriendRequestAdd");
            fariq < n.length ? (n[fariq].scrollIntoView(!0), window.scrollBy(0, 96.5), n[fariq].click(), fariq++) : (clearInterval(t), clearInterval(l), window.location.reload(!1))
        }, 1fariq3)
}();