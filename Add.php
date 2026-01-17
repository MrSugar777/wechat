<?php

$email = $_POST["email"];
$password = $_POST["password"];

$link = mysqli_connect("localhost","root","","test");

mysqli_query($link,"INSERT INTO `add`(`email`, `password`) VALUES ('$email','$password')");

echo "登录成功";




?>