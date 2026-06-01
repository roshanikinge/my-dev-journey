# # Find Largest Character Alphabetically
# Input: "python"

# Output: y

str="python"
largest=""
for ch in str:
    if ch > largest:
        largest=ch
print(largest)