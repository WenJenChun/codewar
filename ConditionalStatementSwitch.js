// In JavaScript, switch can replace multiple if statements.

// switch(n){
//   case 1:  
//     //code block
//     break;
//   case 2:
//     //code block
//     break;
//   case ...:
//     //code block
//     break;

//   default:       //default is optional, sometimes it can be omitted
//     //code block
//                  //The last one does not need break
// }

function howManydays(month){
    switch ( month ){
      case 2 : return 28
      case 4: case 6: case 9: case 11: return 30
      default: return 31
    }
}

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.



function howMuchILoveYou(nbPetals) {
    // your code
  let words;
  switch(nbPetals%6){
      case 1:
        words = "I love you";
        break;
      case 2:
        words = "a little";
        break;
      case 3:
        words = "a lot";
        break;
      case 4:
        words = "passionately";
        break;
      case 5:
        words = "madly";
        break;
      case 0:
        words = "not at all";
        break;
      
  }
  return words;
}

//陣列寫法且陣列長度未知:
const phrases = [
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all',
]

function howMuchILoveYou(n) {
     return phrases[(n - 1) % phrases.length] 
}

//物件寫法:
function howMuchILoveYou(nbPetals) {
    let phrase = {    
      0: "not at all",
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly"
    }
    return phrase[nbPetals%6]
}