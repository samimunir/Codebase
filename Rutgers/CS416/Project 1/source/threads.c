/*
    Sami Munir | sm2246
    February 12th, 2024
    CS416 - OSD
    Project 1: threads.c
    Rutgers University@ilab1
*/

/*
    Compiled & tested on Linux x86 (32-bit)
*/

#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

pthread_t t1, t2, t3, t4;
pthread_mutex_t mutex;
int x = 0;
int loop = 10000;

/*
    Counter incrementer function
    - This is the function that each thread will run which increments the
        shared counter x by LOOP times.
    - Your job is to implement the incrementing of x such that update to
        the counteris synchronized across threads.
*/
void *add_counter(void *arg) {
    int i;
    /*
        Add thread syncrhonization logic in this function.
    */
    for (i = 0; i < loop; i++) {
        // Lock the mutex before updating x
        pthread_mutex_lock(&mutex);
        x = x + 1;
        // Unlock the mutex after updating x
        pthread_mutex_unlock(&mutex);
    }
    return NULL;
}

/*
    Main function
    - This is the main function that will run.
    - Your job is to create four threads and have them run the 
        add_counter function().
*/
int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Bad Usage: Must pass in an integer.\n");
        exit(1);
    }
    loop = atoi(argv[1]);
    printf("Going to run four threads to increment x up to %d\n", 4 * loop);
    
    /*
        Implement code here...
    */
    pthread_mutex_init(&mutex, NULL); // Initialize the mutex
    // Create four threads
    pthread_create(&t1, NULL, add_counter, NULL);
    pthread_create(&t2, NULL, add_counter, NULL);
    pthread_create(&t3, NULL, add_counter, NULL);
    pthread_create(&t4, NULL, add_counter, NULL);
    /*
        Make sure to join the threads.
    */
    // Wait for all threads to finish.
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);
    pthread_join(t3, NULL);
    pthread_join(t4, NULL);
    
    printf("The final value of x is %d\n", x);

    // Destroy the mutex
    pthread_mutex_destroy(&mutex);

    return 0;
}