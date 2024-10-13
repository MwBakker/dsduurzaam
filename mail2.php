<?php

  header('Content-Type: application/json');
  
  $data = json_decode(file_get_contents("php://input"), TRUE);

  // Set email details
  $to = 'info@insteq.nl';
  $subject = 'Contact formulier - ';
  $message = 'This is a test ' . $_POST['message'];
  $headers = 'From: your_email@examplaaaaaa.com' . "\r\n";
  $headers .= 'X-Mailer: PHP/' . phpversion();
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\n";

  // Attempt to send email
  if (mail($to, $subject, $message, $headers)) {
    echo 'Test email sent successfully!';
  } else {
    echo 'Error sending test email.';
  }
?>