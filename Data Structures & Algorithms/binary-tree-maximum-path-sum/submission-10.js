class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let max = -Infinity;

        function dfs(node) {
            if (!node) {
                return 0;
            }

            const left = Math.max(0, dfs(node.left));
            const right = Math.max(0, dfs(node.right));

            const sum = left + right + node.val;
            max = Math.max(max, sum);

            return node.val + Math.max(left, right);
        }

        dfs(root);

        return max;
    }
}