/* Question 2
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
function round(number) {
  return Math.round(number * 100) / 100;
}

function median(arr) {
  //sort array
  arr.sort(function(a, b){
    return a - b;
  });

  //find array length
  var arrayLength = arr.length;
  var mid;
  if (arrayLength % 2 === 0){
    mid = arrayLength / 2;
    return round((arr[mid - 1] + arr[mid] ) / 2);
  } else {
    mid = arrayLength / 2 - 0.5;
    return round(arr[mid]);
  }

}


// Don't change below:

module.exports = { median: median };
