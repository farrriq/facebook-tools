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
    var e = 1;
    document.getElementById("fbSearchResultsBox").scrollIntoView(!0);
    var l = setInterval(function() {
            var e, l = document.querySelectorAll(".layerCancel");
            for (e = 0; e < l.length; ++e) l[e].click()
        }, 500),
        t = setInterval(function() {
            var n = document.querySelectorAll(".FriendRequestAdd");
            e < n.length ? (n[e].scrollIntoView(!0), window.scrollBy(0, 96.5), n[e].click(), e++) : (clearInterval(t), clearInterval(l), window.location.reload(!1))
        }, 25e3)
}();
