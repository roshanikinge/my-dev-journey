arr=[45,68,57,80]
target=80
found=False


for i in range(len(arr)):

    if target==arr[i]:
        found=True
        break      
      #   "Once the target is found, there is no need to check 
      #                 the remaining elements. break exits the loop immediately and improves efficiency."


if found:
      print("target found")
else:
      print("not found")




# Another Python way (without found)

# Python has a special for-else:

arr = [49, 59, 67, 36]
target = 67

for i in range(len(arr)):
    if arr[i] == target:
        print("target found")
        break
else:
    print("not found")











