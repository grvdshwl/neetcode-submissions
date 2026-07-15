class Solution {
    kthSmallest(root, k) {
        function inorder(node) {
            if (!node) return undefined;

            const left = inorder(node.left);
            if (left !== undefined) return left;

            k--;

            if (k === 0) return node.val;

            const right = inorder(node.right);
            if (right !== undefined) return right;

            return undefined;
        }

        return inorder(root);
    }
}