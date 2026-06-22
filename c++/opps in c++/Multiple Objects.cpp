#include<iostream>
using namespace std;
class Student{
	public:
		
	int roll_no;
	string name ;
	
	
}; 
int main(){
	Student a,b;
	a.name="roshani";
	a.roll_no=20;
	
	b.name="pratiksha";
	b.roll_no=30;
	
	cout<<"name :" << a.name <<endl <<"roll_no:" << a.roll_no << endl;
	cout<<"name :" <<b.name  <<endl <<"roll_no:" << b.roll_no <<endl;
	 
	return 0;
	
}
