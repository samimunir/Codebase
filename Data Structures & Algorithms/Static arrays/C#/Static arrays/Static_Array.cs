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

    private Boolean doesExist() {
        if (static_array == null) {
            return false;
        } else {
            return true;
        }
    }
}