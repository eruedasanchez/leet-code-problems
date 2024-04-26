const isAnagram = (s: string, t: string) : boolean => {
    let arrayS = s.split(''), arrayT = t.split('');
    if (arrayS.length !== arrayT.length) {
        return false;
    } else {
        let finished = false;
        for (let indexT = 0; indexT < arrayT.length && !finished; indexT++) {
            let currentLetter = arrayT[indexT];
            let idxCurrentLetterInS = arrayS.findIndex(letter => letter === currentLetter);
            idxCurrentLetterInS !== -1 ? arrayS.splice(idxCurrentLetterInS,1) : finished = true;
        }
        return !finished;
    }
};
