/*
The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method 
and get access to the parent's properties and methods.
*/

class Car {
    // Constructor for the Car class
    constructor(name) {
        this.brand = name; // Set the brand property to the name parameter
    }

    // Method to return a string that includes the car's brand
    present() {
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    // Constructor for the Model class
    constructor(name, model) {
        super(name); // Call the parent class (Car) constructor to set the brand property
        this.model = model; // Set the model property to the model parameter
    }

    // Method to return a string that includes the car's brand and model
    show() {
        // Call the present() method from the Car class and add the model information
        return this.present() + ', it is a ' + this.model;
    }
}

// Create an instance of the Model class with brand "Ford" and model "Mustang"
const mycar = new Model("Ford", "Mustang");

// Call the show() method to display the car's brand and model
console.log(mycar.show()); // Output: "I have a Ford, it is a Mustang"
