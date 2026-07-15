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

        function inorder(root) {
            if (!root) {
                return null;
            }

            const left = inorder(root.left);
            if(left){
                return left
            }

            k--

            if(k===0){
                return root.val
            }

           const right = inorder(root.right);
           if(right){
                return right
            }
        }

        return inorder(root);
    }
}
