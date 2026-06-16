#include<stdio.h>

struct student{//structre creation
	char name[10];
	int roll;
};

int main(){
	struct student rakesh;//varibale creation
	
	rakesh.roll=21;
	strcpy(rakesh.name,"rakesh");
	
	printf("%s\n",rakesh.name);
	printf("%d\n",rakesh.roll);
	
	
	return 0;
	
}

