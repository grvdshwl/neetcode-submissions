/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

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

            const left = dfs(node.left);
            const right = dfs(node.right);
            const sum = left + right + node.val;
            max = Math.max(max, sum, node.val, node.val + left, node.val + right);

            return Math.max(node.val + left, node.val + right,node.val);
        }

        dfs(root);

        return max;
    }
}
