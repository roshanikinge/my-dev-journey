arr = [2, 3, 10, 6, 4, 8, 1]

max_diff=arr[1]-arr[0]
num1=arr[0]
num2=arr[1]

index1=0
index2=0
for i in range(len(arr)):
    for j in range(i+1,len(arr)):

        if arr[j]-arr[i]> max_diff:
            max_diff=arr[j]-arr[i]
            num1=arr[i]
            num2=arr[j]

            index1=i
            index2=j

print(max_diff)
print("pair",num1,num2)
print("indexs:",index1,index2)





