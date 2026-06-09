arr = [10, 20, 30, 40, 50]  

#Implementation 1 (Basic)
target=50
for i in range(len(arr)):
    if i == target:
        print("element found")

        break

#Implementation 2 (Print Index)

target=30
for i in range(len(arr)):
    if arr[i]==target:
        print("element found",i)
        break

# Implementation 3 (Element Not Found)

target=40 

found=False

for i in range (len(arr)):
    if arr[i]==target:
        found= True
        break

if found:
    print("found target",i)
else:
    print("not found target") 


# Implementation 4 (Function Version)


def linear_serch(arr,target):
    for i in range(len(arr)):
        if arr[i]==target:
            return i
    return-1

arr=[20,30,40,50]
target =40
found=False

result=linear_serch(arr,target)

if result != -1:
    print("element found:",i)
else:
    print("element not found:")

    
    


