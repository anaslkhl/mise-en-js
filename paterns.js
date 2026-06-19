const tags = [
    "js",
    "php",
    "js",
    "react",
    "php"
];


function duplication(tags){

    let dup = [];
    for(let i = 0; i < tags.length; i++){

        if(!dup.includes(tags[i])){
            dup.push(tags[i]);
        }

    }
    return dup;
}


console.log(duplication(tags));


const users = [
    { email:"a@test.com" },
    { email:"b@test.com" },
    { email:"a@test.com" }
];

function doublon(users){

    for(let i = 0; i< users.length - 1; i++){

        for(let x = i+1; x<users.length; x++)
        if(users[i].email === users[x].email){
            users.splice(x, 1);
        }
    }
    return users;
}

console.log(doublon(users));

const passwords = [
    "abc123",
    "password",
    "admin"
];

function validation(data){

    let result = data.every(password => password.length > 6);
    return result;
}
console.log(validation(passwords));

