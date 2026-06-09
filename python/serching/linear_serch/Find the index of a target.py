def find_index(arr,target):
    for i in range(len(arr)):
        if arr[i]==target:
          return i

    return -1
     
  


arr=[20,39,40,50]
target=39

result=find_index(arr,target)

print(result)
