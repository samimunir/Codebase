/*
    Sami Munir
    February 7th, 2024
    Functions
    Mastering C Programming
*/
#include <stdio.h>
#include <stdlib.h>

void sayHi() {
    printf("\nsayHi() called...\n");
    printf("\t'Hello user!'\n");
}


int add(int num1, int num2) {
    return (num1 + num2);
}

int multiply(int num1, int num2) {
    return (num1 * num2);
}

int main(int argc, char* argv[]) {
    sayHi();
    printf("\nadd(2, 3): %d\n", add(2, 3));
    printf("\nmultiply(2, 3): %d\n", multiply(2, 3));
    
    return EXIT_SUCCESS;
}