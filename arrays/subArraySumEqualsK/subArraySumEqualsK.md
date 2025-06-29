# Subarray Sum Equals K — Notes and Optimization Walkthrough

## Problem Statement

Given an array of integers `nums` and an integer `k`, find the total number of continuous subarrays whose sum equals `k`.

---

## Intuition

We need to find the total number of continuous subarrays whose sum equals `k`. A brute-force solution checks all possible subarrays, but it's inefficient due to repeated sum calculations. To optimize, we observe that the sum of any subarray can be derived using prefix sums. By using a hash map to track prefix sums and how often they’ve occurred, we can determine in constant time how many subarrays end at the current index and sum to `k`.

---

## Approach

We began with a brute-force strategy that involved checking all subarrays using nested loops. However, we observed that this approach repeatedly recalculates sums for overlapping subarrays, leading to inefficiencies. To address this, we introduced the concept of prefix sums.

Using the prefix sum formula:

```
sum(i, j) = prefixSum[j] - prefixSum[i - 1]
```

and the condition that `sum(i, j) = k`, we rearranged it to:

```
prefixSum[i - 1] = prefixSum[j] - k
```

This gives us a key insight: for each index `j`, we treat it as the end of a potential subarray and check if there’s a previously seen prefix sum that, when subtracted from the current prefix sum, equals `k`. If such a prefix sum exists, it means there’s a valid subarray ending at `j` that sums to `k`.

To implement this efficiently, we use a hash map to keep track of all previously seen prefix sums and how many times each has occurred. This is important because multiple subarrays can end at the same index and sum to `k` — for instance, overlapping subarrays in an input like `[-1000, 1000, 1, 3]` with `k = 4`. Here, both `[-1000, 1000, 1, 3]` and `[1, 3]` are valid subarrays ending at the same index. Tracking the count ensures we account for all such possibilities.

This approach reduces the time complexity from O(n²) to O(n) using a single pass and a hash map lookup.

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
