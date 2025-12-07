#include <stdio.h>

void increment(int* age);

int main() {
    printf("Pointers in C!\n");
    printf("-------------------------\n");

    int num = 7;
    printf("\nnum: %d\n", num);
    printf("address of num: %p\n", &num);
    
    int* num_ptr = &num;
    printf("\nnum_ptr: %p\n", num_ptr);
    printf("address of num_ptr: %p\n", &num_ptr);

    increment(num_ptr);

    printf("\nafter call to increment()...\nnum: %d\n", num);

    return 0;
}

void increment(int* num) {
    (*num)++;
}