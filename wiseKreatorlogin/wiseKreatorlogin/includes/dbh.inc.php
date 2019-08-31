<?php 

$servername = "localhost";
$dbName = "wiseKreator";
$dbUser = "root";
$dbPass = "";

$conn = mysqli_connect($servername, $dbUser, $dbPass, $dbName);

if (!$conn) {
	die("connection failed".mysql_connect_error());
}