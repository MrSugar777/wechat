<?php
session_start();



$semail = $_SESSION["email"];

$res = "";
$resData = "";
$link = mysqli_connect("localhost","root","","test");

$res = mysqli_query($link,"SELECT `text` FROM `peng` WHERE `email`= '$semail'");

while($row = mysqli_fetch_assoc($res)){

$resData =  $resData.$row["text"].'<br><hr></br>';

}



echo $resData;