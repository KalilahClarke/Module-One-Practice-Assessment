/**
 * Return a frequency map of each letter in a string, ignores spaces.
 * @param {string} str - a string
 * @returns {Object} - the characters and their frequency
 *
 * ex: letterCount("hello world") //=> {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
 *
 */
//incomplete
function letterCount(str) {
  let alphabetObj = {};

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    alphabetObj[str[i]] = 0;
    if (alphabetObj.hasOwnProperty(str[i])) {
      alphabetObj[str[i]] += 1;
    } else {
      alphabetObj[str[i]] = 1;
    }
  }
  console.log(alphabetObj);
  return alphabetObj;
}

module.exports = letterCount;
