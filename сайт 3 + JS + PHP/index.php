<?php 

$address = $_POST["address"];
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];


$link = mysqli_connect("localhost", "root");
mysqli_select_db($link, "sait");

if(!empty($address) && !empty($name) && !empty($email) && !empty($subject) && !empty($message)){
	mysqli_query($link, "INSERT INTO data_saita(address, name, email, subject, message) VALUES('$address', '$name', '$email', '$subject', '$message')");
}
/*$query = mysqli_query($link, "SELECT * FROM data_saita");*/

 ?>