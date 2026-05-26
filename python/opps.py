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



class Vehicle ():
    def __init__(self,brand):
        self.brand=brand
    
class Car (Vehicle):
    def __init__(self,model,brand):
        self.model=model
        super().__init__(brand)

class SportCar(Car):
    def __init__(self,top_speed,model,brand):
        self.top_speed=top_speed
        super().__init__(model,brand)

obj27= SportCar(2000,"tvt","toto")
print(obj27.top_speed)
print(obj27.model)
print(obj27.brand)


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
class Shape:
    def display_shape(self):
        print("This is a shape")


class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def rectangle_area(self):
        area = self.length * self.width
        print("Area of Rectangle =", area)


class Circle(Shape):
    def __init__(self, r):
        self.r = r
        self.pi = 3.14

    def circle_area(self):
        area = self.pi * self.r * self.r
        print("Area of Circle =", area)


# Object creation
objRectangle = Rectangle(3, 5)
objCircle = Circle(3)

# Parent method
objRectangle.display_shape()
objCircle.display_shape()

# Child methods
objRectangle.rectangle_area()
objCircle.circle_area()



       

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






# Here are implementation practice questions covering all access specifiers
# in Python (public, protected, private):

# 1. Public Variables

# Create a class Student with:

# public attributes: name, age
# method display() to print details

#  Create object and access variables outside class.

class Student():
    def __init__(self,name ,age):
        self.name=name
        self.age=age
    def disply(self):
        print("display=",self.name,self.age)
obj14=Student("roshani",21)
obj14.disply()



# 2. Protected Variables

# Create a class Employee with:

# protected attributes: _emp_name, _salary
# method show() to display details

# Access protected variables inside and outside class


class Employee():
    def __init__(self,emp_name,emp_salary):
        self._emp_name=emp_name
        self._emp_salary=emp_salary
    
    def show(self):
        print("display emp details:",self._emp_name,self._emp_salary)
obj15=Employee("roshani",4000000)
# obj15.show()


# 3. Private Variables

# Create a class BankAccount with:

# private attribute: __balance
# method show_balance() to display balance

# Try accessing __balance outside class and observe error.


class BBankaccount():
    def __init__(self,balance):
        self.__balance=balance
    
    def show_balance(self):
        print("show_balance:",self.__balance)
obj16= BBankaccount(2000000000000)
# print(obj16.__balance)   AttributeError: 'BBankaccount' object has no attribute '__balance'
# Because Python converts private variables internally like:
# __balance → _BBankaccount__balance
# So technically you can access like this (not recommended):
# print(obj16._BBankaccount__balance)

# __balance → private
# can be used inside class
# cannot be accessed directly outside
# Python hides it using name mangling

obj16.show_balance()




# 4. All Access Types Together

# Create a class Company with:

# public: company_name
# protected: _location
# private: __ceo_name

# 👉 Write method display() to print all attributes.






# 🔹 5. Employee System

# Create class Employee:

# public: name
# protected: _department
# private: __salary

# 👉 Create method show_employee()
# 👉 Try accessing all variables outside class





# 🔹 6. Bank System

# Create class Account:

# public: acc_name
# protected: _acc_no
# private: __balance

# 👉 Add method display_account()







# 🔹 7. College System

# Create class College:

# public: college_name
# protected: _address
# private: __principal

# 👉 Show all details using method






# 🔹 8. Product Class

# Create class Product:

# public: product_name
# protected: _price
# private: __discount

#  👉 Display product details inside method only






# 🔹 9. Vehicle Class

# Create class Vehicle:

# public: brand
# protected: _speed
# private: __engine_number

# 👉 Try accessing all from object





# 🔹 10. Access Testing Task

# Create class Test with:

# one public variable
# one protected variable
# one private variable

# 👉 Create object and:

# print all variables
# observe which works and which fails




# 1. isinstance() Method

# Create a class Animal and a child class Dog.
# Use isinstance() to check whether Dog is a child of Animal.

class Animal():
    pass
class Dog(Animal):
    pass

obj17=Dog()
print(isinstance(obj17,Animal))
print(isinstance(obj17, Dog))


# 🔹 2. issubclass() Method
# Question:

# Create a class Vehicle and a child class Car.
# Create object of Car and check whether it belongs to Car and Vehicle.

class Vehicle():
    pass
class Car(Vehicle):
    pass

print(issubclass(Car,Vehicle))



# 🔹 3. finalize / Destructor Method

# (In Python we use __del__() as destructor/finalize method)

# Question:

# Create a class Student with constructor and destructor.
# Display message when object is created and destroyed.


class Student():
    def __init__(self,s_name):
        self.s_name=s_name
        
    def __del__(self): # that is the destructor
        print("obj destroyed")
obj18=Student("roshnai")
del obj18





# Here are some practice questions for Encapsulation implementation in Python:#
#############################################################################

