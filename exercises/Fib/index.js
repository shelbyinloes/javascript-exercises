/**
 * Fib
 *
 * Write a function which print out the n-th entry in the fibonacci series.
 * The fibonacci series is an ordering of numbers where
 * each number is the sum of the preceeding two.
 * Example sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 *
 * Examples:
 * fib(4) === 3
 * fib(15) === 610
 */

function fib(n) {
    fibArr = []
  if(fibArr.length == 0){
    fibArr.push(0)
    fibArr.push(1)
  }
  // console.log(fibArr)
  for(i = 2; i <= n; i++){
    fibArr.push(fibArr[i - 2] + fibArr[i - 1])
  }
  return fibArr[n]
}

module.exports = fib;
