// function stars(int){
//     let star = "";
//     for(let i = 1; i<=int; i++){
//         star = star + "*"
//         console.log(star)
//     }
// }

// stars(1);
// // *
// stars(4);
// // *
// // **
// // ***
// // ****


function stars2(int){
    // 正常次序星星
    for (let i = 1; i <= int; i++){
        let star = "";
        for (let j=1; j<=i; j++ ){
            star += "*";
        }
        console.log(star)
    }
    // 倒反次序星星
    for (let i = int-1; i>=1; i--){
        let star = "";
        for (let j=1; j<=i; j++ ){
            star += "*";
        }
        console.log(star)
    }
}

stars2(1);
console.log("===========")

// *
stars2(2);
console.log("===========")

// *
// **
// *
stars2(3);
console.log("===========")
// *
// **
// ***
// **
// *
stars2(4);
console.log("===========")
// *
// **
// ***
// ****
// ***
// **
// *
