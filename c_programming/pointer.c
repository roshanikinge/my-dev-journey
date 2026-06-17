#include<stdio.h>

void main(){
	int num=10;
	
	int *ptr=&num; //pointer creation
	
	printf("value stored in variable :%d\n",num);
	
	printf("value of num from pointer variable :%d\n",*ptr);
	
	printf("address :\n");
	printf("address of num var is :%p\n",&num);
	printf("Adress // value of ptr is :%p\n",ptr);
	
}
