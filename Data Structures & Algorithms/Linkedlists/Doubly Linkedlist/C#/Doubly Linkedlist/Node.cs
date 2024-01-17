public class Node {
    private int data;
    private Node next;
    private Node prev;

    public void SetData(int data) {
        this.data = data;
    }

    public int GetData() {
        return this.data;
    }

    public void SetNext(Node next) {
        this.next = next;
    }

    public Node GetNext() {
        return this.next;
    }

    public void SetPrev(Node prev) {
        this.prev = prev;
    }

    public Node GetPrev() {
        return this.prev;
    }
}