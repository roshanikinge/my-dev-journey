#include<stdio.h>

int main(){
	int arr[10]={1,2,3,4,5,6};
	int *ptr=arr;
	ptr++;
	printf("%d",ptr);
	return 0;
	
}
