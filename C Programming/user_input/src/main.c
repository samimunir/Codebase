#include <stdio.h>

int main() {
    printf("User input in C!\n");
    printf("-------------------------\n");

    int age = 0;
    float gpa = 0.0f;
    char grade = '\0';
    char name[30] = "";

    printf("\nage: %d\n", age);
    printf("gpa: %f\n", gpa);
    printf("grade:%c\n", grade);
    printf("name: %s\n", name);

    printf("\nEnter your age: ");
    scanf("%d", &age);
    printf("\nEnter your gpa: ");
    scanf("%f", &gpa);
    printf("\nEnter your grade (char): ");
    scanf(" %c", &grade);
    
    getchar();
    printf("\nEnter your name: ");
    fgets(name, 30, stdin);

    printf("\n\nage: %d\n", age);
    printf("gpa: %.1f\n", gpa);
    printf("grade: %c\n", grade);
    printf("name: %s\n", name);

    return 0;
}