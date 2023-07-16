function rubahHuruf(sentence : string) : string{
    const alphabetBob = "KLMNOPQRSTUVWXYZABCDEFGHIJ";
    let result = '';

    for(let i = 0; i < sentence.length; i++){
        const char = sentence[i];
        const index = char.toUpperCase().charCodeAt(0) - 65;

        if(index >= 0 && index <= 25){
            const newChar = alphabetBob[index];
            result  += char === char.toUpperCase() ? newChar : newChar.toLowerCase();
        } else {
            result += char;
        }
    }     

    return result;
}

console.log(rubahHuruf("SEPULSA OKE"));