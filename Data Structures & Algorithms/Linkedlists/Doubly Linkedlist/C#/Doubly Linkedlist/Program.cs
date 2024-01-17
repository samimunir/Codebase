/*
    Sami Munir
    January 16th, 2024
    Data Structures & Algorithms
    - Doubly Linkedlist: C#
*/

public class Program {
    public static void Main(string[] args) {
        Console.WriteLine("\nDoubly Linkedlist - C#");
        Console.WriteLine("----------------------");

        DoublyLinkedlist dll_one = new DoublyLinkedlist();
        dll_one.ToString();

        // testing function InsertFirst()
        dll_one.InsertFirst(2);
        dll_one.InsertFirst(-11);
        dll_one.InsertFirst(65);

        // testing function RemoveFirst()
        dll_one.RemoveFirst();
        dll_one.RemoveFirst();
        dll_one.RemoveFirst();
        dll_one.RemoveFirst(); // ERROR expected --> null linkedlist removal

        // testing function InsertLast()
        dll_one.InsertLast(2);
        dll_one.InsertLast(-11);
        dll_one.InsertLast(65);

        // testing function RemoveLast()
        dll_one.RemoveLast();
        dll_one.RemoveLast();
        dll_one.RemoveLast();
        dll_one.RemoveLast(); // ERROR expected --> nu
    }
}