<?php
session_start();



$text = $_POST["text"];

$semail = $_SESSION["email"];


$link = mysqli_connect("localhost","root","","test");

$res = mysqli_query($link,"INSERT INTO `peng`(`email`, `text`)  VALUES ('$semail','$text')");








?>