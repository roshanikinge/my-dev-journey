#Here are some practice implementation questions for Single Inheritance in Python:
# Create a class Animal with a method sound().
# Create a derived class Dog that adds a method bark().

class Animal():
    def Sound(self):
        print("Animal makes sound")
class Dog(Animal):
    def Bark(self):
        print("dogs barks")
    
obj1=Dog()
obj1.Sound()
obj1.Bark()


# Create a class Person with attributes name and age.
# Inherit a class Student with an additional attribute marks.


class Person():
    def __init__(self,name,age):
        self.name=name
        self.age=age
class Student(Person):
    def __init__(self,marks,name,age):
        self.marks=marks
        Person. __init__(self,name,age)   #we can used supper() also to invoked the class a

obj2=Student(20,"roshani",21)
print(obj2.name)
print(obj2.age)
print(obj2.marks)


# Create a class Vehicle with method display_vehicle().
# Create a child class Car with method display_car().


class Vechicle():
    def __init__(self,price,color):
        self.price=price
        self.color=color

    def display_vechile(self):
        print("v_price",self.price)
        print("v_color",self.color)

class Car(Vechicle):
    def __init__(self,name,price,color):
         self.name=name
         super() .__init__(price,color)
    
    def display_car(self):
        print("car_name",self.name)
        print("car_price",self.price)
        print("car_color",self.color)

obj3=Car("car1",20000,"black") 
obj4=Vechicle(4000,"blue")  
# print(obj3.name,obj3.price,obj3.color)  
obj4.display_vechile()
obj3.display_car()



# Create a class Employee with attributes emp_id and salary.
# Derive a class Manager with an additional attribute department.

class Employee():
    def __init__ (self,emp_id,salary):
        self.emp_id=emp_id
        self.salary=salary

class Manager(Employee):
    def __init__(self,department,emp_id,salary):
        self.department=department
        super().__init__ (emp_id,salary)

obj5=Manager("cs",11,50000)
print("department =",obj5.department ,
      "emp_id=", obj5.emp_id ,
        "salary =",obj5.salary)



# Create a class Shape with method area().
# Derive a class Rectangle to calculate the area of a rectangle.


class Shape():
    def __init__(self,length,width):
        self.length=length
        self.width=width
    
    def area(self):
        print("area method:")
    
class Reactangle(Shape):
    def __init__(self,length,width):
        super().__init__(length,width)

    def area(self):
        print("area of reactangle=",self.length*self.width)

obj6=Reactangle(5,6)
obj6.area()



# Create a class BankAccount with methods deposit() and withdraw().
# Create a derived class SavingsAccount with an additional method add_interest().

class BankAccount():
    def __init__(self,acc_name,acc_no,acc_phoneno):
         self.acc_name=acc_name
         self.acc_no=acc_no
         self.acc_phoneno=acc_phoneno

    def deposit(self):
        print("deposit money")
    

    def withdraw(self):
        print("withdraw money")
class SavingAccount(BankAccount):
    def __init__(self,avaible_bal,acc_name,acc_no,acc_phoneno):
        self.avaible_bal=avaible_bal
        super().__init__(acc_name,acc_no,acc_phoneno)
    
    def add_interest(self):
        print("intreset")

obj7=SavingAccount(2000000,"roshani",2020,9322036507)
print("acc_holder_name=" , obj7.acc_name ,
      "acc_number=",obj7.acc_no,
      "acc_phoneno=",obj7.acc_phoneno )
obj7.deposit()
obj7.withdraw()
obj7.add_interest()



# Create a class Book with attributes title and author.
# Derive a class EBook with an additional attribute file_size.


class Book():
    def __init__(self,title,author):
        self.title=title
        self.author=author

class Ebook(Book):
    def __init__(self,file_size,title,author):
        self.file_size=file_size
        super().__init__(title,author)

obj8=Ebook(78,"Alice in Wonderland","Lewis Carroll")
print(obj8.file_size)
print(obj8.title)
print(obj8.author)



# Create a class Mobile with method show_brand().
# Create a child class Smartphone with method show_features().


class Mobile():
    def __init__(self,phone_brand):
        self.phone_brand=phone_brand
    
    def show_brand(self):
        print("phone_brand",self.phone_brand)

class Smartphone(Mobile):
    def __init__(self,phone_battery,phone_ram,phone_storage,phone_brand):
        self.phone_battery=phone_battery
        self.phone_ram=phone_ram
        self.phone_storage=phone_storage
        super().__init__(phone_brand)

    def show_features(self):
        print("Phone_features" ,self.phone_battery,self.phone_ram,self.phone_brand,self.phone_storage)


obj9=Smartphone("70mh",16,128,"MI")
obj9.show_brand()
obj9.show_features()


# Create a class College with method college_info().
# Derive a class Department with method department_info().


class College():
    def __init__(self,clg_name,clg_add,clg_opentime,clg_closetime):
        self.clg_name=clg_name
        self.clg_add=clg_add
        self.add_opentime=clg_opentime
        self.clg_closetime=clg_closetime
    
    def college_info(self):
        print("college_info=","clg_name",self.clg_name,
              "clg_add",self.clg_add ,
              "clg_opentime",self.add_opentime,
              "clg_closetime",self.clg_closetime)
        
class Department(College):
    def __init__(self,dpt_name,dpt_member,clg_name,clg_add,clg_opentime,clg_closetime):
        self.dpt_name=dpt_name
        self.dpt_member=dpt_member
        super().__init__(clg_add,clg_name,clg_opentime,clg_closetime)
    
    def departement(self):
        print("department_info=","dpt_name",self.dpt_name,
              "dpt_member",self.dpt_member)
        
obj10=Department("Computer_Science",11,"Fergusson_college","pune,fc road","9.30Am","5.30pm")
obj10.college_info()
obj10.departement()


# Create a class Account with attribute balance.
# Derive a class CurrentAccount with method minimum_balance_check().

class Account():
    def __init__(self,balance):
        self.balance=balance

class CurrentAccount(Account):
    def __init__(self,Acc_holderName,balance):
        self.Acc_holderName=Acc_holderName
        super().__init__(balance)

    def minimum_balance_check(self):
        print("minimum_balance_check", self.balance)

obj11=CurrentAccount("roshani",200000000)
obj11.minimum_balance_check()
print("Account_holderName",obj11.Acc_holderName)
