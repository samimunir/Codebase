#include "static_array.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool is_empty(struct array_ds* array_struct) {
    if (array_struct -> pointer == - 1 || array_struct -> num_of_elements == 0) {
        return true;
    } else {
        return false;
    }
}

bool is_full(struct array_ds* array_struct) {
    if (array_struct -> pointer >= array_struct -> capacity - 1 || array_struct -> num_of_elements == array_struct -> capacity) {
        return true;
    } else {
        return false;
    }
}

void print_array(struct array_ds* array_struct) {
    printf("-> array: ");
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

void print_array_ds(struct array_ds* array_struct) {
    print_array(array_struct);

    printf("-> capacity: %d\n", array_struct -> capacity);
    printf("-> num_of_elements: %d\n", array_struct -> num_of_elements);
    printf("-> pointer: %d\n", array_struct -> pointer);
    printf("-> used memory: %d bytes / %d bytes\n", array_struct -> num_of_elements * sizeof(int), array_struct -> max_mem);
}

struct array_ds* init_array(int capacity) {
    printf("\ninit_array() called -->\n");
    if (capacity == 0) {
        printf("--<ERROR>-- failed to initialize array. Capacity must be > 0.\n");
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
    array_struct -> num_of_elements = 0;
    array_struct -> max_mem = capacity * sizeof(int);
    array_struct -> mem_avail = array_struct -> num_of_elements * sizeof(int);
    array_struct -> pointer = -1;

    printf("-> static array successfully initialized!\n");

    // print_array(array_struct);
    print_array_ds(array_struct);

    return array_struct;
}

struct array_ds* push_head(struct array_ds* array_struct, int element) {
    printf("\npush_head(%d) called -->\n", element);

    if (is_full(array_struct)) {
        printf("--<ERROR>-- cannot add new element in full-capacity array.\n");
        print_array_ds(array_struct);
        return array_struct;
    }

    if (array_struct -> pointer == -1) {
        array_struct -> pointer++;
        array_struct -> array[0] = element;
        array_struct -> num_of_elements++;
    } else if (array_struct -> pointer == 0) {
        array_struct -> pointer++;
        for (int i = array_struct -> pointer; i > 0; i--) {
            array_struct -> array[i] = array_struct -> array[i - 1];
        }
        array_struct -> array[0] = element;
        array_struct -> num_of_elements++;
    } else {
        array_struct -> pointer++;
        for (int i = array_struct -> pointer; i > 0; i--) {
            array_struct -> array[i] = array_struct -> array[i - 1];
        }
        array_struct -> array[0] = element;
        array_struct -> num_of_elements++;
    }

    print_array_ds(array_struct);

    return array_struct;
}

struct array_ds* pop_head(struct array_ds* array_struct) {
   printf("\npop_head() called -->\n");

    if (is_empty(array_struct)) {
        printf("--<ERROR>-- cannot remove from empty array.\n");
        print_array_ds(array_struct);
        return array_struct;
    }

    if (array_struct -> pointer == 0) {
        array_struct -> array[0] = 0;
        array_struct -> pointer--;
        array_struct -> num_of_elements--;
    } else {
        for (int i = 0; i < array_struct -> pointer; i++) {
            array_struct -> array[i] = array_struct -> array[i + 1];
        }
        array_struct -> pointer--;
        array_struct -> num_of_elements--;
    }

    print_array_ds(array_struct);

    return array_struct;
}

struct array_ds* push_tail(struct array_ds* array_struct, int element) {
    printf("\npush_tail(%d) called -->\n", element);

    if (is_full(array_struct)) {
        printf("--<ERROR>-- cannot add new element in full-capacity array.\n");
        print_array_ds(array_struct);
        return array_struct;
    }

    array_struct -> pointer++;
    array_struct -> array[array_struct -> pointer] = element;
    array_struct -> num_of_elements++;

    print_array_ds(array_struct);

    return array_struct;
}