# Here are some basic Pandas implementation practice questions:


#######################################   Basic DataFrame Questions #################
# 🔹 1. Create DataFrame

# Create a DataFrame with:

# name
# age
# city

# and display it.


import pandas as pd # import lib

data={
    "name":["roshani","rahaul","sunil"],
    "age":[22,24,45],
    "city":["pune","buldana","mumbai"]

} #create dic
var=pd.DataFrame(data) #make data into dataframe and stored into var
print(var)



# 2.

# Create a DataFrame for employees containing:

# emp_id
# emp_name
# salary

# Print all employee details.


import pandas as pd

data2={
    "emp_name" :["riya","siya"],
    "emp_id " :[23,24],
    "salary " :[45000,450000]

}
var2=pd.DataFrame(data2)
print(var2)


# 4.

# Create a DataFrame using dictionary of lists.

import pandas as pd

data = {
    "name": ["Roshani", "Rahul", "Priya"],
    "age": [22, 21, 20],
    "city": ["Pune", "Mumbai", "Delhi"],
    "marks":[90,80,70]
}

df = pd.DataFrame(data)

print(df)



# Column Operations

# 6.

#  display only:

# name
# marks
# columns.

print(df[["name","marks"]])


# 7.

# Add new column grade to existing DataFrame.
df["grade"]=["A+","B+","AB+"]
print(df)


# 8.

# Rename a column in DataFrame.
df=df.rename(columns={"name":"Student_name"})
print(df)


# 9.

# Delete a column from DataFrame.

df=df.drop("city",axis=1)
print(df)

# 10.

# Display total number of columns in DataFrame.
print(len(df.columns))


# 🔹 1. Selection

# Create a DataFrame of employees and display only emp_name and salary columns

import pandas as pd

data3={
    "emp_name":["rk","ek","sk"],
    "emp_sal":[2000000000 ,3000000, 300000]

}

var3=pd.DataFrame(data3)
print(var3)

# 🔹 2. Addition

# add a new column result based on marks.

var3["marks"]=[100,50,30]
print(var3)

var3["result"]=[ "Pass" if mark >=50 else "fail" for mark in var3["marks"]]
print(var3)


# 🔹 3. Deletion

#  remove the category column.

var3["category"]=["Sc","OBC","st"]
print(var3)

var3=var3.drop("category",axis=1)
print(var3)

# 🔹 4. Renaming

#  rename column emp_name to emp_id.
var3=var3.rename(columns={"emp_name":"emp_id"})
print(var3)


# 🔹 5. Updating / Modifying

# Create a DataFrame of employees and increase all salaries by 10%.

var3["emp_sal"]=[s*1.10  for s in var3["emp_sal"]]
pd.set_option('display.float_format', '{:.0f}'.format)
 
print(var3)


# 6. Filtering Columns

#  only text (object) type columns.
print("numberdatatype_column is:\n",var3.select_dtypes(include="number"))
print("string_datatypecolumn:\n",var3.select_dtypes(include="str"))



# 🔹 7. Sorting based on column

#  emp_name and sort them based on salary in descending order
var3=var3.sort_values(by="emp_sal",ascending=False)
print(var3)




# 🔹 8. Multiple Column Operation

# Create a DataFrame of employees:

# select emp_name, department
# add bonus column
# sort by salary

import pandas as pd
data4={
    "emp_name":["pratiksha","kinge"],
    "department":["cs","marketing"],
    "salary": [200000000 ,5000000000]
}

var4=pd.DataFrame(data4)
print(var4)

# Select emp_name and department
print(var4[["emp_name", "department"]])

var4["bonus"]=[20000,20000]
print(var4)

var4=var4.sort_values(by="salary",ascending=True)
print(var4)



# 🔹 9. Column Value Replacement

# Create a DataFrame and replace all values in city column with "Pune".

import pandas as pd
data={
    "city":["mumbai","nashik"]

}
var5=pd.DataFrame(data)
print(var5)

# Replace all city values with "Pune"
var5["city"] = "Pune"
print(var5)


# 🔹 10. Check Column Names

# Create a DataFrame and display all column names.
import pandas as pd
data6={
    "emp_name":["pratiksha","kinge"],
    "department":["cs","marketing"],
    "salary": [200000000 ,5000000000]
}

var6=pd.DataFrame(data6)
print(var6)
print(var6.columns) #output Index(['emp_name', 'department', 'salary'], dtype='str')
pd.set_option('display.max_columns', None)  #Show all columns, do not hide anything.”

#end

# Here are implementation questions for Row Operations in Pandas 👍

# 🔹 Row Selection
# 1.

# Create a DataFrame of students and display the first row.

import pandas as pd
data7={
    "student_name":["roshani","sunil"],
    "age":[22,56],
    "city":["pune","mumbai"]
}

var7=pd.DataFrame(data7)
print(var7)

print(var7.iloc[0])

# 2. Display rows from index 1 to 3
print(var7.iloc[1:4])

# 3. Display last row
print(var7.iloc[-1])

# 🔹 4. Add new row
var7.loc[len(var7)]=["pratiksha",20,"mumbai"]
print(var7)

# 5. Add multiple rows
# new_rows=pd.DataFrame({
#     "marks":[200,3000,3000],
#     "salary":[700000,400000,500000000]
# })
# var7=pd.concat([var7,new_rows],ignore_index=True)
# print("final\n",var7)


new_rows = pd.DataFrame({
    "name": ["Amit", "Neha"],
    "marks": [90, 88]
})

df = pd.concat([df, new_rows], ignore_index=True)

print(df) 

# 🔹 6. Delete row with index 2

# var7=var7.drop(2)
# print(var7)

# # 🔹 8. Delete multiple rows
# # var7=var7.drop([0,2])
# # print(var7)[var7["marks"]>80]


# )
# # 🔹 9. Students with marks > 80
# print(var7[var7["marks"]>80])

# # 🔹 12. Sort students by marks ascending
# var7 = var7.sort_values(by="marks", ascending=True)

# print(var7)

# # 🔹 13. Sort employees salary descending
# var7= var7.sort_values(by="salary", ascending=False)

# print(var7)





# Add 5 student rows

import pandas as  pd 
data ={
    "name":["rk","sk","sg"],
    "age":[20,30,40]
}

df=pd.DataFrame(data)

#single row can add this 
df.loc[len(df)]=["rg",20]
print(df)


print("multiple rows add :")

#multiple rows can add like this

import pandas as pd 
data= {
    "name":["riya","siya"],
    "age":[20,39]
}

df=pd.DataFrame(data)
new_rows=pd.DataFrame({
    "name":["priya","sunil","roshani","kinge"],
    "age":[30,49,59,60]
})
df=pd.concat([df,new_rows],ignore_index=True)
print(df)
#print last row only 
print("print last row",df.tail(3))
#print first rows only
print("print fisrt row:",df.head(1))



# Delete last row
print("delet last row ",df[:-1])




# #delete first row
df=df.drop(0)
print(df)

# Print students with marks > 75

import pandas as pd
data={
    "name":["siya","priya"],
    "marks":[300,400]
}

df=pd.DataFrame(data)
print(df[df["marks"]>75])

# Update student name

df.loc[0,"name"]="kiyara"
print(df)

print("print only first 2 rows:")
# Print only first 2 rows
print(df.loc[0:1])


# Find highest marks student

print(df[df["marks"]==df["marks"].max()])

# # Remove duplicate rows
print( df.drop_duplicates())

# #find duplicated

print(df[df.duplicated()])

# Count total rows
print(len(df))






import pandas as pd
import matplotlib.pyplot as plt

data={
    
}

