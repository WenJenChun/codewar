// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

//6  31 33 35 37 39 41
//7  43 45 37 49 51 53 55
//8  57 59 61 63 65 67 69 71

// 1 -->  1
// 2 --> 3 + 5 = 8
// 3 --> 7+9+11 = 27
// 4 --> 13+15+17+19 = 64

//如果 n = 5，就要算出第5行的陣列有哪些數值，並且算出總和
// 第1列開頭是 1，陣列共有 1 個值
// 第2列開頭是 1+2=3，2，陣列共有 2 個值，
// 第3列開頭是 1+2+2+2=7，6，陣列共有 3 個值
// 第4列開頭是 1+2+2+2+2+2+2=13，12，陣列共有 4 個值
// 第5列開頭是 1+2+2+2+2+2+2+2+2+2+2=21，20，陣列共有 5 個值
// 每一列新增為 2, 4, 6, 8,...

function fn(n){
    //給的參數=第幾列、陣列有幾個值
    let arr = [];
    let startNum = n * n - n + 1;
    let arrSum;
   
    if(n>1&& n!==0){
        for(let i = 1; i<=n; i++){
            arr.push(startNum);
            startNum=startNum+2;
        }
        arrSum = arr.reduce((prev,next)=>prev+next);
        console.log(arrSum);
    } else {
        return
    }
}

fn(4);