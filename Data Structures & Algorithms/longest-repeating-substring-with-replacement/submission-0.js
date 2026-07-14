class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const n = s.length;

        const map = {};

        let left = 0;
        let right = 0;
        let maxCounter = 0;
        let maxLength = 0;

        while (right < n) {
            const char = s[right];

            if (map[char] === undefined) {
                map[char] = 0;
            }

            map[char] += 1;

            maxCounter = Math.max(maxCounter, map[char]);

            if (right - left + 1 - maxCounter > k) {
                const leftChar = s[left];
                map[leftChar] -= 1;
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
            right++
        }

        return maxLength;
    }
}
