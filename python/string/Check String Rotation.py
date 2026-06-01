# # Check String Rotation
# Input: "abcd", "cdab"
# Output: True
s1 = "abcd"
s2 = "cdab"

if len(s1) == len(s2) and s2 in (s1 + s1):
    print(True)
else:
    print(False)