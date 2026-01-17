<?php


$email = $_POST["email"];


$link = mysqli_connect("localhost","root","","test");

$res = mysqli_query($link,"SELECT `email`,`name`  FROM `add` WHERE email='$email'");

if($res->num_rows == 0){
echo "ng";

}
else{
$row = mysqli_fetch_assoc($res);
echo $row["name"];


}



?>