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
print(var6.columns)

#end
