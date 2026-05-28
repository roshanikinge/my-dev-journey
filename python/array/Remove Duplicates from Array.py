arr=[46,59,69,46]
unique=[]

for i in range (len(arr)):

   if i not in unique:
      unique.append(i)

print(unique)

