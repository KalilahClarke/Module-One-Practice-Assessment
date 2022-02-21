/**
 * Return if a given number includes 0.
 * @param {number} num - a number
 * @returns {boolean} - is zero in the number
 *
 * ex: numberIncludes0(1023) //=> true
 * ex: numberIncludes0(123) //=> false
 *
 */
//COMPLETED
function numberIncludes0(num) {
  let str = num.toString();
  return str.includes("0");
}

module.exports = numberIncludes0;
