# arr = [1, 2, 3, 2, 4, 5, 1]

# duplicates = []

# for i in arr:
#     if arr.count(i) > 1:
#         duplicates.append(i)

# print(set(duplicates))



arr =[90,45,78,35,45]
duplicates=[]
for i in range (len(arr)):
   
    if arr.count(arr[i])>1:
        print(i)
        duplicates.append(arr[i])
       
print(duplicates)







# arr=[90,45,60,60]

# duplicates=arr[0]
# for i in range(len(arr)):
    
#     for j in range(i+1,len(arr)):
        
#         if arr[i]==arr[j]:
#             duplicates=arr[i]
#             

# print("duplictaes:",duplicates)
