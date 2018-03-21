/**
 * @overview debounce Util
 * @author Dustin Hershman
 * @version 1.0.0
 */
'use strict';

 var debounce = function(func, wait, immediate) {
     var timeout;

     console.log('Thing');

    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

module.exports = debounce;