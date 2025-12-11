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

    println!("\nThis is a String literal.");

    let file_path = "C:\\samid\\Desktop\\samidmunir\\Codebase\\Rust Programming";
    println!("\nfile_path: {}", file_path);
    let file_path_2 = r"C:\samid\Desktop\samidmunir\Codebase\Rust Programming\data_types";
    println!("\nfile_path_2 (raw String): {}", file_path_2);

    /*
        A method is a function that lives on a value.
        - it's can action that we can ask the value to execute
        - Syntax: value.method()
    */
    let num: i8 = -7;
    println!("\nnum: {}", num);
    println!("num.abs(): {}", num.abs());

    let empty_space: &str = "     random content     ";
    println!("\nempty_space: {}", empty_space);
    println!("empty_space.trim(): {}", empty_space.trim());

    /*
        Arguments to a method/function can tweak the behavior of that method/function.
    */
    println!("\nnum: {}", num);
    println!("num.pow(2): {}", num.pow(2));

    /*
        A floating-point type represents a decimal number.
        - 32bit or 64bit (4 bytes vs. 8 bytes) floor ciel round
    */
    let pi: f64 = 3.14159;
    println!("\npi: {}", pi);
    println!("pi.floor(): {}", pi.floor());
    println!("pi.ceil(): {}", pi.ceil());
    println!("pi.round(): {}", pi.round());

    /*
        A format specifier customizes the printed representation of the interpolated value.
    */
    println!("\npi (formatted): {:.4}", pi);

    /*
        Casting is transforming from one type to another.
    */
    let miles_away = 50;
    #[allow(unused_variables)]
    let miles_away_i8 = miles_away as i8;

    let miles_away = 100.329032;
    println!("\nmiles_away: {}", miles_away);
    let miles_away_f32 = miles_away as f32;
    println!("miles_away_f32: {}", miles_away_f32);
    let miles_away_int = miles_away as i32;
    println!("miles_away_int: {}", miles_away_int);

    /*
        Augmented Assignment Operator
    */
    let mut num: i8 = 1;
    num += 1;
    println!("\nnum: {}", num);

    /*
        Booleans
        - 1 byte
    */
    #[allow(unused_variables)]
    let is_raining = false;

    /*
        Characters
    */
    let dollar_sign = '$';
    println!("\ndollar_sign: {}", dollar_sign);
    println!("dollar_sign.is_alphabetic(): {}", dollar_sign.is_alphabetic());

    /*
        Arrays
        - an array is a fixed-size collection of homogenous data (data of the same type).
    */
    let nums = [2, 5, 11, 63, 87, 409];

    /*
        The Display Trait
    */

    /*
        The Debug Trait
    */

    /*
        The dbg! Macro
    */

    /*
        Tuples
    */

    /*
        Ranges & Range iteration
    */

    /*
        Intro to Generics
    */
}
