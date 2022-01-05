console.log(intersect([1,2,2,1], [2,2]))

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect (nums1, nums2) {
    nums1.sort();
    nums2.sort();

    var len = 0;

    if (nums1.length > nums2.length)
        len = nums2.length;
    else
        len = nums1.length;

    var result = [];

    var i = 0;
    var j = 0;

    for (k = 0; k < len; k++) {
        if (nums1[i] == nums2[j]) {
            result.push(nums[i]);
            j++;
            i++;
        }

        if (nums1[i] < nums2[j])
            i++;
        else
            j++;
    }

    return result;
};