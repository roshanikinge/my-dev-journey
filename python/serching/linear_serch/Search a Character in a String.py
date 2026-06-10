def search_char(s, target):

    for i in range(len(s)):
        if s[i] == target:
            return i

    return -1


s = "python"
target = "h"

res = search_char(s, target)
print(res)