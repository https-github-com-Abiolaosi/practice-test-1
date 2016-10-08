/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - you are allowed to look at Wikipedia's example calculation:
 *            https://en.wikipedia.org/wiki/Standard_deviation#Basic_examples
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

function sum(arr) {
  mySum = 0;
  arr.forEach(function(currentValue, _index, _array) {
    mySum += currentValue;
  });
  return mySum;
}

function round(number) {
  return Math.round(number * 100) / 100;
}

function stdev(arr) {

  // step 1: find average of array values
  myAverage = sum(arr) / (arr.length);

  // step 2: create a new array of deviations
  myDevArray = [];
  arr.forEach(function(currentValue, _index, _array) {
    var dev = Math.pow((currentValue - myAverage), 2);
    myDevArray.push(dev);
  });

  // step 3: find variance
  var myVariance = sum(myDevArray) / (myDevArray.length);

  // step 4: find standard deviation = square root of variance
  var myStandardDev = Math.sqrt(myVariance);
  var myStandardDevRounded = round(myStandardDev);

  return myStandardDevRounded;
}



// Don't change below:

module.exports = { stdev: stdev };
