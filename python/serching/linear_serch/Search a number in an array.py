def serch_element (arr,target):
    for i in range(len(arr)):
        if arr[i]==target:
            return True
    return False

arr=[30,49,59,60,46]
target=49

print(serch_element(arr,target))



# Implementation (Linear Search) normal way

arr=[45,69,50,40]
target=45
found=False
for i in range(len(arr)):
    if arr[i]==target:
        found =True
        break

if found:
    print("target found:")
else:
    print("target not found:")


