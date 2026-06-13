#include<stdio.h>

int a[100];
int size;//user input thats why we take here 
int currentposition=0;//index position 0 staring
int position;//on which position we have to insert our element
int value;//for which value insertion then store into value
int i;


void addElement();//declear
void viewElements();
void insertelement();
void updateElemnt();
//void deletElement();


int main(){
	
	//create
	printf("enetr the size of array");
	scanf("%d",&size);
	//function call //method creation
	addElement();
	addElement();
	viewElements();
	updatedElment();
//	deleteElemnt();
//	viewElemnt();
	
	return 0;
}


void addElement()//define
{
	printf("enetr the value u want to add:");
	scanf("%d",&value);//5
	
	a[currentposition]=value;//a[0]=5
	currentposition++;//1
	
	insertElement();
}

void viewElements(){
	printf("followings are the element in the array:");
	for(i=0;i<size;i++)//i=0 till=4 if size of arr is 5 then its run till 4
	{
		printf("%d\t",a[i]); // a[0]....a[size]
		
	}
	 
}


void insertElement(){
	printf("enetr the value u want to insert:");
	scanf("%d",&value);
	printf("enetr the position u want to insert:");
	scanf("%d",&position);
	for (i=size;i>=position;i--)//i=5---3
	{
		a[i]=a[i-1];  //a[5]=a[4]
		
	}
	a[position-1]=value;
	size++;
	
	
}

void updateElement(){
	printf("enetr the position they want to upadte:");
	scanf("%d",&value);
	
	printf("enter the value they want to upadte it with;");
	scanf("%d",%value);
	a[position-1]=value;
	
	
}
//void deleteElement(){
//	
//}
