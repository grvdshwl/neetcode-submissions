class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        //* []
        //* [] [1]
        //* [] [2] [1] [1,2]
        //* [] [3] [2] [2,3] [1] [1,3] [1,2] [1,2,3]

        const result = [];

        function dfs(subset,index) {
            if (index >= nums.length) {
                result.push(subset);

                return;
            }
            const num = nums[index];

            dfs([...subset], index+1);

            dfs([...subset, num], index + 1);
        }

        dfs([],0);

        return result;
    }
}
