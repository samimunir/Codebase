namespace Static_arrays;

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

    private Boolean CanInsert(int pointer) {
        if (pointer + 1 == max_elements) {
            return false;
        } else {
            return true;
        }
    }

    private void PrintDSStats() {
        // Console.WriteLine("printDSStats() called...");
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

    private int[] ShiftRight(int[] input_array, int pointer) {
        int[] temp_array = input_array;
        for (int i = pointer; i > 0; i--) {
            temp_array[i] = i - 1;
        }
        Console.WriteLine("pointer: " + pointer);
        for (int i = 0; i < input_array.Length; i++) {
            Console.WriteLine(input_array[i]);
        }
        return temp_array;
    }

    public void InsertHead(int data_element) {
        Console.WriteLine("\nInsertHead(" + data_element + ") called...");
        if (!DoesExist()) {
            max_elements = 3;
            static_array = new int[max_elements];
            front_pointer = -1;
            back_pointer = -1;
            front_pointer++;
            back_pointer++;
            static_array[front_pointer] = data_element;
            total_elements++;
        } else if (!IsFull()) {
            if (front_pointer == -1) {
                front_pointer++;
                back_pointer++;
                static_array[front_pointer] = data_element;
                total_elements++;
            } else {
                if (CanInsert(front_pointer)) {
                    front_pointer++;
                    static_array = ShiftRight(static_array, front_pointer);
                    static_array[back_pointer] = data_element;
                    total_elements++;
                } else {
                    Console.WriteLine("\n--<ERROR>-- cannot insert into full capacity static_array[].");
                }
            }
        }
        PrintDSStats();
    }
}