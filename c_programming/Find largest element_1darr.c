#include<stdio.h>

int main(){
	int arr[5]={10,45,37,48,20};
	int i;
	int largest=arr[0];
	
	for(i=0;i<=4;i++)
	
	
		if (arr[i]>largest){
		
			largest=arr[i];
			
		}
	printf("largest no is %d\n",largest);
	return 0;	
}
