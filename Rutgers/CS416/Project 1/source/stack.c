/*
    Sami Munir | sm2246
    February 12th, 2024
    CS416 - OSD
    Project 1: stack.c
    Rutgers University@ilab1
*/

/*
    Compiled & tested on Linux x86 (32-bit)
*/

#include <stdio.h>
#include <stdlib.h>
#include <signal.h>

void signal_handle(int signalno) {
    printf("OMG, I was slain!\n");
    /*
        Step 4: Handle SIGFPE and change the stack.
        - Do your tricks here.
            * Your goal must be to change the stack frame of caller (main
                function) such that you get to the line after "z = x / y".
        - Next statement exit(1) has been commented. Understand what happens,
            then remove the comment and then execute.
    */
    int offset = 0xF;
    *(&signalno + offset) += 3;

    // exit(1);
}

int main(int argc, char *argv[]) {
    int x = 5, y = 0, z = 4;
    /*
        Step 1: Register signal handler first.
    */
    signal(SIGFPE, signal_handle);

    // This will generate a floating-point exception.
    z = x / y;

    printf("LOL, I live again !!!%d\n", z);

    return 0;
}