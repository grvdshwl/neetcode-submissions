class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;

        let left = 0;
        let right = 0;

        const queue = [];
        const result = [];

        while (right < n) {
            const curr = nums[right];

            while (queue.length && nums[queue.at(-1)] < curr) {
                queue.pop();
            }

            queue.push(right);

            while (queue.length && queue[0] < left) {
                queue.shift();
            }

            if (right - left + 1 === k) {
                result.push(nums[queue[0]]);
                left++;
            }

            right++;
        }

        return result;
    }
}
