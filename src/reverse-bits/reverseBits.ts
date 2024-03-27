const BINARY_NUM_LENGTH = 32, BINARY_BASE = 2, BIT_ZERO = '0';

const reverseBits = (n: number) : number => {
    let binaryString = n.toString(BINARY_BASE).split('');
    let leadingZeros = BINARY_NUM_LENGTH - binaryString.length; 
    
    while(leadingZeros > 0){
        binaryString.splice(0,0,BIT_ZERO);
        leadingZeros--;
    }
    
    for (let i = 0; i < Math.trunc(binaryString.length / 2); i++) {
        let tmpBit = binaryString[i]
        binaryString[i] = binaryString[binaryString.length-1-i];
        binaryString[binaryString.length-1-i] = tmpBit;
    }
    
    let integerNumber = 0;
    for (let bit = 0; bit < binaryString.length; bit++) {
        integerNumber += Math.pow(BINARY_BASE, bit) * parseInt(binaryString[binaryString.length-1-bit]);
    }
    return integerNumber;
};

