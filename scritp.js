let client1 = {
    "first_name": "John",
    "last_name": "Smith",
    "is_alive": true,
    "age": 27,
    "address": {
        "street_address": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postal_code": "10021-3100"
    },
    "phone_numbers": [
        {
            "type": "home",
            "number": "212 555-1234"
        },
        {
            "type": "office",
            "number": "646 555-4567"
        }
    ],
    "children": [
        "Catherine",
        "Thomas",
        "Trevor"
    ],
    "spouse": null
}
let client2 = {
    "first_name": "Mohammed",
    "last_name": "BAZZA",
    "is_alive": true,
    "age": 55,
    "address": {
        "street_address": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postal_code": "10021-3100"
    },
    "phone_numbers": [
        {
            "type": "home",
            "number": "212 555-1234"
        },
        {
            "type": "office",
            "number": "646 555-4567"
        }
    ],
    "children": [
        "Catherine",
        "Thomas",
        "Trevor"
    ],
    "spouse": null
}
let clients = {
    "client1": client1,
    "client2": client2,
}

// console.log(clients);
let output = document.getElementById("output");
//output.innerHTML = client.first_name+ " "+ client.last_name+"<br>"+client.address.city+" "+client.phone_numbers[1].type+" "+client.phone_numbers[1].number;
output.innerHTML = clients.client1.first_name + " " + client1.last_name+"<br>"+ client2.first_name+" "+client2.last_name;