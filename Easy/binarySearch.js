/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1. */

const search = (nums, target) => {
  let min = 0;
  let max = nums.length - 1;

  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    if (nums[midIndex] > target) max = midIndex - 1;
    else if (nums[midIndex] < target) min = midIndex + 1;
    else return midIndex;
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // => 4
