#include<stdio.h>

int main(){
	int arr[10]={10,20,30,40,50};
	int i;
	for(i=0;i<4;i++)
		arr[i]=arr[i+1];
	
	for(i=0;i<=4;i++)
		printf("%d\t",arr[i]);
		
	return 0;
}
