// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s) {
    // Initialize a map to store the last occurrence index of characters
    const charIndexMap = new Map();
    let maxLength = 0;
    let start = 0; // The starting index of the current window

    // Iterate through the string
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // If the character is already in the map and its index is greater than or equal to the start of the window
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            // Move the start to the right of the last occurrence of the current character
            start = charIndexMap.get(currentChar) + 1;
        }

        // Update the last occurrence of the current character
        charIndexMap.set(currentChar, end);

        // Calculate the length of the current window and update maxLength if needed
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
