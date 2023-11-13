import $ from 'jquery';
import sum from './utils/sum/sum';

console.log('Ready for coding');

console.log('Body jQuery node:', $('body'));
console.log('Body javascript node:', document.querySelector('body'));
console.log('2 + 3 =', sum(2, 3));



// task 1
// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result

// myFunction(1,2)
// Expected
// 3

// myFunction(1,10)
// Expected
// 11

// myFunction(99,1)
// Expected
// 100

// ANSWER
function myFunction(k: number, j: number) {
    return k + j;
}
console.log('count(1, 2) =', myFunction(1, 2));
console.log('count(1, 10) =', myFunction(1, 10));
console.log('count(99, 1) =', myFunction(99, 1));

// task 2
// Write a function that takes a value as argument
// Return the type of the value

// myFunction(1)
// Expected
// 'number'

// myFunction(false)
// Expected
// 'boolean'

// myFunction({})
// Expected
// 'object'

// myFunction(null)
// Expected
// 'object'

// myFunction('string')
// Expected
// 'string'

// myFunction(['array'])
// Expected
// 'object'

// ANSWER

function getType(value: any): string {
    if (Array.isArray(value)) {
        return 'array';
    }
    return typeof value;
}

console.log(getType(1));           
console.log(getType(false));      
console.log(getType({}));          
console.log(getType(null));        
console.log(getType('string'));    
console.log(getType(['array']));


// task 3
// myFunction(2, 3)
// Expected
// false 

// myFunction(3, 3)
// Expected
// true 

// myFunction(1, '1')
// Expected
// false 

// myFunction('10', '10')
// Expected
// true

// ANSWER

function myFunction3(a: any, b: any): boolean {
    return a === b;
}


console.log(myFunction3(2, 3));      
console.log(myFunction3(3, 3));      
console.log(myFunction3(1, '1'));    
console.log(myFunction3('10', '10')); 

// task 4

// Write a function that takes a string (a) and a number (n) as arguments
// Return the nth character of 'a'

// myFunction('abcd',1)
// Expected
// 'a'

// myFunction('zyxbwpl',5)
// Expected
// 'w'

// myFunction('gfedcba',3)
// Expected
// 'e'
 
// ANSWER


function getNthCharacter(a: string, n: number): string {
    // Check if the requested index is within the string's range
    if (n > 0 && n <= a.length) {
        return a[n - 1];
    } else {
        return ''; // Return an empty string if the index is out of range
    }
}

// Test
console.log(getNthCharacter('abcd', 1));    
console.log(getNthCharacter('zyxbwpl', 5)); 
console.log(getNthCharacter('gfedcba', 3)); 

// task 5

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

// myFunction('abcdefg')
// Expected
// 'defg'

// myFunction('1234')
// Expected
// '4'

// myFunction('fgedcba')
// Expected
// 'dcba'

// ANSWER

function removeFirstThreeCharacters(a: string): string {
    return a.substring(3);
}


console.log(removeFirstThreeCharacters('abcdefg')); 
console.log(removeFirstThreeCharacters('1234'));    
console.log(removeFirstThreeCharacters('fgedcba')); 

// task 6

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

// myFunction('abcdefg')
// Expected
// 'efg'

// myFunction('1234')
// Expected
// '234'

// myFunction('fgedcba')
// Expected
// 'cba'

// ANSWER

function getLastThreeCharacters(str: string): string {
    return str.slice(-3);
}


console.log(getLastThreeCharacters('abcdefg')); 
console.log(getLastThreeCharacters('1234'));    
console.log(getLastThreeCharacters('fgedcba')); 


// task 7

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

// myFunction('abcdefg')
// Expected
// 'abc'

// myFunction('1234')
// Expected
// '123'

// myFunction('fgedcba')
// Expected
// 'fge'


function getFirstThreeCharacters(a: string): string {
    return a.substring(0, 3);
}


console.log(getFirstThreeCharacters('abcdefg')); 
console.log(getFirstThreeCharacters('1234'));    
console.log(getFirstThreeCharacters('fgedcba')); 

// task 8

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

// myFunction('abcdefgh')
// Expected
// 'abcd'

// myFunction('1234')
// Expected
// '12'

// myFunction('gedcba')
// Expected
// 'ged'

// ANSWER

function getFirstHalf(a: string): string {
    const halfLength = Math.floor(a.length / 2);
    return a.substring(0, halfLength);
}


console.log(getFirstHalf('abcdefgh')); 
console.log(getFirstHalf('1234'));     
console.log(getFirstHalf('gedcba'));  

// task 9
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

// myFunction('abcdefg')
// Expected
// 'abcd'

// myFunction('1234')
// Expected
// '1'

// myFunction('fgedcba')
// Expected
// 'fged'

function removeLastThreeCharacters(a: string): string {
    return a.slice(0, -3);
}


console.log(removeLastThreeCharacters('abcdefg')); 
console.log(removeLastThreeCharacters('1234'));    
console.log(removeLastThreeCharacters('fgedcba')); 

// task 10

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a

// myFunction(100,50)
// Expected
// 50

// myFunction(10,1)
// Expected
// 0.1

// myFunction(500,25)
// Expected
// 125


function calculatePercentage(a: number, b: number): number {
    return (a * b) / 100;
}


