let names : object;
names = {firstName: "sabiha", lastName: "Jyoti"}
console.log(names)

let clients : object[];
clients=[]

let client1 : {id: number, name: string};
client1 = { id: 123, name: "xyz"}
clients.push(client1)

let client2 : {id: number, name: string};
client2 = { id: 456, name: "abc"}
clients.push(client2)

for(let key in clients){
    console.log(clients[key]["id"])
}