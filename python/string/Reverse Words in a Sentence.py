# Input: "I love Python"
# Output: "Python love I"

str="I love Python"

words=str.split()
print (words)

print("" . join(words[::-1]))