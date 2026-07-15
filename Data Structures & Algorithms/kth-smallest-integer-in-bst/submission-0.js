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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        //* kth Smallest Integer

        //* preorder traversal will give sorted array
        const sorted = [];

        function inorder(root) {
            if (!root) {
                return;
            }

            inorder(root.left);
            sorted.push(root.val);
            inorder(root.right);
        }

        inorder(root);

        //* then we can return index +1

        console.log(sorted) 

        return sorted[k-1]
    }
}
