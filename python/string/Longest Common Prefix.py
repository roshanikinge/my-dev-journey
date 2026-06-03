# # Longest Common Prefix
# Input:
# ["flower","flow","flight"]

# Output:
# fl

arr = ["flower","flow","flight"]

prefix = arr[0]

for word in arr[1:]:
    while not word.startswith(prefix):
        prefix = prefix[:-1]

print(prefix)