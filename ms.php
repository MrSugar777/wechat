<?php
session_start();

$email = $_POST["email"];

$text = $_POST["text"];

$semail = $_SESSION["email"];


$link = mysqli_connect("localhost","root","","test");

$res = mysqli_query($link,"INSERT INTO `ms`(`from`, `to`, `text`) VALUES ('$semail','$email','$text')");








?>