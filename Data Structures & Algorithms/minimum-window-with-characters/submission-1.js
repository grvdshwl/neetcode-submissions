class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const m = t.length;
        const n = s.length;

        if (n < m) {
            return "";
        }

        const charMap = {};

        for (let i = 0; i < m; i++) {
            const char = t[i];
            charMap[char] = (charMap[char] || 0) + 1;
        }

        const needed = Object.keys(charMap).length;

        const window = {};

        let have = 0;
        let left = 0;
        let right = 0;

        let start = 0;
        let minLength = Infinity;

        while (right < n) {
            const char = s[right];
            window[char] = (window[char] || 0) + 1;

            if (window[char] === charMap[char]) {
                have++;
            }

            while (have === needed) {
                const windowLength = right - left + 1;

                if (windowLength < minLength) {
                    minLength = windowLength;
                    start = left;
                }

                const leftChar = s[left];
                window[leftChar]--;

                if (charMap[leftChar] && window[leftChar] < charMap[leftChar]) {
                    have--;
                }

                left++;
            }

            right++;
        }

        return minLength === Infinity
            ? ""
            : s.slice(start, start + minLength);
    }
}