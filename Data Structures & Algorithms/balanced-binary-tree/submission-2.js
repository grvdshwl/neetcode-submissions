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
     * @return {boolean}
     */
    isBalanced(root) {
        function dfs(node) {
            if (!node) {
                return [true, 0];
            }

            const [leftBalanced, leftHeight] = dfs(node.left);
            const [rightBalanced, rightHeight] = dfs(node.right);

            const balanced =
                leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1;

            const height = 1 + Math.max(leftHeight, rightHeight);

            return [balanced, height];
        }

        return dfs(root)[0];
    }
}
