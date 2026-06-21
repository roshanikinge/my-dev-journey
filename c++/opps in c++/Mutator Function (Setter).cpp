#include<iostream>
using namespace std;
class Student{
	
	public:
	int roll_no=10;
	
    void setRoll(int r){
    	roll_no=r ;
    
	}
	
	void display(){
		cout<<"roll_no:"<<roll_no <<endl;
	}
    
		
};

int main(){
	Student s;
	s.setRoll(20);
	s.display();
	
	return 0;
}
