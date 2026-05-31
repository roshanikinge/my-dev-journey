# # Find First Non-Repeating Character
# Question
# Input: "aabbcde"
# Output: c

s = "aabbcde"

for ch in s:
    if s.count(ch) == 1:
        print(ch)
        break
    