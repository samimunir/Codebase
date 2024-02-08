/*
    Sami Munir
    February 8th, 2024
    C++ From Beginner to Expert
    Functions
    main.cpp
*/

#include <iostream>
using namespace std;

int globalVariable = 7;

void printHello() {
    cout << "Hello World!" << endl;
}

int sum(int num1, int num2) {
    return (num1 + num2);
}

int main() {
    int localVariable = 10;
    for (int i = 0; i < globalVariable; i++) {
        cout << "Num " << (i + 1) << ": " << (localVariable * globalVariable) << endl;
        localVariable += i;
    }

    printHello();

    cout << "\n2 + 3 = " << sum(2, 3) << endl;
    
    return EXIT_SUCCESS;
}