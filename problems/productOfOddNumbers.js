/**
 * Return the product of all odd numbers in an array.
 * @param {number[]} nums - an array containing numbers
 * @returns {number} - product of all the odd numbers
 *
 * ex: productOfOddNumbers([1, 2, 3, 4, 5])
 * returns 15
 */
//COMPLETED
function productOfOddNumbers(nums) {
  let sum = 0;
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      sum += nums[i];
    }
  }
  return sum;
}

module.exports = productOfOddNumbers;
