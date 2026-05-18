arr=[34,56,78,22,35,67]
odd=[]
even=[]

for i in range(len(arr)):

    if arr[i]%2==0:
        even.append(arr[i])
    else:
        odd.append(arr[i])
print("odd",odd)
print("even",even)




