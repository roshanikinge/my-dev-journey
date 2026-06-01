# Question
# Input: "apple"
# Output: a-1, p-2, l-1, e-1

str="apple"
frequency={}
for ch in str:
    if ch in frequency:
        frequency[ch]=frequency[ch]+1
    else:
        frequency[ch]=1
print(frequency)


    