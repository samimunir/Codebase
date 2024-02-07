/*
    Sami Munir
    January 30th, 2024
    User Input
    Mastering C Programming
*/
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
    int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("You are %d years old.\n", age);

    char firstName[20];
    char lastName[20];
    printf("\nEnter your name: ");
    // fgets(name, 20, stdin);
    scanf("%s %s", firstName, lastName);
    printf("Your name is: %s %s\n", firstName, lastName);

    return EXIT_SUCCESS;
}