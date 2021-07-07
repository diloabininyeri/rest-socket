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

with php example
```php
$url = "http://localhost:3000/chanelname?token=$2y$10$.5iuqFaSaMQrPi/rMmUVjOJg/Ip6gEI5Jzhux.tzfyUu2ZmPOAs2C";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,
    "name=value1 dggger  gr&postvar2=value2 ggerge rgegg&postvar3=value3");

// Receive server response ...
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec($ch);



curl_close ($ch);

```

