# A pangram contains all 26 English letters.

# Input:
# "The quick brown fox jumps over the lazy dog"

# Output:
# True

s="The quick brown fox jumps over the lazy dog"

letters = set()

for ch in s.lower():
    if ch.isalpha():
        letters.add(ch)

print(len(letters) == 26)

