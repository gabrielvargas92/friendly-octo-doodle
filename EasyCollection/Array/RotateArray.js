rotate([1,2,3,4,5,6,7],3);

function rotate(nums, k) {
    var result = [];
    for (let i = 0; i < nums.length; i++) {
        var finalIndex = 0;
        if ((i + k) >= nums.length)
            finalIndex = (i + k) % nums.length;
        else
            finalIndex = i + k;

        result[finalIndex] = nums[i];
    }

    console.log(result);
}

function reverse(nums, start, end){
    
}