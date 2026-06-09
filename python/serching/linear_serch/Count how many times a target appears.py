def count_target(arr, target):
    count = 0

    for i in arr:
        if i == target:
            count += 1

    return count


arr = [10, 20, 20, 30]
target = 20

print(count_target(arr, target))