console.log(calculatePercentage(100, 50)); 
console.log(calculatePercentage(10, 1));   
console.log(calculatePercentage(500, 25)); 

// task 11

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tip: mind the order

// myFunction(6,5,4,3,2,1)
// Expected
// 10.5

// myFunction(6,2,1,4,2,3)
// Expected
// 2744

// myFunction(2,3,6,4,2,3)
// Expected
// -8

// ANSWER

function complexArithmetic(a: number, b: number, c: number, d: number, e: number, f: number): number {
    let result = a + b;
    result -= c;
    result *= d;
    result /= e;
    result = Math.pow(result, f);
    return result;
}


console.log(complexArithmetic(6, 5, 4, 3, 2, 1)); 
console.log(complexArithmetic(6, 2, 1, 4, 2, 3)); 
console.log(complexArithmetic(2, 3, 6, 4, 2, 3));

// task 12  

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false

// myFunction(10)
// Expected
// true

// myFunction(-4)
// Expected
// true

// myFunction(5)
// Expected
// false

// myFunction(-111)
// Expected
// false

function isEven(num: number): boolean {
    return num % 2 === 0;
}


console.log(isEven(10));    
console.log(isEven(-4));    
console.log(isEven(5));     
console.log(isEven(-111));  

// task 13

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b


// myFunction('m', 'how many times does the character occur in this sentence?')
// Expected
// 2

// myFunction('h', 'how many times does the character occur in this sentence?')
// Expected
// 4

// myFunction('?', 'how many times does the character occur in this sentence?')
// Expected
// 1

// myFunction('z', 'how many times does the character occur in this sentence?')
// Expected
// 0

// ANSWER

function countOccurrences(a: string, b: string): number {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] === a) {
            count++;
        }
    }
    return count;
}


console.log(countOccurrences('m', 'how many times does the character occur in this sentence?'));
console.log(countOccurrences('h', 'how many times does the character occur in this sentence?'));
console.log(countOccurrences('?', 'how many times does the character occur in this sentence?'));
console.log(countOccurrences('z', 'how many times does the character occur in this sentence?'));

// task 14  

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

// myFunction(4)
// Expected
// true 

// myFunction(1.123)
// Expected
// false 

// myFunction(1048)
// Expected
// true 

// myFunction(10.48)
// Expected
// false

function isWholeNumber(a: number): boolean {
    return a % 1 === 0;
}


console.log(isWholeNumber(4));    
console.log(isWholeNumber(1.123));
console.log(isWholeNumber(1048)); 
console.log(isWholeNumber(10.48));

// task 15

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value

// myFunction(10, 100)
// Expected
// 0.1

// myFunction(90, 45)
// Expected
// 4050

// myFunction(8, 20)
// Expected
// 0.4

// myFunction(2, 0.5)
// Expected
// 1

// ANSWER


function calculateResult(a: number, b: number): number {
    if (a < b) {
        return a / b;
    } else {
        return a * b;
    }
}

// Test
console.log(calculateResult(10, 100)); 
console.log(calculateResult(90, 45));  
console.log(calculateResult(8, 20));   
console.log(calculateResult(2, 0.5));  


// task 16

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

// myFunction('cheese', 'cake')
// Expected
// 'cheesecake'

// myFunction('lips', 's')
// Expected
// 'slips'

// myFunction('Java', 'script')
// Expected
// 'Javascript'

// myFunction(' think, therefore I am', 'I')
// Expected
// 'I think, therefore I am'

// ANSWER

function appendStrings(a: string, b: string): string {
    if (a.includes(b)) {
        return b + a;
    } else {
        return a + b;
    }
}

// Test
console.log(appendStrings('cheese', 'cake'));            
console.log(appendStrings('lips', 's'));                
console.log(appendStrings('Java', 'script'));            
console.log(appendStrings(' think, therefore I am', 'I'));

// task 17

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

// myFunction(2.12397)
// Expected
// 2.12

// myFunction(3.136)
// Expected
// 3.14

// myFunction(1.12397)
// Expected
// 1.12

// myFunction(26.1379)
// Expected
// 26.14

// ANSWER

function roundToSecondDecimal(a: number): number {
    return parseFloat(a.toFixed(2));
}


console.log(roundToSecondDecimal(2.12397)); 
console.log(roundToSecondDecimal(3.136));   
console.log(roundToSecondDecimal(1.12397)); 
console.log(roundToSecondDecimal(26.1379)); 

// task 18

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tip: you might want to change the type of the number for the splitting

// myFunction(10)
// Expected
// [1,0]

// myFunction(931)
// Expected
// [9,3,1]

// myFunction(193278)
// Expected
// [1,9,3,2,7,8]

// ANSWER

function splitNumberIntoDigits(a: number): number[] {
    return a.toString().split('').map(Number);
}


console.log(splitNumberIntoDigits(10));      
console.log(splitNumberIntoDigits(931));     
console.log(splitNumberIntoDigits(193278));  

// task 19

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc.

// myFunction('java', 'tpi%rcs')
// Expected
// 'Javascript'

// myFunction('c%ountry', 'edis')
// Expected
// 'Countryside'

// myFunction('down', 'nw%ot')
// Expected
// 'Downtown'

// ANSWER

function joinAndCleanStrings(a: string, b: string): string {
    
    b = b.replace('%', '');

    
    return a + b;
}

