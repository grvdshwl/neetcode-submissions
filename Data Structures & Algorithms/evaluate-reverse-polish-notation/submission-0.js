class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const n = tokens.length;
        const operators = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };

        const stack = [];

        for (let i = 0; i < n; i++) {
            const token = tokens[i];

            if (operators[token]) {
                const b = stack.pop();
                const a = stack.pop();

                const callback = operators[token];

                const value = callback(a, b);

                stack.push(value);
            } else {
                stack.push(Number(token));
            }
        }

        return stack[0]
    }
}
