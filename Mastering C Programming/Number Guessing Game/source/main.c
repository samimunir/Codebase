/*
    Sami Munir
    February 7th, 2024
    Number Guessing Game
    Mastering C Programming
*/
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[]) {
    int secretNum = 7;
    int guess;
    int numGuesses = 0;
    int numGuessLimit = 3;
    int outOfGuesses = 0;
    
    while (guess != secretNum && outOfGuesses == 0) {
        if (numGuesses < numGuessLimit) {
            printf("Enter a number: ");
            scanf("%d", &guess);
            numGuesses++;
        } else {
            outOfGuesses = 1;
        }
    }
    if (outOfGuesses == 1) {
        printf("Out of guesses.\n");
    } else {
        printf("You win!\n");
    }

    return EXIT_SUCCESS;
}