class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    minEatingSpeed(piles, h) {
        let left = 0;
        let right = Math.max(...piles);

        let min = right;

        function canFinishEating(speed) {
            let currentTime = 0;

            for (let pile of piles) {
                const timeTaken = Math.ceil(pile / speed);
                currentTime += timeTaken;
            }
            return currentTime <= h;
        }

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (canFinishEating(mid)) {
                right = mid - 1;
                min = mid;
            } else {
                left = mid + 1;
            }
        }
        return min;
    }
}
