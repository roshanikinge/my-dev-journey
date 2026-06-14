#include<stdio.h>

int main(){
	int arr[5]={1,2,3,4,5};
	int sum=0;
	int i;
	
	for (i=0;i<=4;i++)
		sum+=arr[i];
		printf(" %d\n",sum);
	
	return 0;
}