# 🔹 1. Bank Account

# Create a class BankAccount with:

# private variable __balance
# method deposit()
# method withdraw()
# method show_balance()


class BankAccount():
    def __init__(self,balacne):
        self.__balance=balacne

    def deposit(self):
        print("deposit")
    
    def withdraw(self):
        print("withdraw")
    
    def show_blance(self):
        print("show_balance=",self.__balance)


obj19=BankAccount(30000)
obj19.show_blance()





# 🔹 2. Student Details

# Create a class Student with:

# private variable __marks
# method set_marks()
# method get_marks()
# 🔹 3. Employee System

# Create a class Employee with:

# private variable __salary
# method set_salary()
# method show_salary()
# 🔹 4. Mobile Phone

# Create a class Mobile with:

# private variable __price
# method set_price()
# method get_price()
# 🔹 5. ATM Machine

# Create a class ATM with:

# private variable __pin
# method change_pin()
# method show_pin()
# 🔹 6. Car Information

# Create a class Car with:

# private variable __speed
# method set_speed()
# method display_speed()
# 🔹 7. Product Management

# Create a class Product with:

# private variable __discount
# method set_discount()
# method get_discount()
# 🔹 8. College Management

# Create a class College with:

# private variable __fees
# method set_fees()
# method show_fees()



# 🔹 9. Hospital Record
# Create a class Patient with:
# private variable __disease
# method set_disease()
# method get_disease()

class Patient():
    def __init__(self,disease):
        self.__disease=disease
    
    def set_disease(self):
        self.__disease="HIV"
    
    def get_disease(self):
        print("get_disease=",self.__disease)

obj21=Patient("Cancer")
obj21.set_disease()
obj21.get_disease()








# 🔹 10. User Account
# Create a class User with:
# private variable __password
# method change_password()
# method show_password()



class User():
    def __init__(self,password):
        self.__password=password
    
    def change_password(self):
        self.__password="roshani"
    
    def show_password (self):
        print("show_password=",self.__password)

obj20=User("kinge")
obj20.change_password()
obj20.show_password()







# Here are some practice questions for Polymorphism implementation in Python:
# 🔹 1. Animal Sound

# Create classes Dog and Cat with same method sound().
# Display different sounds for both objects.

class Dog():
    def __init__(self,sound):
        self.sound=sound
    
    def show_sound(self):
      pass
    
class Cat(Dog):
    def __init__(self,sound1,sound):
        self.sound1=sound1
        super().__init__(sound)
    
    def show_sound(self):
        print("cat sound=",self.sound,self.sound1)

obj22=Cat("bark","meow")
obj22.show_sound()


# This is the standard polymorphism example because:

# same method name → show_sound()
# different outputs


class Dog:
    def show_sound(self):
        print("Dog sound = bark")


class Cat:
    def show_sound(self):
        print("Cat sound = meow")


obj1 = Dog()
obj2 = Cat()

obj1.show_sound()
obj2.show_sound()




# 🔹 2. Vehicle Speed

# Create classes Car and Bike with same method speed().
# Print different speed messages.


class Car():
   
    def speed(self):
        print("car_speed =220k")
    
class Bike():
    
    def speed(self):
        print("bike_spped=5400")

obj23=Car()
obj24=Bike()

obj24.speed()
obj23.speed()




     
# 🔹 3. Employee Work

# Create classes Developer and Manager with same method work().
# Display different work roles.


class Developer():
    def work(self):
        print("developerwork=sf")

class Manager():
    def work(self):
        print("Managerwok=manage")

obj25=Developer()
obj26=Manager()
obj25.work()
obj26.work()


# 🔹 4. Shape Area

# Create classes Circle and Rectangle with same method area().
# Print area calculations.


class Circle():

    def __init__(self, r):
        self.r = r

    def area(self):
        print("area of circle:", 3.14 * self.r * self.r)


class Rectangle():

    def __init__(self, l, b):
        self.l = l
        self.b = b

    def area(self):
        print("area of rectangle:", self.l * self.b)


obj1 = Circle(3)
obj1.area()

obj2 = Rectangle(3, 4)
obj2.area()



    


# 🔹 5. Payment System

# Create classes CreditCard and UPI with same method pay().
# Display different payment methods.

# 🔹 6. Notification System

# Create classes Email and SMS with same method send_message().
# Print different notification messages.

# 🔹 7. Student Result

# Create classes SchoolStudent and CollegeStudent with same method result().
# Display different result formats.

# 🔹 8. Bird Flying

# Create classes Sparrow and Eagle with same method fly().
# Display different flying styles.

# 🔹 9. Login System

# Create classes Admin and User with same method login().
# Display different login permissions.

# 🔹 10. Media Player

# Create classes AudioPlayer and VideoPlayer with same method play().
# Display different playing messages.

