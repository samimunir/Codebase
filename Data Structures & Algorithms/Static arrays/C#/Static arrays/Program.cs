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
        static_array.InsertHead(2);
        static_array.InsertHead(-7);
    }
}