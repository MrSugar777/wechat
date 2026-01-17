<?php
session_start();
$semail = $_SESSION["email"];

$link = mysqli_connect("localhost","root","","test");
$res = "";
$resData = "";

$res = mysqli_query($link,"SELECT `to` FROM `frends` WHERE `from`='$semail'");
while($row = mysqli_fetch_assoc($res)){
$resData =  $resData.$row["to"].'|';
}

$res2 = mysqli_query($link,"SELECT `from` FROM `frends` WHERE `to`='$semail'");
while($row2 = mysqli_fetch_assoc($res2)){
$resData =  $resData.$row2["from"].'|';
}

echo $resData;


?>