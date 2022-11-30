enum Role { ADMIN, AUTHOR }

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role
} = {
  name: 'Ikram',
  age: 34,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

if(person.role === Role.ADMIN) {
  console.log('Yes! i am '+ Role[Role.ADMIN]);
}