// Test
console.log(joinAndCleanStrings('java', 'tpi%rcs'));    
console.log(joinAndCleanStrings('c%ountry', 'edis'));   
console.log(joinAndCleanStrings('down', 'nw%ot'));      

// task 20

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

// myFunction(38)
// Expected
// 41

// myFunction(7)
// Expected
// 7

// myFunction(115)
// Expected
// 127

// myFunction(2000)
// Expected
// 2003

// ANSWER

function isPrime(num: number): boolean {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function findNextPrimeOrSelf(a: number): number {
    while (!isPrime(a)) {
        a++;
    }
    return a;
}


console.log(findNextPrimeOrSelf(38));   
console.log(findNextPrimeOrSelf(7));    
console.log(findNextPrimeOrSelf(115));  
console.log(findNextPrimeOrSelf(2000)); 

// task 21

// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

// myFunction(1, 23)
// Expected
// 23

// myFunction(23, 23)
// Expected
// 23

// myFunction(7, 3)
// Expected
// 9

// myFunction(-5, 7)
// Expected
// 0

// ANSWER
function getNextDivisibleNumber(x: number, y: number): number {
    if (x % y === 0) {
        return x;
    } else {
        return x + (y - x % y);
    }
}

// Test
console.log(getNextDivisibleNumber(1, 23));  
console.log(getNextDivisibleNumber(23, 23)); 
console.log(getNextDivisibleNumber(7, 3));   
console.log(getNextDivisibleNumber(-5, 7));  

// task 22

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

// myFunction('1234567','.')
// Expected
// '1.234.567'

// myFunction('abcde','$')
// Expected
// 'ab$cde'

// myFunction('zxyzxyzxyzxyzxyz','w')
// Expected
// 'zwxyzwxyzwxyzwxyzwxyz'

// ANSWER

function insertAfterEveryThirdChar(a: string, b: string): string {
    let result = '';
    let count = 0;

    for (let i = a.length - 1; i >= 0; i--) {
        result = a[i] + result;
        count++;

        if (count === 3 && i !== 0) {
            result = b + result;
            count = 0;
        }
    }

    return result;
}

// Test
console.log(insertAfterEveryThirdChar('1234567', '.'));       
console.log(insertAfterEveryThirdChar('abcde', '$'));          
console.log(insertAfterEveryThirdChar('zxyzxyzxyzxyzxyz', 'w')); 

// task 23

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

// myFunction('bnchmf')
// Expected
// 'coding'

// myFunction('bgddrd')
// Expected
// 'cheese'

// myFunction('sdrshmf')
// Expected
// 'testing'

// ANSWER

function incrementLetters(str: string): string {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        
        charCode++;
        
        result += String.fromCharCode(charCode);
    }

    return result;
}

// Test
console.log(incrementLetters('bnchmf')); 
console.log(incrementLetters('bgddrd')); 
console.log(incrementLetters('sdrshmf')); 

// task 24

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

// myFunction([1,2,3,4,5],3)
// Expected
// 3

// myFunction([10,9,8,7,6],5)
// Expected
// 6

// myFunction([7,2,1,6,3],1)
// Expected
// 7

// ANSWER

function getNthElement(a: number[], n: number): number {
   
    if (n > 0 && n <= a.length) {
        return a[n - 1];
    } else {
        throw new Error('Index out of bounds');
    }
}

// Test
console.log(getNthElement([1, 2, 3, 4, 5], 3)); 
console.log(getNthElement([10, 9, 8, 7, 6], 5)); 
console.log(getNthElement([7, 2, 1, 6, 3], 1));  

// task 25

// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

// myFunction([1,2,3,4])
// Expected
// [4]

// myFunction([5,4,3,2,1,0])
// Expected
// [2,1,0]

// myFunction([99,1,1])
// Expected
// []

// ANSWER

function removeFirstThreeElements(a: number[]): number[] {
    return a.slice(3);
}



console.log(removeFirstThreeElements([1, 2, 3, 4]));       
console.log(removeFirstThreeElements([5, 4, 3, 2, 1, 0])); 
console.log(removeFirstThreeElements([99, 1, 1])); 

// task 26

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of a
// Return the resulting array

// myFunction([1,2,3,4])
// Expected
// [2,3,4]

// myFunction([5,4,3,2,1,0])
// Expected
// [2,1,0]

// myFunction([99,1,1])
// Expected
// [99,1,1]

// ANSWER

function getLastThreeElements(a: number[]): number[] {
    return a.slice(-3);
}


console.log(getLastThreeElements([1, 2, 3, 4]));       
console.log(getLastThreeElements([5, 4, 3, 2, 1, 0])); 
console.log(getLastThreeElements([99, 1, 1]));  

// task 27

// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

// myFunction([1, 2, 3, 4, 5], 2)
// Expected
// [ 4, 5 ]

// myFunction([1, 2, 3], 6)
// Expected
// [ 1, 2, 3 ]

// myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)
// Expected
// [ 6, 7, 8 ]

function getLastNElements(a: number[], n: number): number[] {
    return a.slice(-n);
}

// Test
console.log(getLastNElements([1, 2, 3, 4, 5], 2));        
console.log(getLastNElements([1, 2, 3], 6));             
console.log(getLastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3)); 

// task 28  

