function longestCommonPrefix(strs: string[]): string {
    let maxCommonPrefix = '';
    
    if(strs.length === 1){
        return strs[0];
    }

    let end = 0, finalEnd;
    while(end < strs[0].length){
        let idxCurrentWord = 0;
        while(idxCurrentWord < strs.length && 
            strs[0].substring(0,end+1) === strs[idxCurrentWord].substring(0,end+1)){
                console.log('j', strs[0].substring(0,end+1));
                console.log('end:', end);
                idxCurrentWord++;
        }

        if(idxCurrentWord === strs.length){
            end++; 
        } else {
            finalEnd = end;
            end = strs[0].length;
        }
    }
    maxCommonPrefix = strs[0].substring(0,finalEnd); 
    return maxCommonPrefix;
};


let blabla = longestCommonPrefix(["flor","flujo","vuelo"]);
console.log('resultado:', blabla);

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// ["flower","flower","flower","flower"]

// ["flor","flujo","vuelo"]

// 'f', 'f', 'v'

// calcular primero la long de la palabra mas chica 

// for recorriendo las letras 



// ["flower","flow","flight"]
// ["flower","flower","flower","flower"]
// ["flower"] ok





// FUNCIONA PERO MEJORAR EL RENDIMIENTO