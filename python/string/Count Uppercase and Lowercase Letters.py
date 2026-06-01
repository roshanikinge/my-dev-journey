# # Count Uppercase and Lowercase Letters
# Input: "HeLLo123"

# Output:
# Uppercase = 3
# Lowercase = 2

str="HeLLo123"
lower=0
upper=0
for ch in str:
    if ch.islower() :
        lower+=1
    elif ch.isupper():
        upper+=1
print(lower)
print(upper)