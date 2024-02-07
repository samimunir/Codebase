/*
    Sami Munir
    February 7th, 2024
    Structures
    Mastering C Programming
*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Student {
    char name[50];
    char major[50];
    int age;
    double gpa;
};

int main(int argc, char* argv[]) {
    struct Student student1;
    strcpy(student1.name, "Sami Munir");
    strcpy(student1.major, "Computer Science");
    student1.age = 22;
    student1.gpa = 3.2;

    printf("student1.name: %s | %d\n", student1.name, student1.age);
    printf("\tstudent1.major: %s\n", student1.major);
    printf("\tstudent1.gpa: %f\n", student1.gpa);
    return EXIT_SUCCESS;
}