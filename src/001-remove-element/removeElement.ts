// function removeElement(nums: (number | '_')[], val: number): number {
//     let distinctVal: '_'[] = [];  
    
//     for (let index = 0; index < nums.length; index++) {
//         while(nums[index] === val){
//             nums.splice(index, 1);
//             distinctVal.push('_');
//         }
//     }
    
//     nums = [...nums, ...distinctVal];
//     return nums.length - distinctVal.length;
// };

const removeElement = (nums: (number | '_')[], val: number) : number => {
    let valueOccurrences = 0;

    for (let i = 0; i < nums.length - valueOccurrences; i++) {
        if(nums[i] === val){
            valueOccurrences++;
            let tmpValue = nums[nums.length-valueOccurrences];
            nums[i] = tmpValue;

            if(tmpValue === val) i--;
            
            nums[nums.length-valueOccurrences] = '_'; 
        }
    }
    return valueOccurrences;
}
