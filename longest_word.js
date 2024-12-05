/*
Find the Longest Word in a Sentence
Objective:
To create a program that finds the longest word in a given sentence.

Program Explanation:
The program splits the sentence into words and iterates through them, 
comparing their lengths to find the longest word. If two words have the same length, 
the program returns the first one it encounters.

Output:
The program outputs the longest word in the sentence.
*/

function longest_word(string){
    var max = 0;
    var long_str = ""
    string_arr = string.split(" ");
    string_arr.forEach(word => {
        if(word.length > max){
            long_str = word;
            max = word.length;
        }
    });
    return long_str;
}

var str = "This is string and it is very beautiful niceeeee";
var str1 = ""
console.log(longest_word(str));
console.log(longest_word(str1));
