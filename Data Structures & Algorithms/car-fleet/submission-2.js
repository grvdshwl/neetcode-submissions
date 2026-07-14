class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        //* |---- car1 ----- car2 -------- car3 --------|
        const n = position.length;
        //* [3,3,4.5,10]

        //*(position,distance)
        const pairs = [];

        for (let i = 0; i < n; i++) {
            pairs.push([position[i], speed[i]]);
        }

        pairs.sort((a, b) => b[0] - a[0]);

        const stack = [];

        for (let pair of pairs) {
            const [position, speed] = pair;

            const timeToComplete = (target - position) / speed;

            if (stack.length === 0 || timeToComplete > stack[stack.length - 1]) {
                stack.push(timeToComplete);
            }
        }

        return stack.length;
    }
}
