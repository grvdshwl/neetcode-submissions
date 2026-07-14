class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //* Two Pointer O(n) Time Complexity

        //* clean the string from non alphanumeric string

        const cleanedString = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

        let left =0;
        let right = cleanedString.length-1;

        while(left<right){
            if(cleanedString[left]!==cleanedString[right]){
                return false
            }

            left++
            right--
        }
        
        return true

    }
}
