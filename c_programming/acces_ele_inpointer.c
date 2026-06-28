#include<stdio.h>
int main(){
	int arr[5]={1,2,3,4,5};
	int *ptr=&arr[0];
	int i;
	for (i=0;i<5;i++)
	{
		printf("%d\n",*ptr);
		ptr++;
	}
	return 0;
}
