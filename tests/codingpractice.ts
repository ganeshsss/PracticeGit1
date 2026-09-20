//find the ocurrence of a letter 
/* function occofletter(text:string,letter:string):number{
    let count=0;
    //const matchletter='a'
    for (let i=0;i<text.length;i++){
        if(text[i]===letter){
            count++
        }

    }
    return count;
}

console.log(occofletter("ddata",'d')) */

//case-insenstivity
/* function occofletter(text:string,letter:string):number{
    let count=0;
    //const matchletter='a'

    const text1=text.toLowerCase();
    const letter1=letter.toLowerCase()

    for (let i=0;i<text1.length;i++){
        if(text1[i]===letter1){
            count++
        }

    }
    return count;
}

console.log(occofletter("DdaAta",'d')) */

//count each character
/* function occofletter(text:string):Record<string,number>{
    //let count=0;
    //const matchletter='a'
    const freq:Record<string,number>={}

    for (let i=0;i<text.length;i++){
        //if(text[i]===letter){
            //count++
       // }
       const char=text[i]
       if(freq[char]){
        freq[char]++
       }
       else{
        freq[char]=1
       }

    }
    return freq;
}

console.log(occofletter("ddata")) */



function occofletter(text:string,letter:string):number{
    //let count=0;
    //const matchletter='a'
    //const freq:Record<string,number>={}

    //const text1 =/[a-zA-Z]/.test(text)

    for (let i=0;i<text.length;i++){
        if(text[i]===letter){
            //count++
            return i;
       }
       
    }
    return -1;
}

console.log(occofletter("ddata",'a'))