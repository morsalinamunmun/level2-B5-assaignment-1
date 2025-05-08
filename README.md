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


