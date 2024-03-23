function hIndex(citations: number[]): number {
    const orderedCitations = citations.sort((a, b) => b - a);
    let indexH = 0;

    for (let publicationNumber = 1; publicationNumber <= orderedCitations.length && orderedCitations[publicationNumber-1] >= publicationNumber; publicationNumber++) {
        indexH++;
    }
    
    return indexH;
};

