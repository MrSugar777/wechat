<?php
session_start();

$email = $_POST["email"];

$smail = $_SESSION["email"];

$link = mysqli_connect("localhost","root","","test");

mysqli_query($link,"INSERT INTO `frends`(`from`, `to`,`status`) VALUES ('$smail','$email', '0')");




?>