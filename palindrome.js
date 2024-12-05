/* 
Check if a String is a Palindrome
Objective:
To create a program that checks whether a given string is a palindrome.

Program Explanation:
The program removes non-alphanumeric characters and converts the string to lowercase. It then compares the cleaned string with its reverse to determine if it is a palindrome.

Output:
The program outputs true if the string is a palindrome and false otherwise.
*/

function IsPlaindrome(string){
    let rev_string = string.split('').reverse().join('')
    if(string == rev_string){
        return true;
    }
    return false;
}

var str = "Nice";
var str1 = "madam";

console.log(IsPlaindrome(str));
console.log(IsPlaindrome(str1));

