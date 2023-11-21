// DESCRIPTION:
// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

function fn (x,n){
    // n = array length
    // x = start number
    let ary = [];
    
    for(let i = 1; i<=n; i++){
        ary.push(x);
        x=x**2;
    }
    console.log(ary);
    return ary;
}

fn(3,3);