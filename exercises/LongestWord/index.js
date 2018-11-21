/**
* Longest Word
*
* Write a function that returns the longest word in the passed sentence.
* If there are two or more words that are the same length, return
* the first word from the string with that length. Ignore punctuation
* and assume sentence will not be empty.
*
* Examples:
* longestWord("Hello there") === "Hello"
* longestWord("My name is Adam") === "name"
* longestWord("fun&!! time") === "time"
*/

function longestWord(sen) {
    let senArr = sen.replace(/[^\w\s]/gi, '').split(" ")
    console.log(senArr)
    let longWord = senArr[0]
    for(i = 0; i < senArr.length; i++){
      if(senArr[i].length > longWord.length){
        longWord = senArr[i]
      }
    }
    return longWord;
}

module.exports = longestWord;
