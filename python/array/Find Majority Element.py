# Find Majority Element
# A majority element is a number that appears more than half of the total array size.
# Input:
# [2,2,1,2,3,2,2]

# Output:
# # 2

arr=[2,2,1,2,3,2,2]

for i in arr:
    if arr.count(i) >len(arr)//2:
        print("Majority Element:",i)
        break
