(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.number_to_letters = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    /*
     * Given the list of numbers [1, 2], write solution to translate them into
     * all possible sequences of letters e.g. [1, 2] -> 'ab', 'm'
     */

    function generateHeadAndTail(arr) {
        // arr [[1], [2, 3]]

        var head = arr[0];
        var tail = arr[1];
        // console.log('initial array', arr)
        if (tail.length === 1) {
            return [[[].concat(_toConsumableArray(head), _toConsumableArray(tail)), []]];
        } else if (tail.length > 1) {
            var result = [];
            var fistElement = tail[0];

            var entry = [[].concat(_toConsumableArray(head), [fistElement]), [].concat(_toConsumableArray(tail.slice(1)))];
            result.push(entry);

            var numTwoElements = parseInt('' + tail[0] + tail[1]);
            // console.log(numTwoElements)
            if (numTwoElements <= 26) {
                result.push([[].concat(_toConsumableArray(head), [numTwoElements]), [].concat(_toConsumableArray(tail.slice(2)))]);
            }

            return result;
        }
    }

    function solution(arr) {
        if (arr.length === 0) {
            return [];
        }

        var q = [[[], arr]];

        var result = [];
        while (q.length > 0) {
            // console.log('values in the q', q);
            var firstFromQ = q.pop();
            // console.log('array for processing', firstFromQ);
            var head = firstFromQ[0];
            var tail = firstFromQ[1];
            var pairs;

            if (tail.length === 0 && head.length > 0) {
                result.push(head);
            } else if (tail.length > 0) {
                pairs = generateHeadAndTail([head, tail]);
                // console.log('another pairs ', pairs);
                pairs.map(function (pair) {
                    return q.push(pair);
                });
            }
        }

        return result;
    }

    function translateToLetters(arrayOfSolutions) {

        var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

        return arrayOfSolutions.map(function (listOfNumbers) {
            return listOfNumbers.map(function (num) {
                return alphabet[num - 1];
            }).join('');
        });
    }

    console.log(translateToLetters(solution([1, 2, 3, 4, 5])));

    exports.generateHeadAndTail = generateHeadAndTail;
    exports.solution = solution;
    exports.translateToLetters = translateToLetters;
});

