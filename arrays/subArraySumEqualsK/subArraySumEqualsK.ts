/**
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 * 
 * Example 1:
 * 
 * Input: nums = [1,1,1], k = 2
 * Output: 2
 * 
 * Example 2:
 * 
 * Input: nums = [1,2,3], k = 3
 * Output: 2
 * 
 * Constraints:
 * 
 * 1 <= nums.length <= 2 * 104
 * -1000 <= nums[i] <= 1000
 * -107 <= k <= 107
 * 
 */

function subarraySumBruteForce(nums: number[], k: number): number {
    let totalNumberOfSubArray = 0;
  for(let i = 0; i < nums.length; i++) {
    const current = nums[i];
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
        sum += nums[j];

        if (sum === k) {
            totalNumberOfSubArray++;
            continue;
        }
    }
  }

  return totalNumberOfSubArray;  
};

function subarraySum(nums: number[], k: number): number {
    let count = 0;
    let prefixSum = 0;
    const prefixMap = new Map<number, number>();
    prefixMap.set(0, 1); // base case: prefix sum 0 occurs once

    for (let j = 0; j < nums.length; j++) {
        prefixSum += nums[j];

        const complement = prefixSum - k;
        if (prefixMap.has(complement)) {
            count += prefixMap.get(complement)!;
        }

        prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1);
    }

    return count;
}