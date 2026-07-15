class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);

        const result = [];

        function dfs(index, subset) {
            if (index === nums.length) {
                result.push(subset);
                return;
            }

            // Include nums[index]
            dfs(index + 1, [...subset, nums[index]]);

            while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
                index++;
            }

            // index now points to the LAST duplicate.
            // Move to the next distinct value.
            dfs(index + 1, subset);
        }

        dfs(0, []);

        return result;
    }
}
