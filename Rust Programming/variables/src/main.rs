fn main() {
    println!("Variables in Rust");
    println!("-------------------------");

    /*
        i32 represents 32-bit Integer (4 bytes)
    */
    let fav_num = 7;
    println!("\nfav_num: {}", fav_num);

    let a: i8 = 2;
    let b: i8 = 3;
    let sum = a + b;
    println!("\na: {}, b: {}", a, b);
    println!("sum ({} + {}): {}", a, b, sum);

    /*
        Variables are immutable by default.
    */
    let mut x: i8 = 1;
    println!("\nx: {}", x);
    x = x + 1;
    println!("x (after mut): {}", x);

    /*
        Variable shadowing is different than assigning a new value to an existing mutable variable.

        - this means redeclaring a variable. The original variable is replaced by the new one.
    */
    let x: f32 = 3.14;
    println!("\nx (after shadowing): {}", x);
}
