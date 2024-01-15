/*
    Sami Munir
    December 19th, 2023
    Data Structures & Algorithms
    - Static Arrays: C#
*/
namespace Static_arrays;
public class Program {
    public static void Main(string[] args) {
        Console.WriteLine("\nStatic Arrays - C#");
        Console.WriteLine("------------------");

        Static_Array static_array = new Static_Array(4);
        static_array.ToString();
        
        // testing function InsertHead()
        // static_array.InsertHead(2);
        // static_array.InsertHead(-7);
        // static_array.InsertHead(11);
        // static_array.InsertHead(63);
        // static_array.InsertHead(0); // ERROR RETURN EXPECTED (insert impossible to full-capacity static_array[].)

        // testing function InsertLast()
        static_array.InsertLast(2);
        static_array.InsertLast(-7);
        static_array.InsertLast(11);
        static_array.InsertLast(63);
        static_array.InsertLast(0); // ERROR RETURN EXPECTED (insert impossible to full-capacity static_array[].)

        // testing function RemoveHead()
        static_array.RemoveHead();
        static_array.RemoveHead();
        static_array.RemoveHead();
        static_array.RemoveHead();
        static_array.RemoveHead(); // ERROR RETURN EXPECTED (remove impossible from empty/null static_array[].)

        // testing function RemoveLast()
        static_array.InsertHead(2);
        static_array.InsertHead(7);
        static_array.InsertLast(-11);
        static_array.InsertLast(-556);
        static_array.InsertHead(0); // ERROR RETURN EXPECTED
        static_array.RemoveHead();
        static_array.RemoveLast();
        static_array.RemoveLast();
        static_array.RemoveLast();
        static_array.RemoveHead(); // ERROR RETURN EXPECTED
    }
}