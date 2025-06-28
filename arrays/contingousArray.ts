// https://leetcode.com/problems/contiguous-array/

function findMaxLengthBruteForce(nums: number[]): number {
    let maxLength = 0;
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j=i; j < nums.length; j++) {
            sum += nums[j];
        }
        const arrayLength = nums.length - i;
        
        if ((arrayLength - sum) === sum && maxLength < arrayLength) {
            maxLength = arrayLength;
        }
    }

    return maxLength;
};

function findMaxLength(nums: number[]): number {
    let maxLength = 0;
    const prefixSum = calculatePrefix(nums);

    for (let i = 0; i < nums.length; i++) {
        const leftPrefixSum = i === 0 ? 0 : prefixSum[i - 1];
        for (let j = i; j < nums.length; j++) {
            const sum = prefixSum[j] - leftPrefixSum;


            const arrayLength = j - i + 1;

            if ((arrayLength - sum) === sum && maxLength < arrayLength) {
                maxLength = arrayLength;
            }
        }
    }

    return maxLength;
};

function calculatePrefix(nums: number[]): number[] {
    const prefixSum: number[] = new Array(nums.length).fill(0);
    prefixSum[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
    }

    return prefixSum;
} 

findMaxLength([0,1])


function findMaxLengthOptimized(nums: number[]): number {
    let maxLength = 0;
    let hash = new Map<number, number>();

    hash.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        
    }

    return maxLength;
}