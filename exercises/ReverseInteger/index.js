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
    let negative;
  // putting into an array
  const numArr = num.toString().split('')
  
  // checking for negative
  if(numArr[0] == '-') {
    console.log('negativo')
    numArr.shift();
    negative = true;
    console.log(negative)
  }

  // while the last number in the array is 0, pop off
  while(numArr[numArr.length-1] == 0){
    numArr.pop();
  }

  //adding back in the negative
  if(negative == true){
    console.log("still here")
    numArr.push('-');
  }
  //put it all back together
  const numStr =  numArr.reverse().join('');
  return Number(numStr);
}

module.exports = reverse;
