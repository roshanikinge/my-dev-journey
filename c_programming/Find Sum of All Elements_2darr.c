#include<stdio.h>
int main(){
	int arr[3][3]={{1,2},{2,3},{3,4}};
	int  i;
	int j;
	
	int sum=0;
	
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			sum=sum+arr[i][j];
		}
	}
	printf("sum: %d\n",sum);
	
	return 0;
}
