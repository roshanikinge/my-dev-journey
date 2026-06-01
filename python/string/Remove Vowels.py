# Input: "programming"

# Output: "prgrmmng"

str="programming"

result=""
for ch in str:
    if ch.lower()and ch not in "aeiou":
        result=result+ch

print(result)