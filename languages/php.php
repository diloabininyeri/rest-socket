<?php


require_once 'vendor/autoload.php';


/*$date = date('Y/m/d H:i:s');
$salt = 'doping';
$password = "$date$salt";


echo password_hash($password, PASSWORD_DEFAULT);*/





$url = "http://localhost:3000/deneme?token=$2y$10$.5iuqFaSaMQrPi/rMmUVjOJg/Ip6gEI5Jzhux.tzfyUu2ZmPOAs2C";



$ch = curl_init();

curl_setopt($ch, CURLOPT_URL,$url);

curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,
    "name=value1 dggger  gr&postvar2=value2 ggerge rgegg&postvar3=value3");

// Receive server response ...
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$server_output = curl_exec($ch);



curl_close ($ch);

