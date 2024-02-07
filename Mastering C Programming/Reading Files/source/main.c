/*
    Sami Munir
    February 7th, 2024
    Mastering C Programming
    Reading Files
    main.c
*/

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {

    char line[255];
    FILE *p_file = fopen("employees.txt", "r");
    int i = 1;
    while (fgets(line, 255, p_file)) {
        printf("E%d) %s", i, line);
        i++;
    }
    printf("\n");
    fclose(p_file);

    return EXIT_SUCCESS;
}