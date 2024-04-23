const isIsomorphic = (s: string, t: string) : boolean => {
    const dictionary: { [key: string]: string } = {};

    for (let i = 0; i < s.length; i++) {
        const currentKey = s[i];
        const currentValue = t[i];
        
        if (dictionary[currentKey]) {
            if (dictionary[currentKey] !== currentValue) return false;
        } else {
            let tupleWithSameValue = Object.entries(dictionary).find(tuple => tuple[1] === currentValue);
            
            if (tupleWithSameValue) {
                if (tupleWithSameValue[0] !== currentKey) return false;    
            } else {
                dictionary[currentKey] = currentValue;
            } 
        }
    }
    return true;
};