const isPalindrome = (s: string) : boolean => {
    let palindrome = true;
    let letters = s.toLowerCase().split('');
    const alphabeticRegex = /[a-zA-Z0-9]+/g; 
    
    letters = letters.filter(letter => letter.match(alphabeticRegex));

    if(letters.length !== 0){
        let j = 0;
        while(j < Math.trunc(letters.length / 2) && letters[j] === letters[(letters.length-1) - j]) {
            j++;
        }
        
        if(!(j === Math.trunc(letters.length / 2))) palindrome = false;
        
    }
    return palindrome;  
};
