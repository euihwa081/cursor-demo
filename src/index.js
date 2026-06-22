const { extractEmails, getValidEmails } = require('./email.js');

console.log('hello cursor');

const members = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
    { name: 'Jim Beam', email: 'jim.beam@example.com' },
];

console.log(extractEmails(members));
console.log(getValidEmails(members));
