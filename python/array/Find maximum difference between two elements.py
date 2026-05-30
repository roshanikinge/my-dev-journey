arr = [2, 3, 10, 6, 4, 8, 1]

max_diff = arr[1] - arr[0]

for i in range(len(arr)):
    for j in range(i + 1, len(arr)):
        if arr[j] - arr[i] > max_diff:
            max_diff = arr[j] - arr[i]

print("Maximum Difference:", max_diff)