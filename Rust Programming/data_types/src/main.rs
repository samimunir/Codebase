/*
    Every Rust variable/value has a data type.

    Rust is a statically typed language, which means the compiler must known the types of all variables at compile time.
    - the compiler can infer the types of variables based on their initial assignments.
*/

fn main() {
    println!("Data Types in Rust");
    println!("-------------------------");

    /*
        Scalar types: a type that holds a single value.
        - Rust has 4 scalar types:
            > integers
            > floating-point numbers
            > Booleans
            > characters
        - An integer is a whole number
        - A floating-point number is a decimal number
    */
    let my_favorite_number = 7;
    println!("\nmy_favorite_number: {}", my_favorite_number);

    /*
        Signed integer types support positive and negative values.
        - type is abbreviated with "i"

        Unsigned integer types only suport zero and positive values.
        - can store a larger max value in the positive direction
        - type is abbreviated with "u"
    */
    let pos_scale: u8 = 5;
    println!("\npos_scale: {}", pos_scale);
    let neg_scale: i8 = -5;
    println!("neg_scale: {}", neg_scale);

    /*
        Bits: the smallest unit of computer memory.
        - represents a value of either 0 OR 1.

        8 bits = 1 byte
        1024 bytes = 1KB
        1024KB = 1MB
        1024MB = 1GB

        An i32 (32-bit integer) requires 4 bytes of memory.
    */
    let my_favorite_number: i8 = 7;
    println!("\nmy_favorite_number: {}", my_favorite_number);

    /*
        Use underscores within numbers for readability.
    */
    #[allow(unused_variables)]
    let population = 6_326_598;

    /*
        usize & isize are type aliases for dynamic numeric data types depending on the computer architecture.
    */
}
