/*
    Sami Munir
    January 30th, 2024
    Variables
    Mastering C Programming
*/
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
    char my_name[] = "Sami M";
    printf("my_name: %s\n", my_name);
    int my_age = 22;
    printf("my_age: %d\n", my_age);
    double my_double = 7.5569;
    printf("my_double: %f\n", my_double);

    // program constants
    const double PI = 3.145789;
    printf("\nPI: %f\n", PI);

    return EXIT_SUCCESS;
}