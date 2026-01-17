<?php
session_start();

$email = $_POST["email"];

$semail = $_SESSION["email"];

$res = "";
$resData = "";
$link = mysqli_connect("localhost","root","","test");

$res = mysqli_query($link,"SELECT `text`, `from` FROM `ms` WHERE
(`from`='$semail' and `to` = '$email')
or
(`to`='$semail' and `from` = '$email')
");
while($row = mysqli_fetch_assoc($res)){
if($row["from"]==$semail){
$resData = "<div style='width:380px;text-align:right'>". $resData.$row["text"].'</div><br>';
}else{
$resData = "<div style='width:380px;text-align:left'>".$resData.$row["text"].'</div><br>';
}
}



echo $resData;







?>