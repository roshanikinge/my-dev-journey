#include<stdio.h>
#include<string.h>

struct student{
	char name[10];
	int age;
};
int main(){
	//student 1 s
	struct student s;
	//another option is    struct student s = {"rk", 20};
	// Fixed: Assign values inside curly braces when creating the variable 
	//s.name="rk";//not allowed this type  then used strcpy
	strcpy(s.name,"rk");
	s.age=20;
	printf("1st student info:\n");
	printf("name :%s\n",s.name);
	printf("age :%d\n",s.age);
	
	
	printf("2nd student info:\n");
	//student 2 p
	struct student p;
	strcpy(p.name,"pk");
	p.age=21;
	printf("name :%s\n",p.name);
	printf("age :%d\n",p.age);
	
	
	return 0;
	
	
	
}
