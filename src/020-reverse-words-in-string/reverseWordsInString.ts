const reverseWords = (s: string) : string => {
    let words:string[] = s.trim().split(' '); 
    let wordsWithoutSpaces = words.filter(word => word !== '');

    for (let i = 0; i < wordsWithoutSpaces.length / 2; i++) {
        const tmp_word = wordsWithoutSpaces[i];
        wordsWithoutSpaces[i] = wordsWithoutSpaces[(wordsWithoutSpaces.length-1) - i]
        wordsWithoutSpaces[(wordsWithoutSpaces.length-1) - i] = tmp_word;
    }

    const wordsWithoutSpacesString = wordsWithoutSpaces.join(' ');

    return wordsWithoutSpacesString;
};



