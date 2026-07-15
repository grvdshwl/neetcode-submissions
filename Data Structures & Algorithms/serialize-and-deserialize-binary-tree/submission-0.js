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

class Codec {
    serialize(root) {
        const result = [];

        function dfs(node) {
            if (!node) {
                result.push("N");
            } else {
                result.push(node.val);
                dfs(node.left);
                dfs(node.right);
            }
        }

        dfs(root);
        return result.join(",");
    }

    deserialize(data) {
        const values = data.split(",");

        function dfs() {
            const value = values.shift();

            if (value === "N") {
                return null;
            }

            const node = new TreeNode(Number(value));
            node.left = dfs();
            node.right = dfs();

            return node;
        }

        return dfs();
    }
}