// Write a function that takes an array (a) and a value (b) as argument
// The function should clean a from all occurrences of b
// Return the filtered array

// myFunction([1,2,3], 2)
// Expected
// [1, 3]

// myFunction([1,2,'2'], '2')
// Expected
// [1, 2]

// myFunction([false,'2',1], false)
// Expected
// ['2', 1]

// myFunction([1,2,'2',1], 1)
// Expected
// [2, '2']

function filterArray<T>(a: T[], b: T): T[] {
    return a.filter(element => element !== b);
}

// Test
console.log(filterArray([1, 2, 3], 2));           
console.log(filterArray([1, 2, '2'], '2'));       
console.log(filterArray([false, '2', 1], false)); 
console.log(filterArray([1, 2, '2', 1], 1)); 

// task 29

// Write a function that takes an array (a) as argument
// Return the number of elements in a

// myFunction([1,2,2,4])
// Expected
// 4

// myFunction([9,9,9])
// Expected
// 3

// myFunction([4,3,2,1,0])
// Expected
// 5

function countElements<T>(a: T[]): number {
    return a.length;
}


console.log(countElements([1, 2, 2, 4]));    
console.log(countElements([9, 9, 9]));       
console.log(countElements([4, 3, 2, 1, 0])); 

// task 30

// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

// myFunction([1,-2,2,-4])
// Expected
// 2

// myFunction([0,9,1])
// Expected
// 0

// myFunction([4,-3,2,1,0])
// Expected
// 1

function countNegativeNumbers(a: number[]): number {
    return a.filter(element => element < 0).length;
}


console.log(countNegativeNumbers([1, -2, 2, -4]));    
console.log(countNegativeNumbers([0, 9, 1]));         
console.log(countNegativeNumbers([4, -3, 2, 1, 0])); 

// task 31

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

// myFunction([1,3,2])
// Expected
// [3,2,1]

// myFunction([4,2,3,1])
// Expected
// [4,3,2,1]

function sortDescending(a: number[]): number[] {
    return a.sort((x, y) => y - x);
}


console.log(sortDescending([1, 3, 2]));    
console.log(sortDescending([4, 2, 3, 1])); 

// task 32

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result

// myFunction(['b', 'c', 'd', 'a'])
// Expected
// ['a', 'b', 'c', 'd']

// myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])
// Expected
// ['a', 'a', 'c', 'd', 'w', 'y', 'z']

// ANSWER

function sortAlphabetically(a: string[]): string[] {
    return a.sort();
}


console.log(sortAlphabetically(['b', 'c', 'd', 'a']));          
console.log(sortAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); 

// task 33

// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

// myFunction([10,100,40])
// Expected
// 50

// myFunction([10,100,1000])
// Expected
// 370

// myFunction([-50,0,50,200])
// Expected
// 50

function calculateAverage(a: number[]): number {
    const sum = a.reduce((acc, curr) => acc + curr, 0);
    return sum / a.length;
}


console.log(calculateAverage([10, 100, 40]));   
console.log(calculateAverage([10, 100, 1000])); 
console.log(calculateAverage([-50, 0, 50, 200])); 

// task 34

// Write a function that takes an array of strings as argument
// Return the longest string

// myFunction(['help', 'me'])
// Expected
// 'help'

// myFunction(['I', 'need', 'candy'])
// Expected
// 'candy'

function findLongestString(a: string[]): string {
    return a.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}


console.log(findLongestString(['help', 'me']));       
console.log(findLongestString(['I', 'need', 'candy'])); 


// task 35

// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

// myFunction([true, true, true, true])
// Expected
// true 

// myFunction(['test', 'test', 'test'])
// Expected
// true 

// myFunction([1,1,1,2])
// Expected
// false 

// myFunction(['10',10,10,10])
// Expected
// false

function areAllElementsEqual<T>(a: T[]): boolean {
    return a.every(element => element === a[0]);
}


console.log(areAllElementsEqual([true, true, true, true]));   
console.log(areAllElementsEqual(['test', 'test', 'test']));   
console.log(areAllElementsEqual([1, 1, 1, 2]));               
console.log(areAllElementsEqual(['10', 10, 10, 10]));  

// task 36

// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

// myFunction([1, 2, 3], [4, 5, 6])
// Expected
// [1, 2, 3, 4, 5, 6]

// myFunction(['a', 'b', 'c'], [4, 5, 6])
// Expected
// ['a', 'b', 'c', 4, 5, 6]

// myFunction([true, true], [1, 2], ['a', 'b'])
// Expected
// [true, true, 1, 2, 'a', 'b']

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

// Test
console.log(concatenateArrays([1, 2, 3], [4, 5, 6]));            
console.log(concatenateArrays(['a', 'b', 'c'], [4, 5, 6]));      
console.log(concatenateArrays([true, true], [1, 2], ['a', 'b'])); 

// task 37

// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array

// myFunction([{a:1,b:2},{a:5,b:4}])
// Expected
// [{a:1,b:2},{a:5,b:4}]

// myFunction([{a:2,b:10},{a:5,b:4}])
// Expected
// [{a:5,b:4},{a:2,b:10}]

// myFunction([{a:1,b:7},{a:2,b:1}])
// Expected
// [{a:2,b:1},{a:1,b:7}]


interface MyObject {
    a: number;
    b: number;
}

