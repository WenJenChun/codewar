function likeOrDislike(buttons) {
    let state = "Nothing";
    
    console.log("input buttons:"+buttons)

    // [Like, Dislike, Dislike]
    for(let i = 0; i < buttons.length; i++){
        if(state === buttons[i]){
            state = "Nothing";
        } else {
            state = buttons[i];
        }
    }

    console.log(state);
    return state;
}


likeOrDislike(["Dislike"]); 
likeOrDislike(["Like","Like"]); 
likeOrDislike(["Dislike","Like"]); 
likeOrDislike(["Like","Dislike","Dislike"]); 