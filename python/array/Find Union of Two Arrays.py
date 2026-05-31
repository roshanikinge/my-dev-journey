
# Union = All unique elements from both arrays.




# Union of Two Arrays
# arr1 = [1,2,3]
# arr2 = [3,4,5]

# Output:
# [1,2,3,4,5]

arr1 = [1,2,3]
arr2 = [3,4,5]

union=arr1.copy()
for i in arr2:

    if i not in arr2:
        union.append(i)

print(union)
