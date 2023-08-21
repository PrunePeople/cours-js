const users = [ 
    // index 0
    {
        firstname: "John",
        lastname: "DOE",
        age: 15,
    },
    // index 1
    {
        firstname: "Bruce",
        lastname: "WAYNE",
        age: 80,
    },
    // index 2
    {
        firstname: "John",
        lastname: "McLane",
        age: 60,
    },
];


for (let i = 0; i < users.length; i++) {
    // console.log(users[i].age);
    if (users[i].age > 21) {
        console.log(`${users[i].firstname} ${users[i].lastname}`);
    }
}

