public class LLQueue {
    private Node head;
    private Node tail;
    private int totalElements = 0;
    private int headPointer = -1;
    private int tailPointer = -1;

    private Boolean IsEmpty() {
        if (head == null || tail == null) {
            return true;
        } else {
            return false;
        }
    }

    private void PrintDS() {
        if (IsEmpty()) {
            Console.Write("\t\tHEAD <-> NULL\n");
        } else {
            Console.Write("\t\tHEAD <-> ");
            Node currentNode = this.head;
            while (currentNode != null) {
                Console.Write(currentNode.GetData() + " <-> ");
                currentNode = currentNode.GetNext();
            }
            Console.Write("NULL\n");
        }
    }

    private void PrintStats() {
        if (IsEmpty()) {
            Console.WriteLine("\tHEAD.getData(): N/A");
            Console.WriteLine("\tTAIL.getData(): N/A");
        } else {
            Console.WriteLine("\tHEAD.getData(): " + head.GetData());
            Console.WriteLine("\tTAIL.getData(): " + tail.GetData());
        }
        Console.WriteLine("\ttotal elements: " + totalElements);
        Console.WriteLine("\tHEAD pointer: " + headPointer);
        Console.WriteLine("\tTAIL pointer: " + tailPointer);
        PrintDS();
    }

    public void Enqueue(int data) {
        Console.WriteLine("\nEnqueue(" + data + ") called...");
        if (IsEmpty()) {
            head = tail = new Node();
            head.SetData(data);
            head.SetNext(null);
            head.SetPrev(null);
            totalElements = 1;
            headPointer = tailPointer = 0;
        } else {
            if (head.GetNext() == null) {
                Node newNode = new Node();
                newNode.SetData(data);
                newNode.SetNext(null);
                newNode.SetPrev(head);
                tail = newNode;
                head.SetNext(newNode);
                totalElements++;
                tailPointer++;
            } else {
                Node tempHead = head;
                Node currentNode = tempHead;
                while (currentNode != null) {
                    if (currentNode.GetNext() == null) {
                        break;
                    }
                    currentNode = currentNode.GetNext();
                }
                Node newNode = new Node();
                newNode.SetData(data);
                newNode.SetPrev(currentNode);
                newNode.SetNext(null);
                currentNode.SetNext(newNode);
                tail = currentNode.GetNext();
                totalElements++;
                tailPointer++;
            }
        }
        PrintStats();
    }

    public void Dequeue() {
        if (IsEmpty()) {
            Console.WriteLine("\nDequeue() called...");
            Console.WriteLine("\t--<ERROR>-- linkedlist is empty.");
        } else {
            Console.WriteLine("\nDequeue(" + head.GetData() + ") called...");
            if (head.GetNext() == null) {
                head = tail = null;
                totalElements = 0;
                headPointer = tailPointer = -1;
            } else {
                head.GetNext().SetPrev(null);
                head = head.GetNext();
                totalElements--;
                tailPointer--;
            }
        }
        PrintStats();
    }

    override public string ToString() {
        PrintDS();
        return "";
    }
}