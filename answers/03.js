/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
function mode(arr) {
  myModeObj = {};
  arr.forEach(function(currentValue, _index, _array){
    if(!myModeObj[currentValue]) {
      myModeObj[currentValue] = 1;
    } else {
      myModeObj[currentValue] += 1;
    }
  });
  var myModeCount = 0;
  var outputMode = "";
  for (key in myModeObj){
    if(myModeObj[key] >= myModeCount){
      myModeCount = myModeObj[key];
      outputMode = key;
    }
  }
  return outputMode;
}

// Don't change below:

module.exports = { mode: mode };
