# Input:
# madam level hello racecar

# Output:
# racecar


s = "madam level hello racecar"

words = s.split()

longest = ""

for word in words:
    if word == word[::-1]:
        if len(word) > len(longest):
            longest = word

print(longest)