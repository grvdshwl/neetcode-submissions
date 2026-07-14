class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const n = s.length;

        const countMap = {};

        let left = 0;
        let right = 0;
        let maxFrequency = 0;
        let maxLength = 0;

        while (right < n) {
            const char = s[right];

            countMap[char] = (countMap[char] || 0) + 1;

            maxFrequency = Math.max(maxFrequency, countMap[char]);

            while ((right - left + 1) - maxFrequency > k) {
                const leftChar = s[left];
                countMap[leftChar]--;
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);

            right++;
        }

        return maxLength;
    }
}