/**
 *
 * @param stringToTest
 * @returns {string[]}
 */
let getWordArray = (stringToTest) => {

    let wordArray = [];
    wordArray = stringToTest.split(' ');
    return wordArray;
};

/**
 *
 * @param stringToTest
 * @returns {number}
 */
const getWordCount = (stringToTest) => {

    let wordArray = getWordArray(stringToTest);
    return wordArray.length;
};

/**
 *
 * @param stringToTest
 * @returns {number}
 */
const getLettersCount = (stringToTest) => {

    let wordArray = getWordArray(stringToTest);
    let totalLetters = 0;
    for(let word of wordArray){
        word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        totalLetters += word.length;
    }
    return totalLetters;
};

// const count = getWordCount('Je suis heureux');
const count = getLettersCount('#tJe suis heureux');
alert(count);