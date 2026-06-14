#include<stdio.h>

int main(){
	int arr[10]={2,3,4,5,6,2,5};
	int i;
	
	int largest=arr[0];
	int second_largest=arr[0];
	
	
	for (i=0;i<=6;i++)
		
		
		if (arr[i]>largest){
		
			second_largest=largest;
			largest=arr[i];
		}
		else if (arr[i] >second_largest && largest !=arr[i]){
			second_largest=arr[i];
		}
			
			
		
	printf("second_largest %d\n",second_largest);
	
	return 0;	
			 
		

}
