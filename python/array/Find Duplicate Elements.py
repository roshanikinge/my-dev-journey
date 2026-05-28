arr = [1, 2, 3, 2, 4, 5, 1]

duplicates = []

for i in arr:
    if arr.count(i) > 1:
        duplicates.append(i)

print(set(duplicates))