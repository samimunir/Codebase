/*
    Sami Munir
    February 15th, 2024
    C++ From Beginner to Expert
    Programming Basics
    - main.cpp
*/

/*
    Libraries:
    - a set of tools/predefined functions that allow us to execute 
        our tasks.
    - using libraries by "#include <library_name>"
        - library "iostream" --> input/output stream
*/
#include <iostream>
/*
    namespace:
    - a virtual space with a name in which we can store functions and
        variables within one "space". 
    - used to avoid situations where f.e. two programmers are going to 
        make two programming elements with the same name.
    - std stands for "standard"
*/
using namespace std;

/*
    function main()
    - a function is something that serves an action.
    - the main function is the starting point of any program.
        - always gets executed/invoked first.
    - a function can take parameters within the parentheses.
*/
int main() {
    /*
        cout --> stands for console output
    */
    cout << "Programming Basics." << endl;

    return EXIT_SUCCESS;
}