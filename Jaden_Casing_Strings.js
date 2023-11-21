// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


// function fn (sentence){
//     let ary = sentence.split(" ");
//     let jadenFormat = [];
//     ary.forEach((item)=>{
//         item = item[0].toUpperCase() + item.slice(1)
//         jadenFormat.push(item);
//     });
//     console.log(jadenFormat.join(" "));
// return jadenFormat.join(" ");

// }

// fn("How can mirrors be real if our eyes aren't real");

//自定義屬性函示寫法
String.prototype.toJadenCase = function () {
    let wordsArray = this.split(" ");
    let jadenFormat = [];

    wordsArray.forEach((word) => {
        word = word[0].toUpperCase() + word.slice(1);
        jadenFormat.push(word);
    });

    return jadenFormat.join(" ");
};

// 示例用法
let sentence = "how can mirrors be real if our eyes aren't real";
let jadenCaseSentence = sentence.toJadenCase();
console.log(jadenCaseSentence);

// 👍 簡潔寫法
// String.prototype.toJadenCase = function() {
//     return this
//       .split(" ")
//       .map(i => i.replace(i[0], i[0].toUpperCase()))
//       .join(" ");
//   };
