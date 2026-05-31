# arr = [1, 2, 3, 4, 5]

# is_sorted = True

# for i in range(len(arr) - 1):
#     if arr[i] > arr[i + 1]:
#         is_sorted = False
#         break

# print(is_sorted)


arr=[3,2,4,5]

is_sorted=True

for i in range(len(arr)):

    for j in range(i+1,len(arr)):
        
        if arr[i]>arr[j]:
         is_sorted=False
         break

print(is_sorted)


