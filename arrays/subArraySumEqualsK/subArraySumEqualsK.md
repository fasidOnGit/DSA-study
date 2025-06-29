# Subarray Sum Equals K — Notes and Optimization Walkthrough

## Problem Statement

Given an array of integers `nums` and an integer `k`, find the total number of continuous subarrays whose sum equals `k`.

---

## Intuition

We need to find the total number of continuous subarrays whose sum equals `k`. A brute-force solution checks all possible subarrays, but it's inefficient due to repeated sum calculations. To optimize, we observe that the sum of any subarray can be derived using prefix sums. By using a hash map to track prefix sums and how often they’ve occurred, we can determine in constant time how many subarrays end at the current index and sum to `k`.

---

## Approach

We maintain a running prefix sum while iterating through the array. At each index `j`, we calculate the current prefix sum `prefixSum`. To check if there is a subarray ending at `j` whose sum is `k`, we look for `prefixSum - k` in a hash map. This map keeps track of how many times each prefix sum has occurred. If `prefixSum - k` exists in the map, it means there are one or more subarrays ending at `j` that sum to `k`, and we increment our count accordingly. Finally, we update the map with the current prefix sum.

---

## Complexity

* **Time complexity:** $O(n)$
  We make a single pass through the array, doing constant-time work at each step.

* **Space complexity:** $O(n)$
  We use a hash map to store prefix sums, which in the worst case may store up to `n` different sums.

---

## Code

```typescript
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
```
