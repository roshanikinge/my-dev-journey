#include<stdio.h>

int main(){
	int arr1[3]={1,2,4};
	int arr2[3];
	int i;
	for(i=0;i<=2;i++)
		printf("1st arr is :%d\n",arr1[i]);
	
	for(i=0;i<=2;i++)
	 	arr2[i]=arr1[i];
	 
	for (i=0;i<=2;i++)
		printf("2nd arr is :%d\n",arr2[i]);
	return 0;
	
	
}
