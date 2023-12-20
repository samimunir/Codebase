﻿namespace Static_arrays;

public class Static_Array {
    int[] static_array;
    int front_pointer;
    int back_pointer;
    int max_elements;
    int total_elements;

    public Static_Array(int max_elements) {
        if (max_elements <= 0) {
            Console.WriteLine("\n--<ERROR>-- cannot initialize static_array[] with size{" + max_elements + "}.");
        } else {
            this.max_elements = max_elements;
            static_array = new int[this.max_elements];
            front_pointer = -1;
            back_pointer = -1;
            total_elements = 0;
            Console.WriteLine("\nSUCCESS: static_array[] initialized.");
        }
    }

    private Boolean DoesExist() {
        if (static_array == null) {
            return false;
        } else {
            return true;
        }
    }

    private Boolean IsEmpty() {
        if (front_pointer <= 0) {
            return true;
        } else {
            return false;
        }
    }

    private Boolean IsFull() {
        if (total_elements == max_elements || front_pointer >= max_elements) {
            return true;
        } else {
            return false;
        }
    }

    private void PrintDSStats() {
        Console.WriteLine("printDSStats() called...");
        PrintDS();
        Console.WriteLine("\tfront_pointer: " + front_pointer);
        Console.WriteLine("\tback_pointer: " + back_pointer);
        Console.WriteLine("\ttotal_elements: " + total_elements);
        Console.WriteLine("\tmax_elements: " + max_elements);
    }

    private void PrintDS() {
        string ds_output = "";
        for (int i = 0; i < max_elements; i++) {
            ds_output += static_array[i] + " ";
        }
        Console.WriteLine("\tstatic_array[]: " + ds_output);
    }

    public override string ToString() {
        PrintDSStats();
        return "";
    }
}