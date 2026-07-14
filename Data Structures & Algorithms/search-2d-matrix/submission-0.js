class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const n = matrix.length;
        const m = matrix[0].length;

        let left = 0;
        let right = m * n - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            const r = Math.floor(mid / m);
            const c = mid % m;

            const num = matrix[r][c];

            if (num === target) {
                return true;
            } else if (num < target) {
                left++;
            } else {
                right--;
            }
        }

        return false
    }
}
