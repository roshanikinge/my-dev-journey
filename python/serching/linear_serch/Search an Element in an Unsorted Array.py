# arr = [45, 12, 78, 23, 90]
# target = 23

# Output:
# Found at index 3

def serch_ele(arr,target):

    for i in range(len(arr)):
        if arr[i]==target:
            return i
    return -1

arr=[45,12,78,23,90]
target=23

res=serch_ele(arr,target)

if res !=-1:
    print("ele found at index",res)
else:
    print("elemnt not found")


