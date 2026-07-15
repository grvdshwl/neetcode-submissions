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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        function dfs(preorder, inorder) {
            if (!preorder.length || !inorder.length) {
                return null;
            }
            const value = preorder[0];
            const index = inorder.indexOf(value);

            const node = new TreeNode(value);
            node.left = dfs(preorder.slice(1, index + 1), inorder.slice(0, index));
            node.right = dfs(preorder.slice(index + 1), inorder.slice(index + 1));

            return node;
        }

        return dfs(preorder, inorder);
    }
}
