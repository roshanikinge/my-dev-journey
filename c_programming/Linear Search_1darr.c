#include<stdio.h>

int main(){
	int arr[10]={20,47,39,30,30};
	int target=20;
	int i;
	
	int found=0;

	
	for (i=0;i<=4;i++)
		if (arr[i]==target){
			found=1;
			break;
		}
		
	if (found){
		printf("element found at index %d is %d \n",i,arr[i]);
		
	}
	else{
		printf("element not found \n");
		
	}
	return 0;
	
}
