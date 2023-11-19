// If　a = 1, b = 2, c = 3 ... z = 26
// Then l + o + v + e = 54
// and f + r + i + e + n + d + s + h + i + p = 108
// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
// The input will always be made of only lowercase letters and will never be empty.


function wordsToMarks(word){
    // ASCII: a = 97, z = 122
    //算出每個字母的值，指派到一個陣列裡
    let valueAry = [];
    //把陣列的值相加
    word.split("").forEach((item)=>{
        let value = item.charCodeAt(0)-97+1;
        valueAry.push(value);
    });
    console.log(valueAry)
    // wordSum = valueAry.reduce(function(prev,next){
    //     return prev+next;
    //   },0);
    wordSum = valueAry.reduce((prev,next)=> prev+next);
    console.log(wordSum);
    return wordSum;
}

wordsToMarks("friendship");