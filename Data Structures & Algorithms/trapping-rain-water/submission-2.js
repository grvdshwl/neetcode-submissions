class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        if (n === 0) return 0;

        const leftMax = new Array(n).fill(0);
        const rightMax = new Array(n).fill(0);

        // Build left max array
        leftMax[0] = height[0];
        for (let i = 1; i < n; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], height[i]);
        }

        // Build right max array
        rightMax[n - 1] = height[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            rightMax[i] = Math.max(rightMax[i + 1], height[i]);
        }

        // Calculate trapped water
        let trappedWater = 0;

        for (let i = 0; i < n; i++) {
            trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i];
        }

        return trappedWater;
    }
}