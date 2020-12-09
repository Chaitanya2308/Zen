/*
// Print Odd numbers in an array

var arr=[1,2,3,4,5,6,7,8,9,10]
var res=function(a)
{
    for(var i=0;i<a.length;i++)
    {
        if(a[i]%2!==0)
        {
            console.log(a[i]);
        }
    }
}
res(arr);
(function(arr){
    arr.forEach(element => {
        if(element%2!==0)
            console.log(element);
    }); 
})([1,2,3,4,5,6,7,8,9,10]);
*/

/*
//Convert all the strings to title caps in a string array
var str=['hii','how','are','you'];
var a=function(b)
{
    var res=[]
    for(var i=0;i<b.length;i++)
    {
        res.push(b[i].toUpperCase());   
    }
    return res;
}
console.log(a(str));

(function(s){
    let arr = s.split(' ');
    let arr2 = arr.map(a => a.charAt(0).toUpperCase()+a.substring(1));
    s = arr2.join(' ');
    console.log(s);
})("hii this is chaitanya");
*/

/*
// Sum of all numbers in an array
var arr=[1,2,3,4,5,6,7,8,9,10]
var a=function(arr)
{
    let sum=0;
    for(var i=0;i<arr.length;i++)
    {
        sum+=arr[i]
    }
    return sum;
}
console.log(a(arr))
(function(arr){
    let sum = arr.reduce((total,next) => { return total + next},0);
    console.log(sum);
})([1,2,3,4,5,6,7,8,9,10]);
*/


/*
//Return all the prime numbers in an array
arr=[1,2,3,4,5,6,7,8,9,10]
function isPrime(n){
    let flag = 0;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            flag++;
            break;
        }
    }
    if(flag>0)
        return false;
    else
        return true;
}
const res=function(arr){
    let ar = arr.filter(a => isPrime(a));
    console.log(ar);
}
res(arr);

function isPrime(n){
    let flag = 0;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            flag++;
            break;
        }
    }
    if(flag>0)
        return false;
    else
        return true;
}

(function(arr){
    let ar = arr.filter(a => isPrime(a));
    console.log(ar);
})([1,2,3,4,5,6,7,8,9,10]);
*/

/*

// program to return all the  palindromes in array
(function(arr){
    let ar = [];
    ar = arr.filter(el => isPalindrome(el));
    console.log(ar);
})([123454321,999999,98789,12345,45654]);

function isPalindrome(n){
    let sum = 0,ans=n;
    while(n!==0){
        let d = n%10;
        n=parseInt(n/10);
        sum=sum*10+d;
    }
    if(sum===ans)
        return true;
    else    
        return false;
}
//
arr=[123454321,999999,98789,12345,45654];
function isPalindrome(n){
    let sum = 0,ans=n;
    while(n!==0){
        let d = n%10;
        n=parseInt(n/10);
        sum=sum*10+d;
    }
    if(sum===ans)
        return true;
    else    
        return false;
}
var ans=function(arr){
    let ar = [];
    ar = arr.filter(el => isPalindrome(el));
    console.log(ar);
};

ans(arr);
/*
// remove duplicates from an array
(function(arr){
    let obj = {};
    let ar = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] in obj)
            continue;
        else{
            obj[arr[i]] = i;
            ar.push(arr[i]);
        }
    }
    console.log(ar);
})([1,2,3,4,5,5,4,3,2,1,9,8,4,7,9,10]);

//
arr=[1,2,3,4,5,5,4,3,2,1,9,8,4,7,9,10]
const res=function(arr){
    let obj = {};
    let ar = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] in obj)
            continue;
        else{
            obj[arr[i]] = i;
            ar.push(arr[i]);
        }
    }
    console.log(ar);
};
res(arr)
*/
/*
//Rotate an array by k times
var arr=[1,2,3,4,5];
var rotate=function(arr, k)
{
for(let i=1;i<=k;i++)
{

arr.push(arr.shift());
 
}
return arr;
}
var result=rotate(arr,5);
console.log(result);

(function(arr,k){
    for(let i=1;i<=k;i++)
{
arr.push(arr.shift());
}
console.log(arr);
})([1,2,3,4,5],k);
*/


/*
//median of two sorted arrays
var arr=[1,2,3,4,5]
var arr1=[6,7,8,9,10];
var median;
var result=arr.concat(arr1)
var n=result.length;
if(n%2===0)
{
median=((result[n/2])+result[n/2+1])/2;
}
else
{
median=(result[n/2])/2;
}
console.log(median);


(function(arr,arr1)
{
var median;
var result=arr.concat(arr1)
var n=result.length;
if(n%2===0)
{
median=((result[n/2])+result[n/2+1])/2;
}
else
{
median=(result[n/2])/2;
}
console.log(median);
})([1,2,3,4,5],[6,7,8,9,10]);
*/
