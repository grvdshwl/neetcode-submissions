class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const m = t.length;
        const n = s.length;
        if(n<m){
            return ""
        }

        if (m > n) {
            return false;
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

        let minWindow = "";

        let minLength = Infinity;

        while (right < n) {
            const char = s[right];
            window[char] = (window[char] || 0) + 1;

            if (window[char] === charMap[char]) {
                have++;
            }

            while (have === needed) {
                if (right - left + 1 < minLength) {
                    minLength = Math.min(minLength, right - left + 1);
                    minWindow = s.slice(left, right + 1);
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

        return minWindow;
    }
}
