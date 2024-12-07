// maximum number
function findMaximum(arr) {
    if (arr.length === 0) return null;
    return Math.max(...arr);
}
console.log(findMaximum([3, 5, 7, 2, 8]));

// duplicate
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// reverse
function reverseArray(arr) {
    return arr.slice().reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5])); 

// sec largest
function findSecondLargest(arr) {
    if (arr.length < 2) return null;
    let uniqueElements = [...new Set(arr)];
    uniqueElements.sort((a, b) => b - a);
    return uniqueElements[1] || null;
}
console.log(findSecondLargest([1, 3, 4, 5, 0, 2, 4]));

// subset
function isSubset(arr1, arr2) {
    return arr1.every(element => arr2.includes(element));
}
console.log(isSubset([1, 2], [1, 2, 3, 4]));
console.log(isSubset([1, 6], [1, 2, 3, 4])); 

// reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); 

// palindrome
function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
}
console.log(isPalindrome("world")); 
console.log(isPalindrome("hello"));   


// vowel
function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}
console.log(countVowels("hello world")); 

// longest word
function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord("The baby boy feels very tired in the park")); 

// anagram
function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
    return normalize(str1) === normalize(str2);
}
console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("hello", "world"));  

// variable
function isArray(variable) {
    return Array.isArray(variable);
}
console.log(isArray([1, 2, 3])); 
console.log(isArray("hello"));  


// string to number
function stringToNumber(str) {
    return Number(str);
}
console.log(stringToNumber("123")); 
console.log(stringToNumber("abc")); 

// integer
function isInteger(num) {
    return Number.isInteger(num);
}
console.log(isInteger(123));   
console.log(isInteger(123.45));

// data type
function getDataType(variable) {
    return typeof variable;
}
console.log(getDataType(123));       
console.log(getDataType("hello"));   
console.log(getDataType([1, 2, 3])); 
console.log(getDataType(null));   

// null or defined
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
console.log(isNullOrUndefined(null));        
console.log(isNullOrUndefined(undefined));  
console.log(isNullOrUndefined("hello"));     

// swap
function swapNumbers(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
let result = swapNumbers(5, 10);
console.log(result); 

// even or odd
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(isEvenOrOdd(4)); 
console.log(isEvenOrOdd(7)); 

// square
function findSquare(num) {
    return num * num;
}
console.log(findSquare(5)); 
console.log(findSquare(4));

//ternary
function checkAge(age) {
    return age >= 18 ? "Adult" : "child";
}
console.log(checkAge(20)); 
console.log(checkAge(16)); 

// divisible
function isDivisible(num1, num2) {
    return num2 !== 0 && num1 % num2 === 0 ? true : false;
}
console.log(isDivisible(10, 2)); 
console.log(isDivisible(10, 3)); 
console.log(isDivisible(10, 0)); 

// sum
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); 

// nested
function flattenArray(arr) {
    return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, [4]], 5]])); 

// element frequency
function elementFrequency(arr) {
    return arr.reduce((freq, elem) => {
        freq[elem] = (freq[elem] || 0) + 1;
        return freq;
    }, {});
}
console.log(elementFrequency([1, 2, 2, 3, 3, 3])); 

// only digits
function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
}
console.log(containsOnlyDigits("12345")); 
console.log(containsOnlyDigits("123a5")); 

// first letter
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}
console.log(capitalizeWords("hi am robot you can play with me.")); 

// intersection
function findIntersection(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}
console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));

// lengthstring
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["apple", "berry", "banana", "gauva"]));

// factorial
function factorial(num) {
    if (num < 0) return "Invalid input";
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(5)); 
console.log(factorial(0)); 

// 2 sort array
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); 

// falsy
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}
console.log(removeFalsyValues([0, 1, false, 2, '', 3, null, undefined, NaN])); 








