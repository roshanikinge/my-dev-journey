#include<stdio.h>

int main(){
	int arr[10]={20,30,49,54,5,9,7};
	int i;
	int count=0;
	
	for (i=0;i<=6;i++)
		if(arr[i]%2 !=0){
			count=count+1;
		}
	printf("count %d",count);
	
	return 0;
		
}
