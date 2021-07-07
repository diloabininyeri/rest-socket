# rest-socket
rest socket.io so you can send to socket with http in any language


with js example code 

```js
function socket_emit(channel, json) {
    let query = new URLSearchParams(json).toString();
    fetch(`http://172.16.45.131:3000/${channel}/?token=${token}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: query
    }).then(a => a.json()).then(e => console.log(e));
}

socket_emit('notify', {seen: 45})

socket.on("notify", (a) => console.log(a))

```

with php example
```
```
