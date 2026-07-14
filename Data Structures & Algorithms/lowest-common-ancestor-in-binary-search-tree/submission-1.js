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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        function dfs(root, p, q) {
            if (!root) {
                return [false, false, root];
            }

            const left = dfs(root.left, p, q);
            if (left[0] && left[1]) {
                return left;
            }
            const right = dfs(root.right, p, q);

            if (right[0] && right[1]) {
                return right;
            }

            const hasP = root.val === p.val || left[0] || right[0];
            const hasQ = root.val === q.val || left[1] || right[1];

            return [hasP, hasQ, root];
        }

        return dfs(root, p, q)[2];
    }
}
