class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        const leftMax = Array.from({ length: n }, () => 0);
        const rightMax = Array.from({ length: n }, () => 0);

        let maxArea = 0;

        for (let i = 0; i < n; i++) {
            const currenHeight = height[i];
            leftMax[i] = Math.max(leftMax[i-1]||0, currenHeight);
        }

        for (let i = n - 1; i >= 0; i--) {
            const currenHeight = height[i];
            rightMax[i] = Math.max(rightMax[i+1]||0, currenHeight);
        }



        for (let i = 0; i < n; i++) {
            const currenHeight = height[i];

            const area = Math.min(rightMax[i], leftMax[i]) - currenHeight;

            if (area > 0) {
                maxArea += area;
            }
        }

        return maxArea;
    }
}
