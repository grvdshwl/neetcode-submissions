class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const n = s.length;

        if (n % 2 === 1) {
            return false;
        }

        //* Define a map with open and close bracket
        const bracketsMap = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        //* declare a stack
        const stack = [];

        //* Iterate through the string and push to stack if open
        //* if closed pop and compare if brackets do not match
        //* return false

        for (let i = 0; i < n; i++) {
            const bracket = s[i];

            if (bracketsMap[bracket]) {
                const openBracket = stack.pop();
                if (openBracket !== bracketsMap[bracket]) {
                    return false;
                }
            } else {
                stack.push(bracket);
            }
        }

        //* In the end if stack is empty return true else false
        return stack.length===0
    }
}
