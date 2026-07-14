class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        //* Two Pointer

        //* Define Left and right pointer
        let left = 0
        let right = numbers.length-1

        //* If target is less the sum left++ else right--

        while(left<right){
            const sum = numbers[left] + numbers[right]

            if(sum===target){
                return [left+1,right+1]
            }else if(sum<target){
                left++
            }else{
                right--
            }
        }

        //* return index +1

    }
}
