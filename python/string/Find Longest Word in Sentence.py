# Input: "I love programming"
# Output: programming

str= "I love programming"
words=str.split()

longest_words=""

for word in words:
    if len(word)>len(longest_words):
        longest_words=word
print(longest_words)


