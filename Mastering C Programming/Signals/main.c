#include <stdio.h>
#include <stdlib.h>
#include <signal.h>
#include <unistd.h>

void handler(int num) {
    write(STDOUT_FILENO, "I won't die!\n", 13);
}

int main(int argc, char* argv[]) {
    printf("Signals in C\n");
    signal(SIGINT, handler);
    signal(SIGTERM, handler);
    while (1) {
        printf("Wasting your cycles. | %d\n", getpid());
        sleep(1);
    }
    return EXIT_SUCCESS;
}