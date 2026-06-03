# Check if Two Strings Are Equal Without Using ==

# Input:
# hello
# hello

# Output:
# Equal



# 1st apporach
str1="hello"
str2="hello"

if str1 !=str2:
    print("not equal")
else:
    print("equal")


# 2nd approach
str1="hello"
str2="hello"

equal=True

for i in range(len(str1)):
    if str1[i] != str2[i]:
        equal=False
        break

if equal:
    print("equal")
else:
    print("not equal")
    



