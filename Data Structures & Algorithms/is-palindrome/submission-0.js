class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //* Bruteforce O(n) Time Complexity

        //* clean the string from non alphanumeric string

        const cleanedString = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
        console.log("cleanedString",cleanedString)

         //* reverse and compare

        const reversedString = cleanedString.split("").reverse().join("")


        return cleanedString === reversedString

    }
}
