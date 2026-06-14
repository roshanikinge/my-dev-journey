#include<stdio.h>

void main(){
	int arr[10]={10,20,30,40};
	int i;
	
	  for( i=0;i<4;i++){
		printf("%d\n",arr[i]);
		
		
	}
	
	printf("enter the value into arr:\n");
	
		for (i=0;i<4;i++){
			printf("enter the %d index value in  arr:\n",i);
			scanf("%d",&arr[i]);
		}
		
	printf("entered value in arr is:\n");
		for (i=0;i<4;i++){
			printf("the %d index value is %d\n",i,arr[i]);
		}
	
}
