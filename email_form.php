<!DOCTYPE html>
<html>
<head>
	<!-- CSS Style -->
	<link rel = "stylesheet" type = "text/css" href = "http://brianoleary.net/email_form_style.css">
</head>
<body>

<?php
if(isset($_POST['message'])) {
	//echo "in here<br/>";
    $email_to = "brianolearycs@gmail.com";
    $email_subject = "Email from brianoleary.net";
 
    function died($error) {
        echo "<p>Sorry, something went wrong.</p>";
        echo "<p>Errors are shown below.<br /><br /></p>";
        echo "<p id=\"error\">".$error."<br /><br /></p>";
        echo "<p>Please try again!<br /><br /></p>";
		echo "<script type=\"text/javascript\">
				setTimeout(closewindow, 4000)
				function closewindow(){
					window.close();
				}
			 </script>";
        die();
    }
 
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['mail']) ||
        !isset($_POST['message'])){
        died('Sorry. Did you leave something blank?');       
    }
 
    $first_name = $_POST['name']; // required
    $email_from = $_POST['mail']; // required
    $comments = $_POST['message']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'Invalid email address.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'Invalid Name.<br />';
  }
 
  if(strlen($comments) < 2) {
    $error_message .= 'Invalid message.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "Name: ".clean_string($first_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
	 
	// create email headers
	$headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();

	if(mail($email_to, $email_subject, $email_message, $headers)){
		echo "<p>Email sent!<p>";
	}else{
		echo "<p>Something went wrong!<p>";
	}	
?>


 <script type="text/javascript">
	setTimeout(closewindow, 2000)
	function closewindow(){
		window.close();
	}
 </script>

 
<?php
 
}
?>

</body>
</html>
