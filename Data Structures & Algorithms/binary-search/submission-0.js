class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n = nums.length;

        let left = 0;
        let right = n-1;

        while(left<=right){
            const mid = Math.floor((left+right)/2);

            const num = nums[mid]

            if(num===target){
                return mid
            }else if (num<target){
                left++
            }else{
                right--
            }
        }

        return -1
    }
}
