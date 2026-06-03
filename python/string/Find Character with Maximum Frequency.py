# # Find Character with Maximum Frequency
# Input: "banana"

# Output: a

str="banana"

frequency={}
for ch in str:
    if str.count(ch)>1:
        print(ch)
        frequency=frequency+1
    else:
        frequency=1
print(frequency)

 ################################### correct code ########################################
s = "banana"

max_char = ""
max_count = 0

for ch in s:
    count = s.count(ch)

    if count > max_count:
        max_count = count
        max_char = ch

print(max_char)
    