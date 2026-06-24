#include<iostream>
using namespace std;
class Cpu{
	
	string brand;
	public:
	void setBrand(string b){
		brand=b;
	}
	string getBrand(){
		return brand;
	}
	
};
class Ram {

	int capacityGB;
	
	public:
	void setCapacity(int GB){
		capacityGB=GB;
		
	}
	int getCapacity(){
		return capacityGB;
	}
	
	
	
};
class Harddisk{

	string storageType;   // e.g., "SSD" or "HDD"
    int capacityGB; 
	
	public:
	void steHarddisk(string s,int GB){
		storageType=s;
		capacityGB=GB;
		
	}
	string getstorageType(){
		return storageType;
	}
	int getcapacityGB(){
		return capacityGB;
	}
	
	
	class Computer{
		Cpu cpu;//obj
		Ram ram;//obj
		Harddisk storage;//obj
		Harddisk capacity;
		
	public :
	void setComputer(Cpu c,Ram r,Harddisk s,Harddisk c){
		cpu=c;
		ram=r;
		storage=s;
		capacity=c;
	}
	void getComputer(){
		cout<<cpu.getBrand()<<endl;
		cout<<ram.getCapacity()<<endl;
		cout<<storage.getstorageType()<<endl;
		cout<<capacity.getcapacityGB()<<endl;
	} 
	}
};



	
	
  
int main(){
	//obj1
	Cpu c;
	c.setBrand("intel");
	cout<< "brand:"<<c.getBrand()<<endl;
	//obj2
	Ram r;
	r.setCapacity(32);
	cout<< "ramcapacity:"<<r.getCapacity()<<endl;
	//obj3
	Harddisk disk;
	disk.steHarddisk("HDD",2000);
	cout<< "storageType:"<<disk.getstorageType()<< endl <<"capacity:"<<disk.getcapacityGB()<<endl;
	
	return 0;
	
	
	
	
}
