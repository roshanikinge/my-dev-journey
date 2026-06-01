# Input: "programming"

# Output:
# r
# g
# m


str="programming"

duplicates=""
for ch in str:
    if str.count(ch)>1 and ch not in duplicates:
        duplicates=duplicates+ch
print(duplicates) 