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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) {
            return [];
        }

        let queue = [root];

        const result = [];

        while (queue.length) {
            let i = queue.length;
            const sublist = [];

            while (i > 0) {
                const node = queue[0];
                sublist.push(node.val);

                if (node.left) {
                    queue.push(node.left);
                }

                if (node.right) {
                    queue.push(node.right);
                }
                queue.shift();
                i--;
            }

            result.push(sublist);
        }

        return result;
    }
}
