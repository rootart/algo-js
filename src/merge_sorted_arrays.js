/*
* Write a function which merges two sorted arrays of integers and prints result
* Example, func([1, 2, 4], [3, 7, 8, 9]) -> [1, 2, 3, 4, 7, 8, 9]
*/


export default function solution(arr1, arr2) {
    let result = [];
    var p1 = 0,  // initial index for the first array
        p2 = 0;  // initial index for the second array
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] < arr2[p2]) {
            result.push(arr1[p1]);
            p1++;
        } else {
            result.push(arr2[p2]);
            p2++;
        }
    }

    if (p1 < arr1.length) {
        result = [...result, ...arr1.slice(p1)];
    }

    if (p2 < arr1.length) {
        result = [...result, ...arr2.slice(p2)];
    }

    return result;

}
