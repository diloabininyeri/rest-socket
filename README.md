# socket.io rest 
send to message or data with any software langauge,no need more enviroument just use http rest api


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

send data to socket with php
```php
$url = "http://localhost:3000/chanelname?token=$2y$10$.5iuqFaSaMQrPi/rMmUVjOJg/Ip6gEI5Jzhux.tzfyUu2ZmPOAs2C";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,"name=dılo&surname=sürücü");
.
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec($ch);



curl_close ($ch);

```
example subscribe to socket in html via js 

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.0.1/socket.io.min.js"
        integrity="sha512-eVL5Lb9al9FzgR63gDs1MxcDS2wFu3loYAgjIH0+Hg38tCS8Ag62dwKyH+wzDb+QauDpEZjXbMn11blw8cbTJQ=="
        crossorigin="anonymous"></script>

<script>

    const token = "$2y$10$.5iuqFaSaMQrPi/rMmUVjOJg/Ip6gEI5Jzhux.tzfyUu2ZmPOAs2C";
    const uri = "yoursocketserver.com:3000";

    let socket = io(uri, {auth: {token: token}});
    
    function socket_emit(channel, json) {
    let query = new URLSearchParams(json).toString();
    fetch(`http://172.16.45.131:3000/${channel}/?token=${token}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: query
    }).then(a => a.json()).then(e => console.log(e));
}


    socket.on('connect_error', (error) => console.error(error));
    socket.on("my-channel",(a)=>alert(JSON.stringify(a)))
    
    socket_emit("my-channel",{name:"dılo"});
    
 
</script>

 
```
