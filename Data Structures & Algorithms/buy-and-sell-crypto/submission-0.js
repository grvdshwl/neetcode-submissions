class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;//*6

        let maxProfit = 0;

        let minPrice = prices[0];//*10
        //*[10,1,5,6,7,1]

        for (let i = 1; i < n; i++) {
            const price = prices[i];

            if (price < minPrice) {
                minPrice = price;
            } else {
                const profit = price - minPrice;
                maxProfit = Math.max(maxProfit, profit);
            }
        }

        return maxProfit
    }
}
