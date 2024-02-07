/*
    Sami Munir
    February 7th, 2024
    Memory & Addresses
    Mastering C Programming
*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char* argv[]) {
    int age = 22;
    double GPA = 3.2;
    char name[20];
    strcpy(name, "Sami M");

    printf("\nage: %d\n", age);
    printf("address of age: %p\n", &age);

    printf("\nGPA: %f\n", GPA);
    printf("address of GPA: %p\n", &GPA);

    printf("\nname: %s\n", name);
    printf("address of name: %p\n", &name);

    return EXIT_SUCCESS;
}