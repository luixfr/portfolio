<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="script.js"></script>
    <link rel="stylesheet" href="home.css">
    <link rel="stylesheet" href="porfolio.css">
    <link rel="stylesheet" href="contact.css">
    <link rel="stylesheet" href="about.css">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Josefin+Sans:300|Lato:300&display=swap"
        rel="stylesheet">
    <title>Luis Flores|Web Developer </title>
</head>
<body>
    <h1>ThankYou For Your Contact</h1>
    <h2 class="subtitle2">I will contact you soon</h2>
    <?php
        $name=$_POST["name"];
        $company=$_POST["company"];
        $email=$_POST["email"];
        $phone=$_POST["phone"];
        $message=$_POST["message"];

        echo "Todo bien";

        $emailBody = "Someone tried to contact you, here is the info \n\n
        Name: ".$name."\n
        Company: ".$company."\n
        Email: ".$email."\n
        Phone: ".$phone."\n
        Message: ".$message."\n\n
        
        Contact the customer asap"

        mail("luisk.fra@gmail.com", "Contact from your portfolio", $emailBody);
    ?>
</body>

</html>