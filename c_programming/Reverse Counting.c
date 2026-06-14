#include<stdio.h>

void reverse(int n){

    if(n == 0){
        return;
    }

    printf("%d ", n);
    reverse(n - 1);
}

int main(){

    int n = 5;

    printf("Reverse order: ");
    reverse(n);

    return 0;
}
