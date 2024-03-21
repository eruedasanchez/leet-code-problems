const lengthOfLongestSubstring = (s: string) : number => {
    let lengthLongestSubstring = 0, currentLengthLongestSubstring = 0;;
    for (let i = 0; i < s.length; i++) {
        let j = i;
        while (j < s.length && !s.substring(i,j).includes(s[j])) {
            currentLengthLongestSubstring++;
            j++;
        }
        if(currentLengthLongestSubstring >= lengthLongestSubstring){
            if(j === s.length) i = s.length;
            lengthLongestSubstring = currentLengthLongestSubstring;
        } 
        currentLengthLongestSubstring = 0;
    }
    return lengthLongestSubstring;
}
