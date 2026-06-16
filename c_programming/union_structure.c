#include<stdio.h>

struct student{
	char name[10];
	int age;
};

union student1{
	char name[10];
	int age;
};

int main(){
	struct student roshani;
	union student1 riya;
	
	printf("struct size :%d\n", sizeof(roshani));
	printf("union size :%d\n",sizeof(riya));
	
	
	return 0;
}
