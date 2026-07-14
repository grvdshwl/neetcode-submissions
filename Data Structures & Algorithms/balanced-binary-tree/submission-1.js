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
        function dfs(root) {
            if (!root) {
                return [true, 0];
            }

            const [leftBalanced, leftHeight] = dfs(root.left);
            const [rightBalanced, rightHeight] = dfs(root.right);

            if (!leftBalanced) {
                return [false, 0];
            } else if (!rightBalanced) {
                return [false, 0];
            } else if (Math.abs(leftHeight - rightHeight) > 1) {
                return [false, 0];
            }

            const height = 1 + Math.max(leftHeight, rightHeight);

            return [true, height];
        }

        return dfs(root)[0];
    }
}
