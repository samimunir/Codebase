/*
    Functions in Rust
    - defining functions
    - parameters & arguments
    - the return keyword
    - explict vs. implicit returns
    - the Unit type
    - block evaluations
*/

fn main() {
    println!("Welcome to Functions in Rust!");
    println!("------------------------------");

    print_hello();
    print_shutdown();

    welcome_dev("Sami M.");

    print_employee_record("John Doe", 36, "Rust Developer");

    let add_sum: i32 = sum(2, 3);
    println!("\nsum(2, 3): {}", add_sum);
}

fn print_hello() {
    println!("\n<print_hello()>:");
    println!("-> Hello Rust dev!");
}

fn print_shutdown() {
    println!("\n<print_shutdown()>:");
    println!("-> functions\\src\\main.rs shutting down...");
}

/*
    A parameter is a name for an expected input to a function.
    - the caller required to pass a concrete value to the function.

    An argument is that concreyr value passed in for a parameter when the function is invoked.
*/

fn welcome_dev(name: &str) {
    println!("\n<welcome_dev()>:");
    println!("-> Welcome to Rust, {}", name);
}

fn print_employee_record(name: &str, age: u8, position: &str) {
    println!("\n<print_employee_record()>:");
    println!("-> Name: {}", name);
    println!("-> Age: {}", age);
    println!("-> Position: {}", position);
}

fn sum(a: i32, b: i32) -> i32 {
    let add_sum: i32 = a + b;
    return add_sum;
}