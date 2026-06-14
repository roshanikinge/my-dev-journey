#include<stdio.h>

int main(){
	int arr[10]={10,20,30,10,20};
	int i;
	int j;
	int count=0;

	for(i=0;i<=5;i++)
		for (j=i+1;j<=5;j++)
		if (arr[i]==arr[j]){
			count=count+1;
			
			printf("duplicate values in arr :%d\n",arr[i]);
			break;
		}
	printf("count is :%d\n",count);
	
	
	return 0;
}
