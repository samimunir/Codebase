/*
    Sami Munir
    February 7th, 2024
    Mastering C Programming
    Pointers
    main.c
*/

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
    printf("Pointers in C!\n");

    int num = 556;
    printf("num: %d\n", num);
    printf("address of num: %p\n", &num);
    int *p_num = &num;
    printf("\n*p_num = &num\n");
    printf("p_num: %p\n", p_num);
    printf("address of p_num: %p\n", &p_num);

    /*
        Pointers are memory addresses.
        - type of data in our program that is a memory address.
        - can create a pointer variable and store a pointer within it.
    */
    
    double GPA = 3.2;
    char name[20] = "Sami M";
    printf("\nname: %s\n", name);
    printf("address of name: %p\n", &name);

    return EXIT_SUCCESS;
}