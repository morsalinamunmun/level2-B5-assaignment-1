{

    function formatString(input: string, toUpper: boolean = true): string {
        return toUpper ? input.toUpperCase() : input.toLowerCase();
    }

    formatString("Hello");
    formatString("Hello", true);
    formatString("Hello", false);

    // console.log(formatString("Mitu"));        
    // console.log(formatString("Hello", true));  
    // console.log(formatString("Hello", false)); 

    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
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


    function concatenateArrays<T>(...arrays: T[][]): T[] {
        return arrays.reduce((stockArray, currentArray) => stockArray.concat(currentArray), []);
      }
      
      concatenateArrays(["a", "b"], ["c"]);    
      concatenateArrays([1, 2], [3, 4], [5]);     

      class Vehicle {
        private make: string;
        private year: number;
      
        constructor(make: string, year: number) {
          this.make = make;
          this.year = year;
        }

        getInfo(): string {
          return `Make: ${this.make}, Year: ${this.year}`;
        }
      }
      
      class Car extends Vehicle {
        private model: string;
        
        constructor(make: string, year: number, model: string) {
          super(make, year); 
          this.model = model;
        }
      
        getModel(): string {
          return `Model: ${this.model}`;
        }
      }
      
      const myCar = new Car("Toyota", 2020, "Corolla");
    //   const myCar = new Car("honda", 2020, "SUV");
      
      myCar.getInfo();  
      myCar.getModel();
      
}