/*
Find Duplicate Elements in an Array
Objective:
To create a program that identifies duplicate elements in an array.

Program Explanation:
The program uses a Set to track unique elements and another Set to store duplicates.
 By iterating through the array, 
 it adds duplicates to the second set when an element has already been seen.

Output:
The program outputs an array of all duplicate elements.
*/

function find_duplicate(arr){
    var duplicate_arr = [];
    let freq = {}
    for (let num of arr) {
        if (freq[num]) {
            freq[num] += 1;
        } else {
            freq[num] = 1; 
        }
    }

    for (let num in freq) {
        if (freq[num] > 1) {
            for(let i=1; i <= freq[num]; i++){
                duplicate_arr.push(parseInt(num));
            }
        }
    }
    return duplicate_arr;
}

var arr = [2,1,3,5,6,8,10,87,2,2,3,4]
console.log(find_duplicate(arr))