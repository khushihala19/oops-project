class StringManipulator {
  cleanString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  }
}

class PalindromeChecker extends StringManipulator {
  isPalindrome(str) {
    const cleanedStr = this.cleanString(str);
    return cleanedStr === cleanedStr.split("").reverse().join("");
  }
}

const palindromeChecker = new PalindromeChecker();

console.log(palindromeChecker.isPalindrome("Madam")); 
console.log(palindromeChecker.isPalindrome("Hello")); 
console.log(palindromeChecker.isPalindrome("A man, a plan, a canal: Panama")); 
console.log(palindromeChecker.isPalindrome("Not a palindrome")); 