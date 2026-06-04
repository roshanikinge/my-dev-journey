#include<stdio.h>
int main(){
	
	int a , b , temp;
	
	printf("enetr the 1st no:");
	scanf("%d",&a);
	
	printf("enter the 2nd no:");
	scanf("%d",&b);
	
	temp=a;
	a=b;
	b=temp;
	
	printf("after swapping :\n");
	
	printf("a:%d\n",a);
	printf("b:%d\n",b);
	
	return 0;
	
}
