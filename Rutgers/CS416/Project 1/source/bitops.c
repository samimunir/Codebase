/*
    Sami Munir | sm2246
    February 12th, 2024
    CS416 - OSD
    Project 1: bitops.c
    Rutgers University@ilab1
*/

/*
    Compiled & tested on Linux x86 (32-bit)
*/

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BITMAP_SIZE 4 // sizeof the bitmap array
#define SET_BIT_INDEX 17 // bit index to set
#define GET_BIT_INDEX 17 // bit index to read

static unsigned int myaddress = 4026544704;
// binary would be 11110000000000000011001001000000

/*
    Function 1: FIND FIRST SET (FROM LSB) BIT
*/
static unsigned int first_set_bit(unsigned int num) {
    // implement your code here...
    if (num == 0) {
        return 0;
    }
    unsigned int position = 0;
    if ((num & 0x0000FFFF) == 0) {
        position += 16;
        num >>= 16;
    }
    if ((num & 0x000000FF) == 0) {
        position += 8;
        num >>= 8;
    }
    if ((num & 0x0000000F) == 0) {
        position += 4;
        num >>= 4;
    }
    if ((num & 0x00000003) == 0) {
        position += 2;
        num >>= 2;
    }
    if ((num & 0x00000001) == 0) {
        position += 1;
    }
    return position;
}

/*
    Function 2: SETTING A BIT AT AN INDEX
    - Function to set a bit at "index" bitmap
*/
static void set_bit_at_index(char *bitmap, int index) {
    // implement your code here...
    int byte_index = index / 8;
    int bit_index = index % 8;
    bitmap[byte_index] |= (1 << bit_index);
}

/*
    Function 3: GETTING A BIT AT AN INDEX
    - Function to get a bit at "index"
*/
static int get_bit_at_index(char *bitmap, int index) {
    // Get to the location in the character bitmap array
    // Implement your code here...
    int byte_index = index / 8;
    int bit_index = index % 8;
    return (bitmap[byte_index] >> bit_index) & 1;
}

int main() {
    /*
        Function 1: Finding the index of the first set bit (from LSB).
        - Now let's say we need to find the fsbl of decimal 4026544704, 
        the function should return 6.
    */
   unsigned int fsbl_value = first_set_bit(myaddress);
   printf("Function 1: first set bit value %u\n\n", fsbl_value);

   /*
        Function 2 and 3: Checking if a bit is set or not
   */
    // We can store 32 bits (4 * 8-bit per character)
    char *bitmap = (char*) malloc(BITMAP_SIZE);
    memset(bitmap, 0, BITMAP_SIZE); // clear everything

    /*
        Let's try to set the bit.
    */
   set_bit_at_index(bitmap, SET_BIT_INDEX);

   /*
        Let's try to read the bit.
   */
    printf("Function 3: The value at %dth location %d\n", 
        GET_BIT_INDEX, get_bit_at_index(bitmap, GET_BIT_INDEX));

    return 0;
}