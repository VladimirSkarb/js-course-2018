const people = [
    { id: 1, name: 'Nick', friends: [2, 5, 6] },
    { id: 2, name: 'John', friends: [1, 3] },
    { id: 3, name: 'Mike', friends: [2, 5] },
    { id: 4, name: 'Janny', friends: null },
    { id: 5, name: 'Edward', friends: [1, 3] },
    { id: 6, name: 'Jeen', friends: [5, 1] },
];


function getPeople(userId) {
    const person = people.find(user => user.id === userId); // get user;
    if (typeof person === 'undefined') {
        return 'User not found';
    }
    if (Array.isArray(person.friends)) {
        const friends = people.filter(friend => person.friends.includes(friend.id)); // get friends;
        console.log(person.name);
        return friends;
    }
    return `${person.name} friends not found`;
}

console.log(getPeople(2));
console.log(getPeople(4));
console.log(getPeople(100500));
