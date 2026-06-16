#include<stdio.h>
#include<string.h>

struct student{
	char name[10];
	int age;
};
int main(){
	struct student s;
	//s.name="rk";//not allowed this type  then used strcpy
	strcpy(s.name,"rk");
	s.age=20;
	printf("name :%s\n",s.name);
	printf("age :%d\n",s.age);
	
	return 0;
	
	
}
