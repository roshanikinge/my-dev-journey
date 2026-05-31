arr = [1, 2, 2, 3, 1, 4]

frequency = {}

for i in arr:      #For frequency counting, I need the array values, not the indexes.
    #   for i in arr gives me the elements directly, whereas range(len(arr)) gives me only the indexes."

    if i in frequency:
        frequency[i] += 1
    else:
        frequency[i] = 1

print(frequency)



# "I used a dictionary to store the frequency "
# "of each element. I traversed the array one by one. "
# "If the element was already present in the dictionary, "
# "I incremented its count by 1. Otherwise, I added it to the "
# "dictionary with a count of 1."

# For example:

# arr = [1, 2, 2, 3]



# "First 1 is added with count 1. When 2 appears again,"
# " its count is increased from 1 to 2. In this way, "
# "the dictionary stores how many times each element occurs."




