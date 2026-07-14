class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const n = s.length;
        let left = 0;
        let right = 0;

        const set = new Set();

        let maxLength = 0;

        while (right < n) {
            const char = s[right];

            while(set.has(char)){
                const leftChar = s[left]
                set.delete(leftChar)
                left++
            }

            maxLength = Math.max(maxLength, right - left + 1);
            set.add(char);
            right++;
        }

        return maxLength
    }
}
