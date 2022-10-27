/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    let res=[], left, right, sum;
    if(nums.length<4) return [];
    nums.sort((n,m)=>n-m); 
    for(let i=0; i<=nums.length-4; i++) {
        if(nums[i]>target) return res;
        for(let j=i+1; j<=nums.length-3; j++) {     
            if(nums[i]+nums[j]>target) break;
            left=j+1; right=nums.length-1;
            while(left<right) {
                sum=nums[i]+nums[j]+nums[left]+nums[right];
                if(sum===target) {
                    res.push([nums[i],nums[j],nums[left],nums[right]]);
                    left++;
                    right--;
                } else {
                    if(sum>target) {
                        right--;
                    } else {
                        left++;
                    } 
                }
            }
        }
    } 
    return res;     
};