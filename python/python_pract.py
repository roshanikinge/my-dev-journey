
# 1. Reverse a String

string="roshani"
print(string[::-1])


# 2. Check Palindrome

string2="mam"

if string2==string2[::-1]:
    print("palindrome")
else:
    print("not palindrome")


# 3. Find Largest Number in List

string3=[23,56,78,89]
max_no =string3[0]

for i in string3:
    if i >max_no:
       max_no=i
   
print(max_no)


# 4. Swap Two Numbers

a=20
b=30
temp=a
a=b
b=temp
print("b:",b)
print("a:",a)

# 5. Count Vowels in String

s="education"

x=s.split()
count=0
for i in s:
    if i in "aeiuosAEIOUS":
        count=count+1
print(count)



        

