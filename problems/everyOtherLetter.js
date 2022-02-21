/**
 * Returns a new string with every other letter.
 * @param {string} str - a string
 * @returns {str} -
 *
 * ex: everyOtherLetter("mississippi") //=> "msispi"
 *
 */
//INCOMPLETE
function everyOtherLetter(str) {
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 1) {
      str.slice(i, 1);
      console.log(str);
    }
  }
  console.log(str);
  //return str.join("");
}

module.exports = everyOtherLetter;
