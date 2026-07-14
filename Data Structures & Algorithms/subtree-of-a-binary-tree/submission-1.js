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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) return true;
        if (!root) return false;
        const dfs = (root) => {
            if (!root) return false;

            if (this.isSameTree(root, subRoot)) {
                return true;
            }

            return dfs(root.left) || dfs(root.right);
        };

        return dfs(root);
    }

    isSameTree(p, q) {
        function dfs(p, q) {
            if (!p && !q) return true;
            if (!p || !q) return false;
            if (p.val !== q.val) return false;

            return dfs(p.left, q.left) && dfs(p.right, q.right);
        }

        return dfs(p, q);
    }
}
