arr=[45,68,57,80]
target=80
found=False


for i in range(len(arr)):

    if target==arr[i]:
        found=True
        break


if found:
      print("target found")
else:
      print("not found")

      
