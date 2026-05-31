# Find All Pairs with Given Sum
# Input: [1,2,3,4,5]
# Target = 5

# Output:
# (1,4)
# (2,3)

arr=[1,2,3,4,5]

Target=5
pairs=[]

for i in range(len(arr)):
    for j in range(i+1,len(arr)) :
        if arr[i]+arr[j]==Target:
            pairs.append((arr[i],arr[j]))
           


print("Pairs",pairs)


