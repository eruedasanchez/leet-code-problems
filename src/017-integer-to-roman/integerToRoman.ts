type DecimalValue = [number, string];

const Roman: Record<string, DecimalValue> = {
    1: [1, 'I'], 
    2: [2, 'II'], 
    3: [3, 'III'],
    4: [4, 'IV'],
    5: [5, 'V'],
    6: [6, 'VI'], 
    7: [7, 'VII'],
    8: [8, 'VIII'],
    9: [9, 'IX'],
    10: [1, 'X'], 
    20: [20, 'XX'], 
    30: [30, 'XXX'],
    40: [40, 'XL'],
    50: [50, 'L'],
    60: [60, 'LX'], 
    70: [70, 'LXX'],
    80: [80, 'LXXX'],
    90: [90, 'XC'],
    100: [100, 'C'], 
    200: [200, 'CC'], 
    300: [300, 'CCC'],
    400: [400, 'CD'],
    500: [500, 'D'],
    600: [600, 'DC'], 
    700: [700, 'DCC'],
    800: [800, 'DCCC'],
    900: [900, 'CM'],
    1000: [100, 'M'], 
    2000: [200, 'MM'], 
    3000: [300, 'MMM'],
};

const intToRoman = (num: number) : string => {
    let numberDigits = num.toString().split('');
    for (let i = numberDigits.length - 1; i >= 0; i--) {
        let currentProduct = Math.pow(10, numberDigits.length-i-1) * parseInt(numberDigits[i]);
        if(currentProduct !== 0){
            numberDigits[i] = Roman[currentProduct][1];
        } else {
            numberDigits[i] = '';
        }
    }
    const romanNumber = numberDigits.join('');
    return romanNumber;
};

