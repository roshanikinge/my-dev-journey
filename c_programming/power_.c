#include<stdio.h>


int power(int,int);

int power(int a,int b){
	if (b==0){
	return 1;
	}
	else{
	
		return a*power(a,b-1);
		
	}
}

void main(){
	int a=2;
	int b=3;
	int res=power(a,b);
	printf("power of %d and %d is = %d \n",a,b,res);
	
}
