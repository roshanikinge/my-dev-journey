# Input:
# I love Python

# Output:
# I evol nohtyP

s = "I love Python"

words = s.split()

result = []

for word in words:
    result.append(word[::-1])

print(" ".join(result))


