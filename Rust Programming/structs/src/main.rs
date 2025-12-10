fn main() {
    println!("Structs in Rust!");
    println!("-------------------------");

    /*
        A struct (structure) is a container for related pieces of data.
        - comparable to an Object
    */
    struct Developer {
        id: String,
        name: String,
        age: i8,
        performance: f32,
    }

    /*
        An instance is the concrete value made from a type.
    */
    let dev_1: Developer = Developer {
        id: String::from("as1uqw49sada9h"),
        name: String::from("Sami Munir"),
        age: 24,
        performance: 89.99,
    };
    println!(
        "\ndev_1 ->\n\tid = {}\n\tname = {}\n\tage = {}\n\tperformance = {}%",
        dev_1.id, dev_1.name, dev_1.age, dev_1.performance
    );
}
