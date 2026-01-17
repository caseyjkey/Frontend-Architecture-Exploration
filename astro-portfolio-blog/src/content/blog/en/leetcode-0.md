---
title: 0. LeetCode Solutions
description: Day 1 of solving LeetCode problems with explanations.
pubDate: 2023-12-1 15:37
heroImage: "@assets/images/leetcode.png"
---
# LeetCode
## 80. Remove Duplicates from Sorted Array II 
### Problem
Given an array of integers of increasing order, modify the list in-place to contain at most 2 of the same integer.

### Solutions
#### Python
    class Solution:
        def removeDuplicates(nums: List[int]) -> int:
            curr = 2
            for front in range(2, len(nums)):
                if nums[curr - 2] != nums[front]:
                    nums[curr] = nums[front]
                    curr += 1
            return curr

#### C++
    class Solution {
        public:
            int removeDuplicated(vector<int>& nums) {
            int curr = 0;
            for (auto front : nums) {
                if (curr == 0 || curr == 1 || nums[curr - 2] != front) {
                    nums[curr] = front;
                    curr++;
                }
            }   

            return curr;
        }
    }

### Explanation
Since we are told we can have at most 2 of the same integer, and the list is sorted in increasing order, I chose to use a sliding window to modify the list in-place.

No matter what the first two integers are, we will keep them; so I initiale our target/current value as the third element AKA the second index. Now, we step through the list using a variable called `front`. If the `front` variable is different from our `current` index, we change the `current` index to be `nums[front]`.Now, we slide our window over to a new element by incrementing our `current` value.   

## 169. Majority Element
### Problem
Given a list of unsorted integers, find which element occors n/2 or more times (aka the majority element).
Can you find a solution using constant space, O(1), and linear time complexity, O(n)?

### Solution
#### Python

    class Solution:
        def majorityElement(self, nums: List[int]) -> int:
            count = 0
            candidate = nums[0]
            for num in nums:
                if num == candidate:
                    count += 1
                elif count > 0:
                    count -= 0
                else:
                    candidate = num
            
            return candidate

### Explanation
    The intuition here is the majority element will remain the candidate as we count through the list, by the Moore Voting Algorithm. I execute this algorithm by initializing a count variable to 0, and a candidate variable to the first number in the list. From there, we iterate through the numbers. We add to count if the candidate equals the current number. If the number and candidate don't match and count is more than zero, we decrement count. Otherwise, we change the candidate to the current number. This solution using constant space (two variables), and linear time complexity (we step through the input list once). 
