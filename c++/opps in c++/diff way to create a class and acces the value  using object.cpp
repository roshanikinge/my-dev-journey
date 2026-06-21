#include<iostream>
using namespace std;
// 1. Standard Class
class Student{
	public:
	 string name ="roshani";
};
// 2. Struct Class
struct StructWay{
	int data=10;
	
};

// 3. Encapsulated Class
class GetterWay{
	private:
		int data =10;
	public:
		int getData() const {return data;}
};

int main(){
	// Accessing Standard Class via Dot Operator
	Student obj1;
	cout<< "dot_operator:" << obj1.name <<endl;
	// Accessing Struct
	StructWay obj2;
	cout << "Struct Access: " << obj2.data << endl;
	// Accessing via Pointer (Arrow Operator)
	Student*ptr=&obj1;
	cout<<" arrow_operator , ptr_operator:" << ptr->name<<endl;
	// Accessing via Pointer Dereference
	cout<<"Dereference Operator:"<< (*ptr).name <<endl; 
	// Accessing via Reference
	Student& ref = obj1;
	cout << "Reference Access: " << ref.name<<endl;
	
    // Accessing via Getter Function
    GetterWay obj3;
    cout << "Getter Function: " << obj3.getData() << endl;

    return 0;
	
}