function sortByPropertyB(arr: MyObject[]): MyObject[] {
    return arr.sort((x, y) => x.b - y.b);
}


console.log(sortByPropertyB([{a: 1, b: 2}, {a: 5, b: 4}]));      
console.log(sortByPropertyB([{a: 2, b: 10}, {a: 5, b: 4}]));     
console.log(sortByPropertyB([{a: 1, b: 7}, {a: 2, b: 1}]));      


// task 38


// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

// myFunction([1, 2, 3], [3, 4, 5])
// Expected
// [ 1, 2, 3, 4, 5 ]

// myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
// Expected
// [ -11, -10, 5, 22, 41,  42, 333]


function mergeAndSortArrays(arr1: number[], arr2: number[]): number[] {
    const mergedArray = [...arr1, ...arr2];
    const uniqueArray = Array.from(new Set(mergedArray));
    return uniqueArray.sort((a, b) => a - b);
}


console.log(mergeAndSortArrays([1, 2, 3], [3, 4, 5]));                  
console.log(mergeAndSortArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42])); 

// task 39

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum

// myFunction([1, 2, 3, 4, 5, 6, 7], 2)
// Expected
// 25

// myFunction([-10, -11, -3, 1, -4], -3)
// Expected
// 1

// myFunction([78, 99, 100, 101, 401], 99)
// Expected
// 602

function sumElementsGreaterThan(a: number[], b: number): number {
    return a.filter(element => element > b).reduce((acc, curr) => acc + curr, 0);
}


console.log(sumElementsGreaterThan([1, 2, 3, 4, 5, 6, 7], 2)); 
console.log(sumElementsGreaterThan([-10, -11, -3, 1, -4], -3)); 
console.log(sumElementsGreaterThan([78, 99, 100, 101, 401], 99)); 

// task 40


// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max

// myFunction(2, 10)
// Expected
// [2, 3, 4, 5, 6, 7, 8, 9, 10]

// myFunction(1, 3)
// Expected
// [1, 2, 3]

// myFunction(-5, 5)
// Expected
// [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]

// myFunction(2, 7)
// Expected
// [2, 3, 4, 5, 6, 7]

function createRange(min: number, max: number): number[] {
    const range: number[] = [];
    for (let i = min; i <= max; i++) {
        range.push(i);
    }
    return range;
}


console.log(createRange(2, 10));  
console.log(createRange(1, 3));   
console.log(createRange(-5, 5));  
console.log(createRange(2, 7));   


// task 41

// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

// myFunction(['Alf', 'Alice', 'Ben'])
// Expected
// { a: ['Alf', 'Alice'], b: ['Ben']}

// myFunction(['Ant', 'Bear', 'Bird'])
// Expected
// { a: ['Ant'], b: ['Bear', 'Bird']}

// myFunction(['Berlin', 'Paris', 'Prague'])
// Expected
// { b: ['Berlin'], p: ['Paris', 'Prague']}

function groupByFirstLetter(strings: string[]): Record<string, string[]> {
    const grouped: Record<string, string[]> = {};

    strings.forEach(str => {
        const key = str[0].toLowerCase(); 
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(str);
    });

    return grouped;
}


console.log(groupByFirstLetter(['Alf', 'Alice', 'Ben']));         
console.log(groupByFirstLetter(['Ant', 'Bear', 'Bird']));         
console.log(groupByFirstLetter(['Berlin', 'Paris', 'Prague']));  


// task 42

// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

// myFunction([1,2,3], 6)
// Expected
// [6,1,2,3]

// myFunction(['a','b'], 2)
// Expected
// [0,'a','b']

// myFunction([null,false], 11)
// Expected
// [11,null,false]

function prependNumber<T>(arr: T[], num: number): (T | number)[] {
    return [num >= 6 ? num : 0, ...arr];
}


console.log(prependNumber([1, 2, 3], 6));         
console.log(prependNumber(['a', 'b'], 2));        
console.log(prependNumber([null, false], 11));  

// task 43

// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

// myFunction([1,2,3,4,5,6,7,8,9,10],3)
// Expected
// [3,6,9]

// myFunction([10,9,8,7,6,5,4,3,2,1],5)
// Expected
// [6,1]

// myFunction([7,2,1,6,3,4,5,8,9,10],2)
// Expected
// [2,6,4,8,10]

function getEveryNthElement<T>(a: T[], n: number): T[] {
    return a.filter((_, index) => (index + 1) % n === 0);
}


