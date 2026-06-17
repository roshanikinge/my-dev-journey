#include<stdio.h>
int main(){
	int s=20;
	int *p=&s;
	(*p)++;
	printf("%d\n",s);
	return 0;	
}
