class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        function dfs(subset, i, sum) {
            if (i >= nums.length || sum > target) {
                return;
            }
            if (sum === target) {
                result.push(subset);
                return
            }

            dfs([...subset, nums[i]], i, sum + nums[i]);

            dfs([...subset], i + 1, sum);
        }

        dfs([], 0, 0);

        return result;
    }
}
