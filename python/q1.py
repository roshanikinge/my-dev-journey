# for i in range (2,5):
#     print(i)
    
# for n in range (2,21,2):
#     print(n, end="\n")


# a=int(input())
# b=int(input())
# c=a+b
# print(c)



#Write a program to show local vs global variable behavior.


# x=10 #global Variable
# def my_fun():
#     x=20 #local Variable
#     print(x)
# res=my_fun()
# print(res) 
# print(x)

#output : 20 None 10 Bcz first print(local scope then funtion all things after that global variable )



#Use global keyword and modify a global variable inside a function.

# x=10
# def my_fun1():
#     global x   #“Don’t create a new variable”
#     x=20 #but this change the value of x and its become 20
#     print(x)
# res=my_fun1()
# print(res)
# print(x)

# 🔹 Question 1: Counter

# 👉 Create a counter variable.

# 👉 Task:

# Write one function using global to increase count
# Write another function using return to increase count



Count = 0

# Global function
def fun():
    global Count
    Count = Count + 1

# Return function
def fun1(c):
    return c + 1

# Using global function
fun()
print("After global function:", Count)

# Using return function
Count = fun1(Count)
print("After return function:", Count)






