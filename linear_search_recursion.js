//linear Search Using Recursion
function linear_search(arr,key,index){
    //base case
    if(index == arr.length){
        return false;
    }
    if(arr[index] == key){
        return true;
    }
    else{
        return linear_search(arr,key,index+1);
    }
}

var arr = [2,3,4,5,7,8];
console.log(linear_search(arr,7,0));