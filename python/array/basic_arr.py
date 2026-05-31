# what is x = arr[0]

arr=[90,48,59,30]

x=arr[0]

print(x)

# What is x = [] ?

x1=[]
x1.append(2)
x1.append(4)
print(x1)


# Print all indexes
arr1=[36,47,59,69]

for i in range(len(arr1)):
    print(i)


# Print all indexes
arr2=[20,39,40,59]

for i in arr2:
    print(i)


# Print all values
for i in range(len(arr)):
    print(i,arr[i])

# Print even numbers
arr3=[89,59,69,90]
even=[]
for i in range(len(arr)):
    if arr[i]%2==0:
        even.append(arr[i])
print(even)

# Count elements
arr4=[49,59,60,70]
count=0
for i in arr4:
    count=count+1
print(count)


# Find sum
arr5=[69,70,67,20]
total=0
for i in arr5:
    total=total+i
print(total)

# Check if value exists
arr6=[69,50,40,35]

x=69

if x in arr6:

    print ("found")
