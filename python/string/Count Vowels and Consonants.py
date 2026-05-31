# Question
# Input: "hello"
# Output: vowels = 2, consonants = 3

str="hello"
v="aeiouAEIOU"
count_V=0
count_c=0
for ele in str:
    if ele in v:
        count_V=count_V+1
    else:
        count_c=count_c+1
print("v",count_V,"c",count_c)

        
