/*
    Sami Munir
    February 15th, 2024
    C++ From Beginner to Expert
    Programming Basics
    - variables.cpp
*/

#include <iostream>
using namespace std;

/*
    Variables
    - a label to hold the memory address of a value
    - can vary values and be used later for any reason

    initialization -->
    <data type> <variable_name> = <value>

    We can get the memory address of a variable by using the & operator.
*/

int main() {
    cout << "my favorite number is 7" << endl;

    short my_num = 7;
    cout << "my_num: " << my_num << endl;
    int my_int = 556567;
    cout << "my_int: " << my_int << endl;
    double my_double = 3.141569;
    cout << "my_double: " << my_double << endl;
    char my_char = 's';
    cout << "my_char: " << my_char << endl;
    string my_name = "Sami M.";
    cout << "my_name: " << my_name << endl;
    cout << "address of my_name: " << &my_name << endl;

    return EXIT_SUCCESS;
}