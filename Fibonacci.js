// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34..

function fib(n){
    let fibArr= [0, 1];
    while(fibArr.length <= n){
        fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2])
    }
    console.log(fibArr[n])
}
//回傳 費波那契數 的第 n 個數
fib(0) // returns 0
fib(1) // returns 1
fib(2) // returns 1
fib(3)// returns 2
fib(8) // returns 21
