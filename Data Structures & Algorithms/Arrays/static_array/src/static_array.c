#include "static_array.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool is_empty(struct array_ds* array_struct) {
    if (array_struct -> pointer == - 1 || array_struct -> num_of_elements == 0) {
        return true;
    }
}

void print_array(struct array_ds* array_struct) {
    printf("array: ");
    if (is_empty(array_struct)) {
        printf("[]\n");
        return;
    } else {
        printf("[");
        for (int i = 0; i < array_struct -> num_of_elements; i++) {
            printf("%d, ", array_struct -> array[i]);
        }
        printf("\b\b]\n");
    }
}

struct array_ds* init_array(int capacity) {
    if (capacity == 0) {
        printf("\ninit_array() called -->\nFailed initialize array. Capacity must be > 0.\n");
        return NULL;
    }

    int *arr = (int*) malloc(capacity * sizeof(int));
    if (arr == NULL) {
        printf("--<ERROR>-- memory allocation failure for array struct -> array.\n");
        return NULL;
    }

    struct array_ds* array_struct = (struct array_ds*) malloc(sizeof(struct array_ds));
    if (array_struct == NULL) {
        printf("--<ERROR>-- memory allocation failure for array struct.\n");
        return NULL;
    }
    array_struct -> array = arr;
    array_struct -> capacity = capacity;
    array_struct -> max_mem = capacity * sizeof(int);
    array_struct -> mem_avail = array_struct -> num_of_elements * sizeof(int);
    array_struct -> pointer = -1;

    printf("\tstatic array successfully initialized!\n");

    print_array(array_struct);

    return array_struct;
}