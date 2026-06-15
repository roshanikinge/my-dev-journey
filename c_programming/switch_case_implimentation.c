#include<stdio.h>
int  main()
{
	int a ,b, choice;
	printf("enter the value of a:");
	scanf("%d",&a);
	printf("enter the value of b:");
	scanf("%d",&b);
	
	printf("press 1 for add\n");
	printf("press 2 for sub\n");
	printf("press 3 for mult\n");
	printf("press 4 for div\n");
	printf("press 5 for modulus\n");
	scanf("%d",&choice);
	
	switch(choice){
		case 1:
			printf("the sum of two no is %d\n:",a+b);
			break;
		case 2:
			printf("the sub of two no is %d\n",a-b);
			break;
		case 3:
			printf("the mult of two no is %d\n",a*b);
			break;
		case 4:
			if (b!=0){
			printf("the div of two no is %d\n",a/b);
			}
			else{
				printf("error : division by zero is not allowed\n");
			}
			break;
		case 5:
			if (b!=0){
			printf("the modulus of two no is %d\n",a%b);
			}
			else{
				printf("error : modulus of two no is not allowed\n");
			}
			break;
		default:
			printf("invalid value\n");
			
	}
	
	return 0;
}
