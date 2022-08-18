/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 */

const twoSum = (arr, target) => {
  // We are going to loop through the given array
  for (let index = 0; index < arr.length; index++) {
    // We declare 2 variables
    // one is going to be the difference from the target number
    // and the current number
    const difference = target - arr[index];
    // the other one is the index of the difference variable
    const diffIndex = arr.indexOf(difference);
    // if the number(difference) is present in the array
    // and if the number's index is not the same as the index
    if (diffIndex !== -1 && diffIndex !== index) {
      // then return an array with the original index and the number's index
      return [index, diffIndex];
    }
  }
};
