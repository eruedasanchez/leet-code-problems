const majorityElement = (nums: number[]) : number => {
    let limitAppear = Math.trunc(nums.length / 2);
    let valuesOcurrences: [number, number][] = [];

    for (let i = 0; i < nums.length; i++) {
        let indexCurrentOcurrenceValue = valuesOcurrences.findIndex(tuple => tuple[0] === nums[i]);
        let currentValueOcurrences: [number, number] = [-1, -1];

        if(indexCurrentOcurrenceValue === -1){
            currentValueOcurrences[0] = nums[i];
            currentValueOcurrences[1] = 1; 
            valuesOcurrences.push(currentValueOcurrences);
        } else {
            valuesOcurrences[indexCurrentOcurrenceValue][1]++;
        }
    }

    let j = 0;
    while(j < valuesOcurrences.length && valuesOcurrences[j][1] <= limitAppear){
        j++;
    }
    return valuesOcurrences[j][0];
}
