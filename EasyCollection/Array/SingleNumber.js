/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    var xor = 0;
    for(i=0; i < nums.length ; i++){
        xor ^= nums[i];
    }
    
    return xor;
};