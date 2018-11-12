/**
 * Array Chunk
 *
 * For given array and chunk size, divide the array into many subarrays
 * where each subarray is of length chunk size.
 *
 * Examples:
 * chunk([1, 2, 3, 4], 2) === [[ 1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 2) === [[ 1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) === [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 * chunk([1, 2, 3, 4, 5], 4) === [[ 1, 2, 3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 10) === [[ 1, 2, 3, 4, 5]]
 */

function chunk(array, size) {
    // newArr is what we are pushing to
    const newArray = []
    // copied array
    let copiedArray = [...array]
    //calculating how many times we are chunking
    const numChild = Math.ceil(copiedArray.length / size);
    // splicin' n' dicin'
    for(let i = 0; i < numChild; i++){
      newArray.push(copiedArray.splice(0, size));
    }
    return newArray
}

module.exports = chunk;
