/*
    Sami Munir
    December 19th, 2023
    Data Structures & Algorithms
    - Static Arrays: C#
*/

public class Program {
    public static void Main(string[] args) {
        Console.WriteLine("\nLinkedlist Queue - C#");
        Console.WriteLine("---------------------");

        LLQueue ll_queue = new LLQueue();
        ll_queue.ToString();

        // testing function Enqueue()
        ll_queue.Enqueue(2);
        ll_queue.Enqueue(-11);
        ll_queue.Enqueue(65);

        // testing function Dequeue()
        ll_queue.Dequeue();
        ll_queue.Dequeue();
        ll_queue.Dequeue();
        ll_queue.Dequeue(); // ERROR expected --> null linkedlist removal
    }
}