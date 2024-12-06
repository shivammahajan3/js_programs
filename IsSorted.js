function IsSorted(arr,index){
    //base case
    if(arr.length == index){
        return true;
    }
    if(arr[index] > arr[index+1]){
        return false;
    }
    else{
        return IsSorted(arr, index+1);
    }
}

console.log(IsSorted([1,2,2,5,5,7,8,9], 0));
