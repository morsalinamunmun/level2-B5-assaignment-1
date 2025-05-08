# level2-B5-assaignment-1

## 1. Ans: some differences between interfaces and types in TypeScript <br>
 **Interface:** <br>
- When using an interface, it is extended through extent.
- Supports merging interface declarations
- Interfaces are used for object structure and class contract.<br>

**Type:**<br>
- When using type, we can increase it using intersection(&).
- Type declaration merging is not supported.
- Type a more complex type of manipulation, intersection, union is used in this case.

## 6. Ans: TypeScript help in improving code quality and project maintainability
Using TypeScript provides developers with accurate and clean code, and using TypeScript in projects makes the project successful in the long run and easy to maintain.

## 7. Provide an example of using union and intersection types in TypeScript.
```ts
// union type example
type UserInfo = string | number;

function getUsers(user: UserInfo) {
  if (typeof user === string) {
    console.log(`This is user name`);
  }else{
    console.log('This is user id, roll')
  }
}
getUsers('Moon')
getUsers(88)

// intersection Type example
type User = { name: string };
type Admin = { role: string };

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "John",
  role: "superadmin"
};
```

## 2. What is the use of the keyof keyword in TypeScript? Provide an example.
keyof is a TypeScript keyword that creates a union type of all the keys of a given object type. It is used to access object properties in a type-safe manner.
```ts
type User = { name: string; age: number };
type UserKeys = keyof User;  

function getUserInfo<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 25 };
getUserInfo(user, "name"); 
```
## 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Enums are a feature in TypeScript that define a group of named constants. They increase code readability and maintainability by providing meaningful names for numeric or string values.
```ts
enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      console.log(Day.Monday) //0
      enum Position{
        Rahim: "CEO",
        Karim: "Developer"
      }
      console.log(Position.Rahim) //CEO
```
## 5. 
Type information provides assistance in typescript because it reduces and shortens boilerplate code. Although in many cases the typescript cannot understand it, we have to specify the type ourselves.

## 3. 
-**Any**
A variable with type any can hold any kind of value, and can do anything with it without compiler
```ts
let value: any = 0;
value = "hello"; 
```
-**Unknown**
Represents a value whose type is not known at compile time.
Unlike any, TypeScript forces to check its type before using it.
It’s safer and useful when dealing with external or uncertain data.
```ts
let value: unknown = "hello";

if (typeof value === "string") {
  console.log(value); 
}
```
-**Never**
Represents a value that never occurs.
Used for functions that never return throw an error
```ts
function neverFunc(message: string): never {
  throw new Error(message);
}
```
