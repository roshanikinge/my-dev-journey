arr = [1, 2, 2, 3, 1, 4]

frequency = {}

for i in arr:
    if i in frequency:
        frequency[i] += 1
    else:
        frequency[i] = 1

print(frequency)