def first_occurrence(arr, target):

    left = 0
    right = len(arr) - 1
    res = -1

    while left <= right:

        mid = (left + right) // 2

        if arr[mid] == target:
            res = mid
            right = mid - 1

        elif arr[mid] < target:
            left = mid + 1

        else:
            right = mid - 1

    return res


arr = [10,20,20,20,30,40]
target = 20


print(first_occurrence(arr, target))