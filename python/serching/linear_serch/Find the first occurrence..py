def first_occurrence(arr,target):

    for i in range(len(arr)):
        if arr[i]==target:
            break
    return i

arr=[20,30,48,50]
target=30

result=first_occurrence(arr,target)
print(result)