console.log(getEveryNthElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); 
console.log(getEveryNthElement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));  
console.log(getEveryNthElement([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));  

// task 44

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

// myFunction({  continent: 'Asia',  country: 'Japan'})
// Expected
// 'Japan'

// myFunction({  country: 'Sweden',  continent: 'Europe'})
// Expected
// 'Sweden'


function getCountry(obj: { continent: string; country: string }): string {
    return obj.country;
}


console.log(getCountry({ continent: 'Asia', country: 'Japan' })); 
console.log(getCountry({ country: 'Sweden', continent: 'Europe' })); 

// task 45

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tip: you might want to use the square brackets property accessor

// myFunction({  one: 1,  'prop-2': 2})
// Expected
// 2

// myFunction({  'prop-2': 'two',  prop: 'test'})
// Expected
// 'two'


function getValueOfProp2(obj: { [key: string]: any }): any {
    return obj['prop-2'];
}


console.log(getValueOfProp2({ one: 1, 'prop-2': 2 }));          
console.log(getValueOfProp2({ 'prop-2': 'two', prop: 'test' })); 

// task 46

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

// myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')
// Expected
// 'Asia'

// myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')
// Expected
// 'Sweden'


function getPropertyValue(obj: { [key: string]: string }, key: string): string {
    return obj[key];
}


console.log(getPropertyValue({ continent: 'Asia', country: 'Japan' }, 'continent')); 
console.log(getPropertyValue({ country: 'Sweden', continent: 'Europe' }, 'country')); 

// task 47

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise

// myFunction({a:1,b:2,c:3},'b')
// Expected
// true

// myFunction({x:'a',y:'b',z:'c'},'a')
// Expected
// false

// myFunction({x:'a',y:'b',z:'c'},'z')
// Expected
// true

function hasProperty(a: { [key: string]: any }, b: string): boolean {
    return b in a;
}


console.log(hasProperty({a: 1, b: 2, c: 3}, 'b'));       
console.log(hasProperty({x: 'a', y: 'b', z: 'c'}, 'a')); 
console.log(hasProperty({x: 'a', y: 'b', z: 'c'}, 'z')); 


// task 48

// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object

// myFunction('a')
// Expected
// {key:'a'}

// myFunction('z')
// Expected
// {key:'z'}

// myFunction('b')
// Expected
// {key:'b'}

function createObjectWithKey(a: string): { key: string } {
    return { key: a };
}


console.log(createObjectWithKey('a')); 
console.log(createObjectWithKey('z')); 
console.log(createObjectWithKey('b')); 

// task 49

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

// myFunction('a','b')
// Expected
// {a:'b'}

// myFunction('z','x')
// Expected
// {z:'x'}

// myFunction('b','w')
// Expected
// {b:'w'}

function createDynamicObject(a: string, b: string): { [key: string]: string } {
    return { [a]: b };
}


console.log(createDynamicObject('a', 'b')); 
console.log(createDynamicObject('z', 'x')); 
console.log(createDynamicObject('b', 'w')); 


// task 50

// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

// myFunction(['a','b','c'],[1,2,3])
// Expected
// {a:1,b:2,c:3}

// myFunction(['w','x','y','z'],[10,9,5,2])
// Expected
// {w:10,x:9,y:5,z:2}

// myFunction([1,'b'],['a',2])
// Expected
// {1:'a',b:2}


function createObjectFromArrays(a: (string | number)[], b: any[]): { [key: string]: any } {
    return a.reduce((obj, key, index) => {
        obj[key.toString()] = b[index];
        return obj;
    }, {} as { [key: string]: any });
}


console.log(createObjectFromArrays(['a', 'b', 'c'], [1, 2, 3]));     
console.log(createObjectFromArrays(['w', 'x', 'y', 'z'], [10, 9, 5, 2])); 
console.log(createObjectFromArrays([1, 'b'], ['a', 2]));      

// task 51

// Write a function that takes an object (a) as argument
// Return an array with all object keys

// myFunction({a:1,b:2,c:3})
// Expected
// ['a','b','c']

// myFunction({j:9,i:2,x:3,z:4})
// Expected
// ['j','i','x','z']

// myFunction({w:15,x:22,y:13})
// Expected
// ['w','x','y']


function getObjectKeys(a: { [key: string]: any }): string[] {
    return Object.keys(a);
}


console.log(getObjectKeys({a: 1, b: 2, c: 3}));     
console.log(getObjectKeys({j: 9, i: 2, x: 3, z: 4})); 
console.log(getObjectKeys({w: 15, x: 22, y: 13}));  

// task 52  

// Write a function that takes an object (a) as argument
// Return the sum of all object values

// myFunction({a:1,b:2,c:3})
// Expected
// 6

// myFunction({j:9,i:2,x:3,z:4})
// Expected
// 18

// myFunction({w:15,x:22,y:13})
// Expected
// 50

function sumObjectValues(a: { [key: string]: number }): number {
    return Object.values(a).reduce((sum, value) => sum + value, 0);
}


console.log(sumObjectValues({a: 1, b: 2, c: 3}));       
console.log(sumObjectValues({j: 9, i: 2, x: 3, z: 4})); 
console.log(sumObjectValues({w: 15, x: 22, y: 13}));    


// task 53


// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

// myFunction({ a: 1, b: 7, c: 3 })
// Expected
// { a: 1, c: 3 }

// myFunction({ b: 0, a: 7, d: 8 })
// Expected
// { a: 7, d: 8 }

// myFunction({ e: 6, f: 4, b: 5, a: 3 })
// Expected
// { e: 6, f: 4, a: 3 }

function removeObjectPropertyB(obj: { [key: string]: any }): { [key: string]: any } {
    const { b, ...rest } = obj;
    return rest;
}


console.log(removeObjectPropertyB({ a: 1, b: 7, c: 3 }));         
console.log(removeObjectPropertyB({ b: 0, a: 7, d: 8 }));         
console.log(removeObjectPropertyB({ e: 6, f: 4, b: 5, a: 3 }));

// task 54

// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

// myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
// Expected
// { a: 1, b: 2, c: 3, e: 5, d: 4}

// myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })
// Expected
// { a: 5, b: 4, c: 3, e: 2, d: 1}

function mergeObjectsAndRenameProperty(
    obj1: { a: number; b: number },
    obj2: { c: number; b: number; e: number }
): { a: number; b: number; c: number; d: number; e: number } {
    const { b: d, ...restOfObj2 } = obj2;
    return { ...obj1, ...restOfObj2, d };
}


console.log(mergeObjectsAndRenameProperty({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); 
console.log(mergeObjectsAndRenameProperty({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); 

// task 55

// Write a function that takes an object (a) and a number (b) as arguments
// Multiply all values of 'a' by 'b'
// Return the resulting object

// myFunction({a:1,b:2,c:3},3)
// Expected
// {a:3,b:6,c:9}

// myFunction({j:9,i:2,x:3,z:4},10)
// Expected
// {j:90,i:20,x:30,z:40}

// myFunction({w:15,x:22,y:13},6)
// Expected
// {w:90,x:132,y:78}

function multiplyObjectValues(a: { [key: string]: number }, b: number): { [key: string]: number } {
    const result: { [key: string]: number } = {};

    for (const key in a) {
        if (Object.hasOwnProperty.call(a, key)) {
            result[key] = a[key] * b;
        }
    }

    return result;
}


console.log(multiplyObjectValues({a: 1, b: 2, c: 3}, 3));           
console.log(multiplyObjectValues({j: 9, i: 2, x: 3, z: 4}, 10));    
console.log(multiplyObjectValues({w: 15, x: 22, y: 13}, 6));   

// task 56

// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

// myFunction({z:'a',y:'b',x:'c',w:'d'})
// Expected
// {a:'z',b:'y',c:'x',d:'w'}

// myFunction({2:'a',4:'b',6:'c',8:'d'})
// Expected
// {a:'2',b:'4',c:'6',d:'8'}

// myFunction({a:1,z:24})
// Expected
// {1:'a',24:'z'}


function swapKeysAndValues(a: { [key: string]: string | number }): { [key: string]: string } {
    const result: { [key: string]: string } = {};

    for (const key in a) {
        if (Object.hasOwnProperty.call(a, key)) {
            result[a[key]] = key;
        }
    }

    return result;
}


console.log(swapKeysAndValues({z: 'a', y: 'b', x: 'c', w: 'd'}));   
console.log(swapKeysAndValues({2: 'a', 4: 'b', 6: 'c', 8: 'd'}));   
console.log(swapKeysAndValues({a: 1, z: 24}));       

// task 57

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// myFunction({ a: 'a', b: 'b', c: '' })
// Expected
// { a: 'a', b: 'b', c: null }

// myFunction({ a: '', b: 'b', c: ' ', d: 'd' })
// Expected
// { a: null, b: 'b', c: null, d: 'd' }

// myFunction({ a: 'a', b: 'b ', c: ' ', d: '' })
// Expected
// { a: 'a', b: 'b ', c: null, d: null }

function replaceEmptyWithNull(a: { [key: string]: string }): { [key: string]: string | null } {
    const result: { [key: string]: string | null } = {};

    for (const key in a) {
        if (Object.hasOwnProperty.call(a, key)) {
            result[key] = a[key].trim() === '' ? null : a[key];
        }
    }

    return result;
}


console.log(replaceEmptyWithNull({ a: 'a', b: 'b', c: '' }));             
console.log(replaceEmptyWithNull({ a: '', b: 'b', c: ' ', d: 'd' }));    
console.log(replaceEmptyWithNull({ a: 'a', b: 'b ', c: ' ', d: '' })); 

// task 58

// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

// myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})
// Expected
// {fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}

// myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
// Expected
// {fn: 'Martin', ln: 'Harper', weight: '102kg'}

// myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})
// Expected
// {fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}

// myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})
// Expected
// {fn: 'Matthew', ln: 'Müller'}

type PersonalInfo = {
    fn: string;
    ln: string;
    age?: number;
    size?: number;
    weight?: number;
    email?: string;
};

type ProcessedInfo = {
    fn: string;
    ln: string;
    size?: string;
    weight?: string;
};

function processPersonalInfo(info: PersonalInfo): ProcessedInfo {
    let result: ProcessedInfo = { fn: info.fn, ln: info.ln };

    if (info.size !== undefined) {
        result.size = info.size + 'cm';
    }

    if (info.weight !== undefined) {
        result.weight = info.weight + 'kg';
    }

    return result;
}


console.log(processPersonalInfo({ fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67 })); 
console.log(processPersonalInfo({ fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102 })); 
console.log(processPersonalInfo({ fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71 })); 
console.log(processPersonalInfo({ fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de' })); 

// task 59

// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tip: try not to mutate the original array

// myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
// Expected
// [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

// myFunction([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')
// Expected
// [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

type CityInfo = {
    city: string;
    country: string;
    continent?: string;
};

function addContinentToObjects(array: CityInfo[], continent: string): CityInfo[] {
    return array.map(obj => ({ ...obj, continent: continent }));
}


console.log(addContinentToObjects(
    [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }],
    'Asia'
)); 

console.log(addContinentToObjects(
    [{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }],
    'Europe'
)); 

// task 60


// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

// myFunction([1,2,2,3])
// Expected
// {1:1,2:2,3:1}

// myFunction([9,9,9,99])
// Expected
// {9:3,99:1}

// myFunction([4,3,2,1])
// Expected
// {1:1,2:1,3:1,4:1}


function arrayToObject(arr: number[]): { [key: number]: number } {
    const result: { [key: number]: number } = {};

    arr.forEach(num => {
        if (result[num]) {
            result[num] += 1;
        } else {
            result[num] = 1;
        }
    });

    return result;
}


console.log(arrayToObject([1, 2, 2, 3])); 
console.log(arrayToObject([9, 9, 9, 99])); 
console.log(arrayToObject([4, 3, 2, 1]));  

// task 61

// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise

// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
// Expected
// false

// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
// Expected
// true

// myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
// Expected
// false

function areDatesEqual(date1: Date, date2: Date): boolean {
    return date1.getTime() === date2.getTime();
}


console.log(areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); 
console.log(areDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); 
console.log(areDatesEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); 

// task 62

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

// myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
// Expected
// 10

// myFunction(new Date('2000-01-01'), new Date('2020-06-01'))
// Expected
// 7457

function daysBetweenDates(date1: Date, date2: Date): number {
    const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
    return Math.abs(date1.getTime() - date2.getTime()) / msPerDay;
}


console.log(daysBetweenDates(new Date('2020-06-11'), new Date('2020-06-01'))); 
console.log(daysBetweenDates(new Date('2000-01-01'), new Date('2020-06-01'))); 

// task 63


// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

// myFunction(new Date('2000/01/01'), new Date('2000/01/01'))
// Expected
// true 

// myFunction(new Date('2000/01/01'), new Date('2000/01/02'))
// Expected
// false 

// myFunction(new Date('2001/01/01'), new Date('2000/01/01'))
// Expected
// false 

// myFunction(new Date('2000/11/01'), new Date('2000/01/01'))
// Expected
// false


function areSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}


console.log(areSameDay(new Date('2000/01/01'), new Date('2000/01/01'))); 
console.log(areSameDay(new Date('2000/01/01'), new Date('2000/01/02'))); 
console.log(areSameDay(new Date('2001/01/01'), new Date('2000/01/01'))); 
console.log(areSameDay(new Date('2000/11/01'), new Date('2000/01/01'))); 


// task 64

// SPREAD OPERATOR 
// Use spread operator in all tasks

// Write a function that takes two number arrays as parameters 
// and return an array which contains elements from both 
// arrays

// myFunction([1, 2], [3, 4]) 
// Expected
// [1, 2, 3, 4]

// myFunction([1, 2], [3, 4, 5, 6]) 
// Expected
// [1, 2, 3, 4, 5, 6]


function combineArrays(arr1: number[], arr2: number[]): number[] {
    return [...arr1, ...arr2];
}


console.log(combineArrays([1, 2], [3, 4]));      
console.log(combineArrays([1, 2], [3, 4, 5, 6])); 

// task 65

// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the last element

// myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi'); 
// Expected
// ['Apple', 'Orange', 'Banana', 'Kiwi']


function addStringToArray(array: string[], str: string): string[] {
    return [...array, str];
}


console.log(addStringToArray(['Apple', 'Orange', 'Banana'], 'Kiwi')); 

// task 66

// Write a function that takes an array and a string as parameters 
// and return an array which contains all elements from the given array
// and the given string as the first element

// myFunction(['Apple', 'Orange', 'Banana'], 'Kiwi'); 
// Expected
// ['Kiwi', 'Apple', 'Orange', 'Banana']

function addStringAsFirstElement(array: string[], str: string): string[] {
    return [str, ...array];
}


console.log(addStringAsFirstElement(['Apple', 'Orange', 'Banana'], 'Kiwi')); 

// task 67

// Write a function that takes two objects as parameters 
// and return an object which contains properties from both 
// objects

// myFunction({ a:1, b:2 }, { c:3, d:4 }) 
// Expected
// { a:1, b:2, c:3, d:4 }

// myFunction({ a:1, b:2 }, { c:3, d:4, e:5, f:6 }) 
// Expected
// { a:1, b:2, c:3, d:4, e:5, f:6 }


function combineObjects(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any> {
    return { ...obj1, ...obj2 };
}


console.log(combineObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
// Expected: { a: 1, b: 2, c: 3, d: 4 }

console.log(combineObjects({ a: 1, b: 2 }, { c: 3, d: 4, e: 5, f: 6 }));
// Expected: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// task 68


// Write a function that takes an object and a string as parameters 
// and return an object which contains properties from the given object
// and a new property favoriteMovie with the value equal to the given string

// myFunction({ eyeColor: 'green', age: 10 }, 'Garfield') 
// Expected
// { eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }

// myFunction({ eyeColor: 'blue', age: 15 }, 'Twilight') 
// Expected
// { eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }



function addFavoriteMovie(obj: Record<string, any>, movie: string): Record<string, any> {
    return {
        ...obj,
        favoriteMovie: movie,
    };
}


console.log(addFavoriteMovie({ eyeColor: 'green', age: 10 }, 'Garfield'));
// Expected: { eyeColor: 'green', age: 10, favoriteMovie: 'Garfield' }

console.log(addFavoriteMovie({ eyeColor: 'blue', age: 15 }, 'Twilight'));
// Expected: { eyeColor: 'blue', age: 15, favoriteMovie: 'Twilight' }








































































































