class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;

        const stack = [];
        let maxArea = 0;

        for (let i = 0; i < n; i++) {
            const height = heights[i];
            let index = i;

            while (stack.length && height < stack.at(-1)[1]) {
                const [prevIndex, prevHeight] = stack.pop();
                const height = prevHeight;
                const width = i - prevIndex;
                const area = height * width;
                maxArea = Math.max(area, maxArea);
                index = prevIndex;
            }

            stack.push([index, height]);
        }

        while (stack.length) {
            const [index, height] = stack.pop();
            const width = n - index;
            const area = height * width;
            maxArea = Math.max(area, maxArea);
        }

        return maxArea;
    }
}
