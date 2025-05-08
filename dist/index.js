"use strict";
{
    function formatString(input, toUpper = true) {
        return toUpper ? input.toUpperCase() : input.toLowerCase();
    }
    formatString("Hello");
    formatString("Hello", true);
    formatString("Hello", false);
    // console.log(formatString("Mitu"));        
    // console.log(formatString("Hello", true));  
    // console.log(formatString("Hello", false)); 
    function filterByRating(items) {
        return items.filter(item => item.rating >= 4);
    }
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];
    const myBooks = [
        { title: "Physics", rating: 3.9 },
        { title: "Math", rating: 4.0 },
        { title: "English", rating: 5.0 }
    ];
    filterByRating(myBooks);
    filterByRating(books);
    function concatenateArrays(...arrays) {
        return arrays.reduce((stockArray, currentArray) => stockArray.concat(currentArray), []);
    }
    concatenateArrays(["a", "b"], ["c"]);
    concatenateArrays([1, 2], [3, 4], [5]);
    class Vehicle {
        // Constructor
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        // Method to get the basic info (make and year)
        getInfo() {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }
    class Car extends Vehicle {
        // Constructor for the Car class, using the parent constructor
        constructor(make, year, model) {
            super(make, year); // Calling the parent class constructor
            this.model = model;
        }
        // Method to get the model of the car
        getModel() {
            return `Model: ${this.model}`;
        }
    }
    // Example usage:
    const myCar = new Car("Toyota", 2020, "Corolla");
    console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
    console.log(myCar.getModel()); // Output: "Model: Corolla"
}
