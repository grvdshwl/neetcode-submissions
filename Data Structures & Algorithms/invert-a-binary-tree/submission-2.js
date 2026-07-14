class Solution {
    invertTree(root) {
        if (!root) return null;

        const temp = root.left;
        root.left = root.right;
        root.right = temp;

        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}