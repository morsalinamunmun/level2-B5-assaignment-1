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
        return arrays.reduce((acc, curr) => acc.concat(curr), []);
    }
    // Examples:
    console.log(concatenateArrays(["a", "b"], ["c"])); // ["a", "b", "c"]
    console.log(concatenateArrays([1, 2], [3, 4], [5])); // [1, 2, 3, 4, 5]
}
