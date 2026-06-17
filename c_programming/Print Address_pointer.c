#include<stdio.h>

int main(){
	int s=20;
	int *p=&s;
	
	printf("%p\n",&s); //print only address
	printf("%p\n",p); //print adress using pointer
	
	return 0;
	
}
