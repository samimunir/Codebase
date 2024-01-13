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

    private Boolean CanInsert(int front_pointer) {
        if (front_pointer + 1 == static_array.Length) {
            return false;
        } else {
            return true;
        }
    }

    private Boolean CanRemove(int front_pointer) {
        if (front_pointer == -1 || static_array == null) {
            return false;
        } else {
            return true;
        }
    }

    private int[] ShiftRight(int[] input_array, int front_pointer) {
        for (int i = front_pointer; i > 0; i--) {
            input_array[i] = input_array[i - 1];
        }
        return input_array;
    }

    private int[] ShiftLeft(int[] input_array, int front_pointer) {
        for (int i = 1; i <= front_pointer; i++) {
            input_array[i - 1] = input_array[i];
        }
        return input_array;
    }

    public void InsertHead(int data_element) {
        if (CanInsert(front_pointer)) {
            Console.WriteLine("\nInsertHead(" + data_element + ") called...");
            if (front_pointer == -1) {
                front_pointer++;
                static_array[front_pointer] = data_element;
                back_pointer++;
                total_elements++;
            } else if (front_pointer == 0) {
                front_pointer++;
                static_array[front_pointer] = static_array[front_pointer - 1];
                static_array[back_pointer] = data_element;
                total_elements++;
            } else {
                front_pointer++;
                int[] shifted_array = ShiftRight(static_array, front_pointer);
                shifted_array[back_pointer] = data_element;
                static_array = shifted_array;
                total_elements++;
            }
        } else {
            Console.WriteLine("\n--<ERROR>-- cannot insert into full capacity static_array[].");
        }
        PrintDSStats();
    }

    public void RemoveHead() {
        if (CanRemove(front_pointer)) {
            Console.WriteLine("\nRemoveHead(" + static_array[back_pointer] + ") called...");
            if (front_pointer == 0) {
                // Console.WriteLine("HERE 1.");
                static_array[front_pointer] = 0;
                front_pointer = -1;
                back_pointer = -1;
                total_elements--;
            } else if (front_pointer == 1) {
                // Console.WriteLine("HERE 2.");
                static_array[front_pointer - 1] = static_array[front_pointer];
                static_array[front_pointer] = 0;
                front_pointer--;
                total_elements--;
            } else {
                // Console.WriteLine("HERE 3.");
                int[] shifted_array = ShiftLeft(static_array, front_pointer);
                shifted_array[front_pointer] = 0;
                static_array = shifted_array;
                front_pointer--;
                total_elements--;
            }
        } else {
            Console.WriteLine("\n--<ERROR>-- cannot remove from empty/null static_array[].");
        }
        PrintDSStats();
    }

    public void InsertLast(int data_element) {
        if (CanInsert(front_pointer)) {
            Console.WriteLine("\nInsertLast(" + data_element + ") called...");
            if (front_pointer == -1) {
                front_pointer++;
                static_array[front_pointer] = data_element;
                back_pointer++;
                total_elements++;
            } else {
                front_pointer++;
                static_array[front_pointer] = data_element;
                total_elements++;
            }
        } else {
            Console.WriteLine("\n--<ERROR>-- cannot insert into full capacity static_array[].");
        }
        PrintDSStats();
    }

    public void RemoveLast() {}
}