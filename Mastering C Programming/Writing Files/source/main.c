/*
    Sami Munir
    February 7th, 2024
    Mastering C Programming
    Writing Files
    main.c
*/

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {

    FILE *p_file = fopen("employees.txt", "w");
    fprintf(p_file, "John Doe | Salesman\nMary Smith | Receptionist\nBobby Wane | Advisor");
    fclose(p_file);

    FILE *p_file_2 = fopen("employees.txt", "a");
    fprintf(p_file_2, "\nKelly Hall | Receptionist");
    fclose(p_file_2);

    return EXIT_SUCCESS;
}