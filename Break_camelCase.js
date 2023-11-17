// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//65~90 大寫
//97~122 小寫

function breakCamel(string){
    let str = "";
   //string 不能直接 forEach，因為非陣列
    string.split("").forEach(function(item, index){
        if(item === item.toUpperCase()){
            item = " "+item;
        }
        str = str + item;
    });

    console.log(str)
    return str;
}

breakCamel("camelCasing")