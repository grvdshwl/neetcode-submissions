class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];

        const dfs = (index, subset) => {
            if (index === nums.length) {
                result.push(subset);
                return;
            }

            // Skip current number
            dfs(index + 1, subset);

            // Include current number
            dfs(index + 1, [...subset, nums[index]]);
        };

        dfs(0, []);

        return result;
    }
}