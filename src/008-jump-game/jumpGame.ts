const WALL = 0;

const canJump = (nums: number[]) : boolean => {
    let reachToTheFinal = true;
    let mainIndex = 0;
    while (mainIndex < nums.length - 1) {
        let jumper = mainIndex;
        while(jumper < nums.length - 1 && nums[jumper] !== WALL){
            jumper += nums[jumper];
        }

        if(jumper >= nums.length - 1){
            mainIndex = nums.length;
        } else {
            let backsteps = jumper-1;  
            while (backsteps >= 0 && backsteps < nums.length && backsteps + nums[backsteps] <= jumper) {
                backsteps--;
            }
        
            if(backsteps < 0){
                reachToTheFinal = false;
                mainIndex = nums.length;
            } else if(nums[backsteps] === WALL){
                mainIndex = backsteps;
            } else if(backsteps + nums[backsteps] > jumper){
                mainIndex = backsteps + nums[backsteps]; 
            }
        }
    }
    return reachToTheFinal;
}
