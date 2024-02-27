/*
    Sami Munir
    February 27, 2024
    CS416 - OSD
    - Topic: ucontext
    - Sample Program
        - get_context.c
*/

#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>
#include <signal.h>
#include <ucontext.h>

#define STACK_SIZE SIGSTKSZ

int main(int argc, char* argvp[]) {
    ucontext_t cctx, ncctx;

    if (argc != 1) {
        printf("--<BAD USAGE: no arguments expected>--\n");
        exit(1);
    }
}