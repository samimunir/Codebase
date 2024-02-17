/*
    Sami Munir
    February 15th, 2024
    C++ From Beginner to Expert
    Programming Basics
    - input.cpp
*/

#include <iostream>
using namespace std;

/*
    Console input
    - cout << vs. cin >>
*/
int main() {
    int num;

    cout << "Enter your favorite number: ";
    cin >> num;
    cout << "Your favorite number is " << num << endl;
    return EXIT_SUCCESS;
}