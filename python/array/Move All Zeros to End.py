# Move All Zeros to End

# Input: [1,0,2,0,3,4]

# # Output: [1,2,3,4,0,0]

arr = [1,0,2,0,3,4]

result = []

for num in arr:
    if num != 0:
        result.append(num)

while len(result) < len(arr):
    result.append(0)

print(result)




