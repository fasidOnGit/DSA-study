class NumArray {
    private readonly nums: number[] = []
    constructor(nums: number[]) {
        this.nums = nums;
    }

    sumRange(left: number, right: number): number {
        let product = 0;
        for (let i = left; i <= right; i++) {
            product += this.nums[i];
        }

        return product;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */