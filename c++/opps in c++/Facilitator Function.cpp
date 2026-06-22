#include<iostream>
using namespace std;
class Student {
	public:
	int a;
	int b;
	
	int  add(){
		return a+b;
		
	}
};
int main(){
	Student obj;
	obj.a = 1;
    obj.b = 3;
	cout << obj.add()<<endl;
	return 0;
}
