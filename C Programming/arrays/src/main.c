#include <stdio.h>

typedef char String[50];

void print_int_array(int nums[]);
void print_char_array(char chars[]);

int main() {
    int nums[] = {10, 20, 30, 40, 50};
    printf("\nnums[0]: %d\n", nums[0]);
    printf("nums[1]: %d\n", nums[1]);
    printf("nums[4]: %d\n", nums[4]);
    printf("nums: ");
    print_int_array(nums);
    
    char grades[] = {'A', 'B', 'C', 'D', 'F'};
    printf("\ngrades[0]: %c\n", grades[0]);
    printf("grades[2]: %c\n", grades[2]);
    printf("grades[4]: %c\n", grades[4]);
    printf("grades: ");
    print_char_array(grades);

    String name = "Sami Munir";

    return 0;
}

void print_int_array(int nums[]) {
    printf("[");
    for (int i = 0; i < 5; i++) {
        printf("%d, ", nums[i]);
    }
    printf("\b\b]\n");
}

void print_char_array(char chars[]) {
    printf("[");
    for (int i = 0; i < 5; i++) {
        printf("%c, ", chars[i]);
    }
    printf("\b\b]\n");
}