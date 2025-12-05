#include <stdio.h>
#include <stdbool.h>

int main() {
    int age = 24;
    printf("age: %d years old\n", age);

    float gpa = 3.1;
    printf("\ngpa: %.1f/4.0\n", gpa);
    float price = 99.99;
    printf("price: $%.2f\n", price);
    float temperature = 71.2;
    printf("temperature: %.1f deg F", temperature);

    double pi = 3.14159265358979;
    printf("\npi: %.15lf\n", pi);

    char grade = 'A';
    printf("\ngrade: %c\n", grade);
    char symbol = '{';
    printf("symbol: %c\n", symbol);

    char name[] = "Sami Munir";
    printf("\nname: %s\n", name);

    bool is_online = true;
    printf("\nis_online: %d\n", is_online);
    
    return 0;
}