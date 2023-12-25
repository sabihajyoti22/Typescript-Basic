var names;
names = { firstName: "sabiha", lastName: "Jyoti" };
console.log(names);
var clients;
clients = [];
var client1;
client1 = { id: 123, name: "xyz" };
clients.push(client1);
var client2;
client2 = { id: 456, name: "abc" };
clients.push(client2);
for (var key in clients) {
    console.log(clients[key]["id"]);
}
