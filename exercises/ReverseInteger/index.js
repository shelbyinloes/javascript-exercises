/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(num) {
  let negative; //saving for later
  
  const numArr = num.toString().split('') //turning num into an array
  
  // checking for negative
  if(numArr[0] == '-') {
    numArr.shift(); //get rid of '-'
    negative = true; //let us know later on to put '-' back in
  }

  // while the last number in the array is 0, pop off
  while(numArr[numArr.length-1] == 0){ numArr.pop() }

  //adding back in the negative
  if(negative == true){ numArr.push('-') }
  
//   const numStr =  numArr.reverse().join(''); //put it all back together
  return Number(numArr.reverse().join('')); //return & turn into arr
}

module.exports = reverse;
