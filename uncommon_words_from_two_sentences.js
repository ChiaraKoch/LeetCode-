// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

 

// Example 1:

// Input: s1 = "this apple is sweet", s2 = "this apple is sour"

// Output: ["sweet","sour"]

// Explanation:

// The word "sweet" appears only in s1, while the word "sour" appears only in s2.

// Example 2:

// Input: s1 = "apple apple", s2 = "banana"

// Output: ["banana"]

 

// Constraints:

// 1 <= s1.length, s2.length <= 200
// s1 and s2 consist of lowercase English letters and spaces.
// s1 and s2 do not have leading or trailing spaces.
// All the words in s1 and s2 are separated by a single space.

var uncommonFromSentences = function(s1, s2) {
    // Split both sentences into arrays of words
    let words1 = s1.split(' '); // words from the first sentence
    let words2 = s2.split(' '); // words from the second sentence

    // Create a map to count word occurrences
    let wordCount = {};

    // Count occurrences of each word from both sentences
    for (let word of words1) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    for (let word of words2) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    // Collect words that appear exactly once
    let result = [];
    for (let word in wordCount) {
        if (wordCount[word] === 1) {
            result.push(word);
        }
    }

    // Return the result
    return result;
};

// Example usage:
let s1 = "this apple is sweet";
let s2 = "this apple is sour";
console.log(uncommonFromSentences(s1, s2)); // Output: ["sweet", "sour"]

let s3 = "apple apple";
let s4 = "banana";
console.log(uncommonFromSentences(s3, s4)); // Output: ["banana"]




