/*
Capitalize the First Letter of Each Word
Objective:
To write a program that capitalizes the first letter of each word in a given sentence.

Program Explanation:
The program splits the sentence into individual words, capitalizes the first letter of each word, and rejoins them to form the updated sentence.

Output:
The program outputs the modified sentence with each word’s first letter capitalized.
*/

function capitalized(string){
    string_arr = string.split(" ");
    let i = 0;
    while(i < string_arr.length){
        string_arr[i] = string_arr[i][0].toUpperCase() + string_arr[i].slice(1);
        i++;
    }
    return string_arr.join(" ");
}

str = "hello world we will be back soon";
console.log(capitalized(str));