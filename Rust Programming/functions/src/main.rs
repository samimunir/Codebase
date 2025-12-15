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
}

fn print_hello() {
    println!("\n<print_hello()>:");
    println!("-> Hello Rust dev!");
}

fn print_shutdown() {
    println!("\n<print_shutdown()>:");
    println!("-> functions\\src\\main.rs shutting down...");
}