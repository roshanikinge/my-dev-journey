#include<stdio.h>

int main(){
	int a=20;
	int *p=&a;
	int **q=&p;
	
	printf("pointer to pointer :%d\n",**q);
	
	return 0;
}
