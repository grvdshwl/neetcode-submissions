class Solution {
    kthSmallest(root, k) {
        let ans;

        function inorder(node) {
            if (!node ) return;

            inorder(node.left);

            k--;

            if (k === 0) {
                ans = node.val;
                return;
            }

            inorder(node.right);
        }

        inorder(root);
        return ans;
    }
}