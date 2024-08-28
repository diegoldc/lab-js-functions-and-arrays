// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return num1;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "patatagorda", "orchard", "crackpot"];

function findLongestWord(array) {
    
    let longestWord = words[0];

    for (let i = 0; i < array.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
    }

    if ( words[i].length > longestWord.length) {
        console.log(`${longestWord[i].length} is longer than ${words.length}`);
      }
}

if (words.length === 0) {
    return null;
  }

return longestWord;
}

console.log(findLongestWord(words));




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers() {}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist() {}
