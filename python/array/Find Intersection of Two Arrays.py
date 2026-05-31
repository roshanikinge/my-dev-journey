


# Intersection = Elements common in both arrays.



# Find Intersection of Two Arrays
# arr1 = [1,2,3,4]
# arr2 = [3,4,5,6]

# Output:
# [3,4]

arr1=[1,2,3,4]
arr2=[3,4,5,6]
intersection=[]

for i in arr1:
    for j in arr2:
        if i==j:
            intersection.append(j)
print(intersection)


# best way to this code 

# arr1 = [1,2,3,4]
# arr2 = [3,4,5,6]

# intersection = []

# for i in arr1:
#     if i in arr2:
#         intersection.append(i)

# print(intersection)




