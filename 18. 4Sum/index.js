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
        if (i>0) {while(nums[i-1]===nums[i]) i++};
        for(let j=i+1; j<=nums.length-3; j++) { 
            if (j>i+1) while(nums[j-1]===nums[j]) j++;
            left=j+1; right=nums.length-1;
            while(left<right) {
                sum=nums[i]+nums[j]+nums[left]+nums[right];
                if(sum===target) {
                    res.push([nums[i],nums[j],nums[left],nums[right]]);
                    do {left++} while(nums[left-1]===nums[left]);
                    do {right--} while(nums[right+1]===nums[right]);                    
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