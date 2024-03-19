const isSubsequence = (s: string, t: string) : boolean => {
    let coincidences = 0, currentValueS = '';
    
    for (let indexT = 0; indexT < t.length && coincidences < s.length; indexT++) {
        currentValueS = s[coincidences];
        if(currentValueS === t[indexT]){
            coincidences++;
        }  
        
    }
    return coincidences === s.length;
}
