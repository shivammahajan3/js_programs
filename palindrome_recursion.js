//Palindrome function using recursion

function palindrome(string, index)
{
    if(string.length<=0)
    {
        return false;
    }
    if(index < string.length/2)
    {
        if(string[index] != string[string.length-1 - index])
        {
            return false;
        }
        else
        {
            palindrome(string, index+1);
        }
    }
    return true;
}

console.log(palindrome("HELLO",0))