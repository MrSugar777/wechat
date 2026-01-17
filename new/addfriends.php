<?php
session_start();

$email = $_POST["email"];

$semail = $_SESSION["email"];

$link = mysqli_connect("localhost","root","","test");

mysqli_query($link,"INSERT INTO `frends`(`from`, `to`,`status`) VALUES ('$semail','$email', '0')");




?>