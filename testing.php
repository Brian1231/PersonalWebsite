<!DOCTYPE html>
<html>
<body>

<?php
echo "Just testing stuff";
if(isset($_POST['mail'])) {
	echo "in here<br/>";
}

	$first_name = $_POST['name']; // required
    $email_from = $_POST['mail']; // required
    $comments = $_POST['message']; // required
	
	echo $first_name;
	echo $email_from;
	echo $comments;
	
	// send email
	if(mail("brianolearycs@gmail.com","My subject",$comments)){
		echo "Email sent!";
	}else{
		echo"Something went wrong!";
	}
	
?> 

</body>
</html>