#include<stdio.h>
#include<string.h>

struct student {
	char name[10];
	int age;
	char mobile_no[15];
	float marks;
	
};
int main(){
	struct student s;
	printf("take input:\n");
	printf("Enter the name:\n");
	scanf("%s",s.name);
	printf("enter the age and mobile_no:\n");
	scanf("%d %s",&s.age,s.mobile_no);
	printf("enetr the marks:\n");
	scanf("%f",&s.marks);
	printf("name : %s\n",s.name);
	printf("age :%d ,mobile_no :%s \n",s.age,s.mobile_no);
	printf("marks :%f\n",s.marks);
	
	return 0;
}
