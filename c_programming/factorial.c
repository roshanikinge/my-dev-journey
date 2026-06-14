#include<stdio.h>
int fact(int);

int fact(int n){
	if(n==1){
		return 1;
	
	}
	else{
		return n*fact(n-1);
	}
	
	
		
	
}

void main(){
	int n=4;
	int res=fact(n);
	printf("factorial of %d is %d\n",n,res);
}
