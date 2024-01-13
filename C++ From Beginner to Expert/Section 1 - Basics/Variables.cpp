#include <iostream>
using namespace std;

int main() {
    cout << "\nVariables";
    cout << "\n\nprinting number 4: " << 4 << endl;

    int my_num = 7;
    cout << "\n\nmy_num: " << my_num << endl;
    cout << "address of my_num: " << &my_num << endl;

    short short_1 = 5;
    cout << "short_1: " << short_1 << endl;

    double double_1 = 7.1234556;
    cout << "double_1: " << double_1 << endl;

    float float_1 = 5.1827;
    cout << "float_1: " << float_1 << endl;

    char char_1 = 'S';
    cout << "char_1: " << char_1 << endl;

    string string_1 = "Sami Munir";
    cout << "string_1: " << string_1 << endl;

    string string_a = "Hello ";
    string string_b = "World.";
    string concatenated_string = string_a + string_b;
    cout << "concatenated_string: " << concatenated_string << endl;

    bool bool_1 = true;
    cout << "bool_1: " << bool_1 << endl;

    unsigned short unsigned_short_1 = 77;
    cout << "unsigned_short_1: " << unsigned_short_1 << endl;

    const string MY_NAME = "Sami Munir";
    cout << "MY_NAME: " << MY_NAME << endl;

    return 0;
}