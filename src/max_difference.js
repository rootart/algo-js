/* Max difference problem
 * Finding maximum difference "max-profile" in a series of values.
 * In what day should you buy/sell in order to make the maximum profit?
*/

export default function solution(arr) {
    let minPos = 0,
        minValue = arr[0],
        maxPos = 0,
        maxDiff = 0;

    arr.forEach((value, index)=>{
        if (Math.min(minValue, value) < minValue) {
            minValue = value;
            minPos= index;
        }

        let diff = value - minValue;
        let newMax = Math.max(diff, maxDiff);
        if (newMax > maxDiff) {
            maxPos = index;
            maxDiff = newMax;
        }
    });

    return [minPos, maxPos, maxDiff];
}
