<?php

    echo "hello";

    $userName = $_POST["name"];
    $userAge = $_POST["age"];
    
    if($userName === "jack" && $userAge === 28){
        echo "我是jack";
    }else{
        echo "not jack";
    }

?>