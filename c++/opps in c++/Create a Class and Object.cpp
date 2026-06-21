#include<iostream>
using namespace std;

class Student{
	public :
	string name;
	int age ;
	
};


int main(){
	Student s;
	s.name="roshani";
	s.age=21;
	
	cout<< "name:" << s.name <<endl << "age:" << s.age <<endl;
}
