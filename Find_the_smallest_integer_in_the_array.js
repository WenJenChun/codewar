// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function fn (arr){
    let smallest = arr[arr.length-1];
    
    for(let i = 0; i<arr.length; i++){
        // console.log(i);
        smallest < arr[i] ? smallest = smallest : smallest = arr[i];
    }
    console.log(smallest);
    return smallest;
}

// 用 class 寫法：
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest = args[args.length - 1];
  
      for (let i = 0; i < args.length; i++) {
        smallest < args[i] ? smallest = smallest : smallest = args[i];
      }
  
      console.log(smallest);
      return smallest;
    }
}

// 創建 SmallestIntegerFinder 類別的一個實例
const finder = new SmallestIntegerFinder();

// 使用 findSmallestInt 方法，並傳入一個陣列作為參數
finder.findSmallestInt([3, 1, 7, 9, 2]); // 這將會印出陣列中的最小整數

//==============================================================
// 其他寫法(1)：
// 
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return args.sort((a,b)=>a-b)[0];
//   }
// }


// 其他寫法(2)：
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }
