



arr = [20, 30, 58, 49]

largest = arr[0]
second_largest = arr[0]

for i in range(len(arr)):

    if arr[i] > largest:
        second_largest = largest
        largest = arr[i]

    elif arr[i] > second_largest and arr[i] != largest:
        second_largest = arr[i]

print("Largest:", largest)
print("Second Largest:", second_largest)





      

