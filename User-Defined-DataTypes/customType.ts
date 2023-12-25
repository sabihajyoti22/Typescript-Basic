type Clients = {id: number, name: string};

let clients : Clients[];
clients = []

let client1 : Clients;
client1 = { id: 123, name: "xyz"}
clients.push(client1)

let client2 : Clients;
client2 = { id: 456, name: "abc"}
clients.push(client2)

for(let key in clients){
    console.log(clients[key]["id"])
}