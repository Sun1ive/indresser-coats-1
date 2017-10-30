<?php 

$recepient = "info@indresser.com";
$recepient2 = "vi290983mal@gmail.com";
$sitename = "coats.indresser.com";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$headers = "Content-type: text/html; charset=\"utf-8\"";



$message = "Имя: $name\nТелефон: $phone\nПочта: $email";

$title = "Заказ с лендинга \"$sitename\" ";

mail($recepient, $title, $message, $headers);
mail($recepient2, $title, $message, $headers);


header('location: https://coats.indresser.com');