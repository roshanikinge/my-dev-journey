# Input: "programming"
# Output: r

str="programming"

for ch in str:
    if str.count(ch)>1:
        print(ch)
        break
    