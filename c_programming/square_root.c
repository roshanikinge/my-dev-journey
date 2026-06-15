#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
#include<ctype.h>



int main(){
	 char str[]="hello";
	 char s1[10];
	 strcpy("s1","hi");
	 printf("%s",s1);
	 
	 char s2[20]="hello";
	 strcat("s2","world");
	 printf("%s",s2);
	 
	 printf("%d",isdigit("3"));
	 
	 
	 printf("%d",strlen(str));//string.h
	 printf("%f",pow(2,3));//math.h
	 printf("%f",sqrt(25));//math.h
	 printf("%d",abs(-15));//stdlib.h
	 printf("%c",toupper("a"));//ctype
	 printf("%c", tolower('Z'));//ctype
	 printf("%c",strcmp("abc","abc"));//string.h
	 
	
	
	
}
