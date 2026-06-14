#include<stdio.h>

int logic(int,int,int);


int main(){
	int a,b,c;
	
	printf("enter the 1st no\n");
	scanf("%d",&a);
	
	printf("enter the 2nd no\n");
	scanf("%d",&b);
	
	printf("enter the 3rd no\n");
	scanf("%d",&c);
	
	int res=logic(a,b,c);
	printf("%d",res);
    
}
int logic(int a,int b,int c){
	printf("calculating...\n");
	
	if (a>b && a>c){
		return a;
	}
	else if(b>c){
		return b;
	}
	else{
		return c;
	}
	
}


