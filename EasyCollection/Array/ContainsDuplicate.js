/**
 * @param {number[]} nums
 * @return {boolean}
 */

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))

var containsDuplicate = function (nums) {
    var aux = new Map();
    for (i = 0; i < nums.length; i++) {
        var current = nums[i];
        if (aux.get(current) === true)
            return true;
        else
            aux.set(current, true);
    }

    return false;
};