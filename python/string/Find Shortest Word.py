# Input: "I love Python programming"

# Output: I

str= "I love Python programming"

words=str.split()
shortest_word=words[0]

for word in words:
    if len(word)<len(shortest_word):
        shortest_word=word
print(shortest_word)

