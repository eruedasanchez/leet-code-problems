function hIndex(citations: number[]): number {
    const orderedCitations = citations.sort((a, b) => b - a);
    
    let i = 0;
    while (orderedCitations[i] >= i) {
        i++;
    }
    return orderedCitations[i-1];
};

// const bladsds = hIndex([1,3,1]);
// console.log('result', bladsds)


// console.log('valor i antes:', i);
//         console.log('orderedCitations[i-1]:', orderedCitations[i]);
// console.log('valor i desp:', i);