
function bin_search(arr, low, high, key) {

    if (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == key) {
            return true;
        }
        else if (arr[mid] < key) {
            return bin_search(arr, mid + 1, high, key);
        }
        else {
            return bin_search(arr, low, mid - 1, key);
        }
    }
    else
    {
        return false;
    }
}

console.log(bin_search([1, 2, 3, 4, 5, 6, 8], 0, 7, 7))