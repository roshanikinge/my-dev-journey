# # Remove Duplicate Characters
# Input: "programming"
# Output: "progamin"

str="programming"
duplicates=""
for ch in str:
    if ch not in duplicates:
        duplicates=duplicates+ch
print(duplicates)


