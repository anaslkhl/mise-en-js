const words = ["apple", "banana", "kiwi", "mango", "orange", "avocado", "apricot", "banana"]

// ch1: return the longest word
// ch2: return the index of the longest word
// ch3: return the shortest word
// ch4: return true if the array contains the word "apple" else return false
// ch5: return true if the array is sorted in alphabetical order else return false
// ch6: return the array with the first letter of each word capitalized
// ch7: return the array with the last letter of each word capitalized
// ch8: return the array with the words sorted in alphabetical order
// ch9: return the array with the words sorted in reverse alphabetical order
// ch10: remove all the words that contain the letter "a" from the array
// ch11: return each word with the number of its characters
// ch12: return each word with the number of repetitions
// ch13: return array of all the words repeated more than once
// ch14: return array of all the words not repeated
// ch15: return the word that appears most frequently
// ch16: return the word that appears least frequently
// ch17: return the array with the words sorted by length




function longestWord(arr)
{

    let longest = arr[0];

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].length > longest.length){

            longest = arr[i];

        }
    
    }
    return longest;
}

console.log(longestWord(words));


function getLongIndex(arr){

    // let longest = arr[0];
    let longIndex = 0;

    for(let i = 0; i < arr.length - 1;i++){

        if(arr[i].length < arr[longIndex].length){
            longIndex = i;
        }
    }
    return longIndex;
}

console.log(getLongIndex(words));


function IsIn(arr, word){

    for(let i = 0; i < arr.length;i++){
        if(arr.includes(word)){
            return true;
        }
        else{
            return false
        }
    }
}
console.log(IsIn(words, 'apple'));


function cpitalizeFirstLetter(arr){

    for(let i = 0; i < arr.length;i++){

        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr;
}
console.log(cpitalizeFirstLetter(words));


function cpitalizeLaststLetter(arr){

    for(let i = 0; i < arr.length;i++){

        arr[i] = arr[i][arr[i].length].toUpperCase() + arr[i].slice(1);
    }
    return arr;
}
console.log(cpitalizeLaststLetter(words));