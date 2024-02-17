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

    /*
        short (int) takes up 2 bytes --> 16 bits
    */
    short my_num = 7;
    cout << "my_num: " << my_num << endl;
    /*
        integer takes up 4 bytes (1 byte = 8 bits) --> total 32 bits
    */
    int my_int = 556567;
    cout << "my_int: " << my_int << endl;
    /*
        float takes up 4 bytes --> 32 bits
    */
   float my_float = 3.14;
   cout << "my_float: " << my_float << endl;
    /*
        double takes up 8 bytes --> 64 bits
    */
    double my_double = 3.141569;
    cout << "my_double: " << my_double << endl;
    char my_char = 's';
    cout << "my_char: " << my_char << endl;
    string my_name = "Sami M.";
    cout << "my_name: " << my_name << endl;
    cout << "\t&my_name: " << &my_name << endl;

    int a, b, c;
    a = 1, b = 2, c = a + b;
    cout << "a: " << a << endl;
    cout << "b: " << b << endl;
    cout << "c: " << c << endl;

    string str1 = "this is string(1)";
    string str2 = " and this is string(2).";
    string combined_str = str1 + str2;
    cout << "combined_str: " << combined_str << endl;

    bool my_bool = true;
    cout << "my_bool: " << my_bool << endl;

    const int CONST_VAR = 556;
    cout << "CONST_VAR: " << CONST_VAR << endl;

    return EXIT_SUCCESS;
}