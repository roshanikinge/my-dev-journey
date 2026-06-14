#include<stdio.h>
int fib(int);

int fib(int n){


if (n==0){
	return 0;
}
else if(n==1){
	return 1;
}
else{
	return fib(n-1)+fib(n-2);
	}
}



void main(){
	int n=6;
	int res=fib(n);
	printf("fibonacii of %d is %d\n",n,res);
	
	
	
}
