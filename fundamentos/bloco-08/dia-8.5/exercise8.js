const greet = (name = 'Fulano', greeting = 'Hi') => `${greeting} ${name}`;

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'
console.log(greet()); // 'Hi Fulano'