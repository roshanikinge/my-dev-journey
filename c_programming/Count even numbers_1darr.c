#include<stdio.h>

int main(){
	int arr[10]={90,20,58,49,59,3};
	int i;
	int count=0;
	for (i=0;i<=5;i++)
		if (arr[i]%2==0){
			count=count+1;
		}
	printf("count %d\n",count);
	return 0;
}
