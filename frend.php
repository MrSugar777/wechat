<?php
session_start();
$email = $_SESSION["email"];

$link = mysqli_connect("localhost","root","","test");
$res = "";
$resData = "";

$res = mysqli_query($link,"SELECT `to` FROM `frends` WHERE `from`='$email'");
while($row = mysqli_fetch_assoc($res)){
$resData =  $resData.$row["to"].'|';
}

$res2 = mysqli_query($link,"SELECT `from` FROM `frends` WHERE `to`='$email'");
while($row2 = mysqli_fetch_assoc($res2)){
$resData =  $resData.$row2["from"].'|';
}

echo $resData;


?>