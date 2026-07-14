class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //* Bruteforce
        const n = nums.length;
        const set = new Set();
        const result = [];

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        const pair = [nums[i], nums[j], nums[k]].sort((a,b)=>a-b);
                        const key = pair.join("-");

                        if (!set.has(key)) {
                            set.add(key);
                            result.push(pair);
                        }
                    }
                }
            }
        }

        return Array.from(result);
    }
}
