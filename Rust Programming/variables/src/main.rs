/*
    To enable compiler directive for entire file
*/
// #![allow(unused_variables)] 

type Meters = i16;

fn main() {
    println!("Variables in Rust");
    println!("-------------------------");

    /*
        i8 represents a 8-bit Integer (1 byte)
    */
    let fav_num: i8 = 7;
    println!("\nfav_num: {}", fav_num);

    let a: i8 = 2;
    let b: i8 = 3;
    let sum = a + b;
    println!("\na: {}, b: {}", a, b);
    println!("sum ({a} + {b}): {sum}");

    /*
        Place an underscore before a variable name that is intentionally left to be unused.
    */
    let _random: i64 = 985202;

    /*
        Rust Error codes index -> a set of codes that describe each error thrown by the Rust compiler.
        - access using the command: rustc --explain E0384
    */

    /*
        Variables are immutable by default.
        - use the mut keyword to make a variable mutable.
    */
    let mut x: i8 = 1;
    println!("\nx: {}", x);
    x = x + 1;
    println!("x (after mut): {}", x);

    /*
        Variable shadowing is different than assigning a new value to an existing mutable variable.
        - this means redeclaring a variable.
        - the original variable is replaced by the new one - new type & new value, but same name)
    */
    let x: f32 = 3.14;
    println!("x (after shadowing): {0}", x);

    let first_name = "Sami";
    println!("\nfirst_name: {first_name}");

    /*
        The scope is a region or boundary where a name is valid.
        - a block is considered the space between a set of curly braces.
    */
    let is_duplicate: bool = false;
    {
        let is_duplicate: i8 = 1;
        println!("\nis_duplicate (inner): {}", is_duplicate);
    }
    println!("is_duplicate (outer): {}", is_duplicate);

    /*
        A constant is a name assigned to a value.
        - a constant's value cannot change
        - cannot use the mut keyword with constants
        - must provide type & value when declaring a constant
    */
    const PI: f64 = 3.14159265;
    println!("\nPI (constant): {}", PI);

    /*
        Type alias is an alternate name that we can assign to an existing type in Rust.
        - allows to provide additional context for a given type.
    */
    let mile_race_length: Meters = 1600; // meters
    println!("\nmile_race_length: {} meters", mile_race_length);

    /*
        A compiler directive is an annotation that tells the compiler how to parse the code.
        - an instruction to the compiler to tell it how to think & operate
        - can be applied to single instructions, functions, or files
    */
    #[allow(unused_variables)]
    /*
        This directive allows unused variables like half_mile_race_length.
    */
    let half_mile_race_length: Meters = 800;
}
