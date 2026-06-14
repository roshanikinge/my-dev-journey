#include<stdio.h>

int main(){
	int arr[5]={10,20,30,15,5};
	int i;
	int smallest=arr[0];
	
	for(i=0;i<=4;i++)
		if (arr[i]<smallest){
			smallest=arr[i];
		}
	printf("smallest no is %d\n",smallest);
	
	return 0;
	
}
