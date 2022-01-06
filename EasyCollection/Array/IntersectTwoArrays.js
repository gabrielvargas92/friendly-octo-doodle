console.log(intersect([61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55, 66, 82, 0, 79, 11, 81], [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48]))
//console.log(intersect([1, 2, 2, 1], [2, 2]))

function intersect(nums1, nums2) {
    if (nums1.length > nums2.length)
        return aux(nums2, nums1)
    else
        return aux(nums1, nums2)
};

function aux(nums1, nums2) {
    nums1.sort();
    nums2.sort();
    var i = 0;
    var j = 0;
    var result = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] == nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        }
        else {
            j++;
        }
    }

    return result;
}
//[5,4,57,79,7,89,88,45,34,92,38,85,6,0,77,44,61]