# arr = [10, 20, 30, 20, 40]
# target = 20

# Output: 3


def last_occurrence(arr,target):
    for i in range(len(arr)):
        if arr[i]==target:
            return i
    return -1

arr=[10,20,30,20,40]
target=30

result=last_occurrence(arr,target)
print(result)
