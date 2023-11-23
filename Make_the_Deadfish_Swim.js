// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function fn(str){
    let arr = str.split("")
    let output = [];
    let value = 0;
    arr.forEach((item)=>{
        // if(item ==="i"){
        //     value += 1;
        // } else if (item ==="d"){
        //     value -=1;
        // } else if (item ==="s"){
        //     value = value**2;
        // } else if (item ==="o"){
        //     output.push(value);
        // } 

        //switch 適合在一個變數的多個可能值中進行相等性比較
        switch(item){
            case "i":
                value +=1;
                break;
            case "d":
                value -=1;
                break;
            case "s":
                value = value**2;
                break;
            case "o":
                output.push(value);
                break;
        }
    });
    console.log(output);
}

fn("iiisdoso");