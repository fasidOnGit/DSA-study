class NumArray {
    private readonly nums: number[] = [];
    private readonly prefixSum: number[] = [];
    
    constructor(nums: number[]) {
        this.nums = nums;
        this.prefixSum = new Array(nums.length).fill(0);
        this.prefixSum[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            this.prefixSum[i] = this.prefixSum[i - 1] + nums[i];
        }
    }

    sumRange(left: number, right: number): number {
        let product = 0;
        for (let i = left; i <= right; i++) {
            product += this.nums[i];
        }

        return product;
    }

    sumRangeOptimized(left: number, right: number): number {
        return this.prefixSum[right] - this.prefixSum[left - 1];
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */