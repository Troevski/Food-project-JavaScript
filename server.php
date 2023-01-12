<?php
// получаем на php коде данные , чтобы с ними можно было работать 
$_POST = json_decode(file_get_contents("php://input"), true);
echo var_dump($_POST);
// берёт данные которые пришли , превращает в строку , и показывает на клиенте 