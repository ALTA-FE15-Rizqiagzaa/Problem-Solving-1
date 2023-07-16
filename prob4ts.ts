function caesarCipher(offset: number, input: string): string{
    let result = '';

    for(let i = 0; i < input.length; i++){
        const char = input[i];

        if(char === ' '){
            result += ' ';
        } else{
        }
    }

    return result;
}

console.log(caesarCipher(3, "abc"));