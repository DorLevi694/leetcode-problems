`
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
`;

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  aInteger = "a".charCodeAt(0);
  if (ransomNote.length > magazine.length) {
    return false;
  }

  let array = new Array(26).fill(0);
  for (let i = 0; i < magazine.length; i++) {
    array[magazine[i].charCodeAt(0) - aInteger]++;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    array[ransomNote[i].charCodeAt(0) - aInteger]--;

    if (array[ransomNote[i].charCodeAt(0) - aInteger] < 0) {
      return false;
    }
  }
  return true;
};

console.log(canConstruct((ransomNote = "aa"), (magazine = "ab")));
