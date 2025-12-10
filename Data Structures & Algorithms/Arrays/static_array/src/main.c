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

   /*
        testing function push_head()
   */
  array_struct = push_head(array_struct, 2); // case I
  array_struct = push_head(array_struct, 5); // case II
  array_struct = push_head(array_struct, 63); // case III
  array_struct = push_head(array_struct, 14);
  array_struct = push_head(array_struct, 87);
  array_struct = push_head(array_struct, 0); // failure case

  /*
        testing function pop_head()
  */
    array_struct = pop_head(array_struct);
    array_struct = pop_head(array_struct);
    array_struct = pop_head(array_struct);
    array_struct = pop_head(array_struct);
    array_struct = pop_head(array_struct);
    array_struct = pop_head(array_struct); // failure case

    return EXIT_SUCCESS;
}