# # Find Leaders in Array
# An element is a leader if all elements to its right are smaller.
# A leader is an element whose right-side elements are all smaller.

# Input:
# [16,17,4,3,5,2]

# Output:
# 17 5 2


arr = [16,17,4,3,5,2]
leader = []

for i in range(len(arr)):
    is_leader = True

    for j in range(i+1, len(arr)):
        if arr[j] > arr[i]:
            is_leader = False
            break

    if is_leader:
        leader.append(arr[i])

print(leader)









