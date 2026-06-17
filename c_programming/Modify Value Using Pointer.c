#include<stdio.h>
int main(){
	
	int a=20;
	int *p=&a;
	*p=25;
	printf("modified pointer value is %d\n",a);
	return 0;
}
