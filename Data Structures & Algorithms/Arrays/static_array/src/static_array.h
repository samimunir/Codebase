struct array_ds {
    int* array;
    int capacity;
    int num_of_elements;
    int pointer;
    int max_mem;
    int mem_avail;
};

struct array_ds* init_array(int capacity);

struct array_ds* push_head(struct array_ds* array_struct, int element);