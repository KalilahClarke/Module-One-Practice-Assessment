/**
 * Returns an array of words that have 5 or more letters.
 * @param {string[]} words - an array containing words
 * @returns {string[]} - words with 5 or more letters
 *
 * ex: onlyStringsGreaterThanOrEqualTo5(["cat", "hello", "corey", "dog"])
 * returns ["hello", "corey"]
 */
//COMPLETED
function onlyStringsGreaterThanOrEqualTo5(words) {
  let word = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      word.push(words[i]);
    }
  }
  return word;
}

module.exports = onlyStringsGreaterThanOrEqualTo5;
