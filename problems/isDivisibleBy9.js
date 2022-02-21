/**
 * Returns if a number is divisible by 9.
 * @param {number} num - a number
 * @returns {boolean} - is the number divisible by 9
 *
 * ex: isDivisibleBy9(27) //=> true
 * ex: isDivisibleBy9(16) //=> false
 *
 */
//COMPLETED
function isDivisibleBy9(num) {
  console.log(num);
  if (num >= 9 && num % 9 === 0) {
    // console.log(true);
    return true;
  } else {
    // console.log(false);
    return false;
  }
}

module.exports = isDivisibleBy9;
