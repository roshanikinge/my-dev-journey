arr=[35,45,56,67]

largest=arr[0]

for i in range (len(arr)):
   
    if arr[i]>largest:
        largest=arr[i]

print("largest_element:",largest)
