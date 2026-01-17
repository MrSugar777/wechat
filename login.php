<?php
session_start();

$email = $_POST["email"];
$password = $_POST["password"];

$link = mysqli_connect("localhost","root","","test");

$res = mysqli_query($link,"SELECT `email`, `password` FROM `add` WHERE email='$email' and password='$password'");

if($res->num_rows == 0){
echo "ng";

}
else{
$_SESSION["email"] = $email;
echo "ok";


}



?>