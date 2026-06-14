#include<stdio.h>
int main(){
	int i;
	int arr[5]={10,20,30,40,50};
	int sum=0;
	for (i=0;i<=4;i++)
		sum =sum+arr[i];
	
	float avg=sum/5;
	printf("avrage is : %f\n",avg);
	
	printf("sum is :%d\n",sum);
	return 0;	
	  
	
}
