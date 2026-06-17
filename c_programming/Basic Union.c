#include<stdio.h>
#include<string.h>

//In a union, all members share the same memory location.

union student{
	char name [10];
	int age;

};

int main(){
	union student s;
	strcpy(s.name,"rk");
	s.age=20;
	
	printf("%s",s.name);
	//show only one output who has greater memory
	printf("%d",s.age);
	
	return 0;
		
}
