

function arraySum(arr)
{
    let n = 0;
    for(let i = 0; i< arr.length;i++)
    {
        n += arr[i];
    }
    return n;
}



function findLargest(arr)
{

    let max = arr[0];
    for(let i = 0; i<arr.length; i++)
    {
        if(arr[i] >= max){
            max = arr[i]
        }
    }
    return max;
}


console.log(findLargest([1,2,9,4,5]));
