#include "static_array.h"
#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("Static Array Data Structure (C implementation)\n");
    printf("--------------------------------------------------\n");

    /*
        testing function init_array()
    */
   struct array_ds* array_struct = init_array(5);

    return EXIT_SUCCESS;
}