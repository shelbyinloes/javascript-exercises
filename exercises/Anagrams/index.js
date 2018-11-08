/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA, stringB) {
    let arrA = stringA.toLowerCase().split("").sort().join('').trim();
    let arrB = stringB.toLowerCase().split("").sort().join('').trim();
    if(/^[a-zA-Z]+$/.test(arrB || arrA)){
      console.log("woah")
    }
    if(arrA === arrB){
      return true
    }else{
      console.log("Something is wrong")
    }
    console.log(arrA, arrB)
  }

module.exports = anagrams;
