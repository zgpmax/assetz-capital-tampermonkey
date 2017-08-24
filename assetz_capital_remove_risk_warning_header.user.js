// ==UserScript==
// @name         Assetz Capital remove Risk Warning Header
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.assetzcapital.co.uk/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // console.log('In Assetz Capital remove Risk Warning Header');

    var hrw = document.getElementsByClassName('header-risk-warning');
    var hc = hrw.length;

    for (var i = 0; i < hc; i++) {
        // console.log(i);
        var element = hrw[i];
        element.parentElement.removeChild(element);
    }

})();
