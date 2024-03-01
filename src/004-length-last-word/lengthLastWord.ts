function lengthOfLastWord(s: string): number {
    const wordsArray = s.trim().split(' ');
    const lastWord = wordsArray[wordsArray.length - 1];
    
    return lastWord.length; 
};

