{

    function formatString(input: string, toUpper: boolean = true): string {
        return toUpper ? input.toUpperCase() : input.toLowerCase();
    }

    formatString("Moon");
    formatString("Akhter", false);
    formatString("Hello", true);

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


    function processValue(value: string | number): number {
        if (typeof value === "string") {
            return value.length;
        } else {
            return value * 2;
        }
    }

    processValue("hello");
    processValue(10);


    interface Product {
        name: string;
        price: number;
      }
      
      function getMostExpensiveProduct(products: Product[]): Product | null {
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
      
      const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
      ];
      
      getMostExpensiveProduct(products);  
      
      enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string {
        return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
      }
      
      getDayType(Day.Monday); 
      (Day.Sunday); 

      async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (n < 0) {
              reject(new Error("Negative number not allowed"));
            } else {
              resolve(n * n);
            }
          }, 1000);
        });
      }
      squareAsync(4).then(console.log);        
      squareAsync(-3).catch(console.error);  
      
      

}