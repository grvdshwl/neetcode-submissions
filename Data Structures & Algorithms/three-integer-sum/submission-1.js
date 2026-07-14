class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.length;

        const sortedNums = nums.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < n; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            let left = i + 1;
            let right = n - 1;

            while (left < right) {
                const n1 = sortedNums[i];
                const n2 = sortedNums[left];
                const n3 = sortedNums[right];
                const sum = n1 + n2 + n3;

                if (sum === 0) {
                    result.push([n1, n2, n3]);
                    left++;
                    right--;

                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    while (left < right && nums[right] === nums[right + 1]) {
                        right++;
                    }
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result
    }
}
