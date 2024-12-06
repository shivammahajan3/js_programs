function find_element(arr,key,index=0){
    key = Math.ceil(key)
    //base case
    if(arr[index] > key){
        return arr[index];
    }
    else if(index > arr.length){
        return -1;
    }
    else{
        return find_element(arr,key,index+1);
    }
}

var arr = [2,5,16,18,22,30,40,50];
console.log(find_element(arr,12));