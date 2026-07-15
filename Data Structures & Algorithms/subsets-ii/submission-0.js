class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        //[]
        //* [] [7]
        //* [] [7]
        const result = [];
        nums.sort((a, b) => a - b);

        const dfs = (index, subset) => {
            if (index === nums.length) {
                result.push(subset);
                return;
            }

            // Skip current number

            dfs(index + 1, [...subset, nums[index]]);

            while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
                index++;
            }

            // Include current number
            dfs(index + 1, [...subset]);
        };

        dfs(0, []);

        return result;
    }
}
