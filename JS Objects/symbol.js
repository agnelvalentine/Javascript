let user = { // belongs to another code
    name: "John"
};

let id = Symbol("id");

user[id] = 1;
user.name = "Agnel";
alert(user.name);
alert(user[id]);


let id = Symbol("id");

let user = {
    name: "John",
    [id]: 123 // not "id": 123 , symbol key not string key
};