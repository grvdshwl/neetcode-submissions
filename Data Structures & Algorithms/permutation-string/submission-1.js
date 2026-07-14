class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const m = s1.length;
        const n = s2.length;

        const charMap = {};

        for (let i = 0; i < m; i++) {
            const char = s1[i];
            charMap[char] = (charMap[char] || 0) + 1;
        }

        const needed = Object.keys(charMap).length;

        let have = 0;
        let window = {};

        let left = 0;
        let right = 0;

        while (right < n) {
            const char = s2[right];
            window[char] = (window[char] || 0) + 1;

            if (window[char] === charMap[char]) {
                have++;
            }

            while (have === needed) {
                if (right - left + 1 === m) {
                    return true;
                }
                const leftChar = s2[left];
                window[leftChar] -= 1;

                if (charMap[leftChar] && window[leftChar] < charMap[leftChar]) {
                    have--;
                }



                left++;
            }

            right++;
        }

        return false;
    }
}
