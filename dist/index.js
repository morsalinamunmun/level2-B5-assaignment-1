"use strict";
{
    function formatString(input, toUpper = true) {
        return toUpper ? input.toUpperCase() : input.toLowerCase();
    }
    formatString("Moon");
    formatString("Akhter", false);
    formatString("Hello", true);
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
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            return `Model: ${this.model}`;
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    //   const myCar = new Car("honda", 2020, "SUV");
    myCar.getInfo();
    myCar.getModel();
    function processValue(value) {
        if (typeof value === "string") {
            return value.length;
        }
        else {
            return value * 2;
        }
    }
    processValue("hello");
    processValue(10);
    function getMostExpensiveProduct(products) {
        if (products.length === 0) {
            return null;
        }
        let mostExpensive = products[0];
        for (const product of products) {
            if (product.price > mostExpensive.price) {
                mostExpensive = product;
            }
        }
        return mostExpensive;
    }
    // ✅ Example usage:
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
    console.log(getMostExpensiveProduct(products));
    // Output: { name: "Bag", price: 50 }
}
