#include<stdio.h>

int sum(int);

int sum(int n){
	if (n==0){
		return 0;
	}
	else{
		return n+sum(n-1);
	}
}

void main(){
	int n=5;
	int res=sum(n);
	printf("sum of %d number is %d",n,res);
	
}
