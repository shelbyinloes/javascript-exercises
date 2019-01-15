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


 //this function only working if there are no special characters
function anagrams(stringA, stringB) {
  //make strings into alphabatized strings:
  let newA = stringA.toLowerCase().split("").sort().join('').trim().replace(/[^a-zA-Z ]/g, "");
  let newB = stringB.toLowerCase().split("").sort().join('').trim().replace(/[^a-zA-Z ]/g, "");


  //if they are the same or different
  return newA === newB ? true : false;
}

module.exports = anagrams;
