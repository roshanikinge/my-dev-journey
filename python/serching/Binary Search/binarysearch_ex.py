def binary_search(arr, target):

    left = 0
    right = len(arr) - 1

    while left <= right:

        mid = (left + right) // 2

        if arr[mid] == target:
            return mid

        elif arr[mid] < target:
            left = mid + 1

        else:
            right = mid - 1

    return -1


arr = [10,20,30,40,50,60,70]
target = 50

result = binary_search(arr, target)

print(result)      


# Array:
# [10,20,30,40,50,60,70]

# Step 1:
# mid=3 → 40
# 50 > 40
# Move right side

# Step 2:
# mid=5 → 60
# 50 < 60
# Move left side

# Step 3:
# mid=4 → 50
# Found

# Return 4
