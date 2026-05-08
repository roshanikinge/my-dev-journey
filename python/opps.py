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





#Here are some practice questions for Multilevel Inheritance in Python:

# Create a class Grandfather with method show_grandfather().
# Derive a class Father from Grandfather with method show_father().
# Derive a class Son from Father with method show_son().


class GrandFather():
    def __init__(self,g_name,g_age):
        self.g_name=g_name
        self.g_age=g_age
    
    def show_grandfather(self):
        print("show_grandfather_info=",self.g_name,self.g_age)
    
class Father(GrandFather):
    def __init__(self,f_name,f_age,g_name,g_age):
        self.f_name=f_name
        self.f_age=f_age
        super().__init__( g_name,g_age)

    def show_father(self):
        print("show_father_info=",self.f_age,self.f_name)

class Son(Father):
    def __init__(self,s_name,s_age,f_name,f_age,g_name,g_age):
        self.s_name=s_name
        self.s_age=s_age
        super().__init__(f_name,f_age,g_name,g_age)
    
    def show_son(self):
        print("show_son_info=",self.s_age,self.s_name)

obj12=Son("roshani",22,"sunil",56,"rakesh",86)
obj12.show_grandfather()
obj12.show_father()
obj12.show_son()






# 
#  Create a class Vehicle with attribute brand.
# Derive a class Car with attribute model.
# Derive a class SportsCar with attribute top_speed.
# 
# Create a class Person with attributes name and age.
# Derive a class Employee with attribute salary.
# Derive a class Manager with attribute department.
# 
# 
# Create a class Animal with method eat().
# Derive a class Mammal with method walk().
# Derive a class Dog with method bark().
# 
# 
# Create a class University with attribute university_name.
# Derive a class College with attribute college_name.
# Derive a class Department with attribute department_name.
# 
# 
# Create a class Account with attribute balance.
# Derive a class SavingsAccount with method deposit().
# Derive a class CurrentAccount with method withdraw().
# 
# 
# Create a class Electronics with attribute brand.
# Derive a class Mobile with attribute ram.
# Derive a class SmartPhone with attribute camera.
# 
# 
# Create a class Shape with method display_shape().
# Derive a class Rectangle with method rectangle_area().
# Derive a class Box with method box_volume().
# 
# 
# Create a class School with attribute school_name.
# Derive a class Teacher with attribute subject.
# Derive a class Student with attribute marks.
# 
# 
# Create a class Book with attribute title.
# Derive a class EBook with attribute file_size.
# Derive a class AudioBook with attribute duration.






    
#Here are some practice questions for Multiple Inheritance implementation in Python:

# Create a class Father with method show_father().
# Create a class Mother with method show_mother().
# Create a child class Child inheriting from both with method show_child().


############# by using super keywords this is advance########################
###############  we can also used as normal like invoked parent and mother
# class seperetly so no need to write super keyword but it is not to good##########


class Father():
    def __init__(self,f_name,f_age,**kwargs):
        self.f_name=f_name
        self.f_age=f_age
        super().__init__(**kwargs)
    
    def show_father(self):
        print("show_father_info=",self.f_name,self.f_age)

class Mother():
    def __init__(self,m_name,m_age,**kwargs):
        self.m_name=m_name
        self.m_age=m_age
        super().__init__(**kwargs)

    def show_mother(self):
        print("show_mother_info=",self.m_name,self.m_age)

class Child(Father,Mother):
    def __init__(self,c_name,c_age,f_name,f_age,m_name,m_age):
        self.c_name=c_name
        self.c_age=c_age
        super().__init__(f_name=f_name,f_age=f_age,m_name=m_name,m_age=m_age)
    
    def show_child(self):
        print("show_child_info",self.c_name,self.c_age,self.m_name,self.m_age,self.f_name,self.f_age)

obj13=Child("roshani",22,"renuka",40,"sunil",56)
obj13.show_child()

print(Child.mro())
#this is output of mro
# [<class '__main__.Child'>, 
#  <class '__main__.Father'>, 
#  <class '__main__.Mother'>,
#    <class 'object'>]
#  mro means method resolution method it is method
#  to serches the classes class c ,a,b







        

#
# Create a class Teacher with attribute subject.
# Create a class Researcher with attribute research_topic.
# Create a class Professor inheriting from both.
#
#  Create a class Engine with attribute engine_type.
# Create a class Wheels with attribute wheel_count.
# Create a class Car inheriting from both and add attribute car_name.
# 
# Create a class Student with attribute student_name.
# Create a class Sports with attribute sport_name.
# Create a class SchoolStudent inheriting from both with attribute grade.
# 
# Create a class Singer with method sing().
# Create a class Dancer with method dance().
# Create a class Artist inheriting from both with method perform().
# 
# Create a class Writer with attribute book_name.
# Create a class Speaker with attribute topic.
# Create a class Author inheriting from both with attribute author_name.
# 
# Create a class Camera with method take_photo().
# Create a class Phone with method make_call().
# Create a class SmartPhone inheriting from both with method internet().
# 
# Create a class Bank with attribute bank_name.
# Create a class Customer with attribute customer_name.
# Create a class Account inheriting from both with attribute balance.
# 
# 
# Create a class Laptop with attribute ram.
# Create a class Computer with attribute processor.
# Create a class GamingLaptop inheriting from both with attribute graphics_card.
# 
# Create a class Employee with attribute emp_id.
# Create a class Department with attribute dept_name.
# Create a class Manager inheriting from both with attribute salary.




# Here are some practice questions for Hierarchical Inheritance in Python
# Practice Questions:

# Create a class Animal with method eat().
# Derive classes Dog and Cat from Animal with methods bark() and meow().
class Animal:
    def __init__(self, a_name, a_color):
        self.a_name = a_name
        self.a_color = a_color

    def eat(self):
        print("eat_method =", self.a_name, self.a_color)


class Dog(Animal):
    def bark(self):
        print("dog says bark")


class Cat(Animal):
    def meow(self):
        print("cat says meow")


obj1 = Dog("Dog", "Black")
obj1.eat()
obj1.bark()

obj2 = Cat("Cat", "White")
obj2.eat()
obj2.meow()
       

    
#
#  Create a class Vehicle with attribute brand.
# Derive classes Car and Bike with attributes car_model and bike_model.
# 
# Create a class Person with attributes name and age.
# Derive classes Student and Teacher with attributes marks and subject.
# 
# Create a class BankAccount with attribute balance.
# Derive classes SavingsAccount and CurrentAccount with methods add_interest() and minimum_balance().
# 
# Create a class Shape with method display_shape().
# Derive classes Rectangle and Circle with methods rectangle_area() and circle_area().
# 
# Create a class Employee with attribute salary.
# Derive classes Manager and Developer with attributes department and programming_language.
# 
# Create a class ElectronicDevice with attribute brand.
# Derive classes Mobile and Laptop with attributes camera and ram.
# 
# Create a class College with attribute college_name.
# Derive classes Department and Library with attributes department_name and book_count.
# 
# Create a class Account with method account_info().
# Derive classes Admin and User with methods admin_panel() and user_dashboard().
# 
# Create a class Appliance with attribute power.
# Derive classes WashingMachine and Refrigerator with attributes capacity and temperature.

