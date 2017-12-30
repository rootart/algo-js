/*
 * Given the list of numbers [1, 2], write solution to translate them into
 * all possible sequences of letters e.g. [1, 2] -> 'ab', 'm'
 */

function generateHeadAndTail(arr) {
    // arr [[1], [2, 3]]

    var head = arr[0];
    var tail = arr[1];
    // console.log('initial array', arr)
    if (tail.length === 1){
        return [[[...head, ...tail], []], ];
    } else if (tail.length > 1) {
        var result = [];
        var fistElement = tail[0];

        var entry = [ [...head, fistElement], [...tail.slice(1)]];
        result.push(entry);

        var numTwoElements = parseInt('' + tail[0] + tail[1]);
        // console.log(numTwoElements)
        if (numTwoElements <= 26) {
            result.push(
                [
                    [...head, numTwoElements], [...tail.slice(2)]
                ]
            );
        }

        return result;
    }

}


function solution(arr) {
    if (arr.length === 0) {
        return [];
    }

    var q = [[[], arr], ];

    var result = [];
    while (q.length > 0) {
        // console.log('values in the q', q);
        var firstFromQ = q.pop();
        // console.log('array for processing', firstFromQ);
        var head = firstFromQ[0];
        var tail = firstFromQ[1];
        var pairs;

        if (tail.length === 0 && head.length > 0){
            result.push(head);
        } else if (tail.length > 0) {
            pairs = generateHeadAndTail([head, tail]);
            // console.log('another pairs ', pairs);
            pairs.map((pair) => q.push(pair));
        }
    }

    return result;

}


function translateToLetters(arrayOfSolutions) {

    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return arrayOfSolutions.map((listOfNumbers)=>{
        return listOfNumbers.map((num) => {
            return alphabet[num-1];
        }).join('');
    });
}


export { generateHeadAndTail, solution, translateToLetters };
