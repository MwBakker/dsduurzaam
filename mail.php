<?php
header('Content-Type: application/json');

// Sanitize email address
function sanitize_email($email) {
  return filter_var($email, FILTER_SANITIZE_EMAIL);
}

$data = json_decode(file_get_contents("php://input"), TRUE);

if (sanitize_email($data['email'])) {
  $to = 'info@insteq.nl';
  $subject = 'Contact Form Submission - ' . $data['subject'];
  $message = 'Name: ' . $data['firstName'] . ' ' . $data['lastName'] . "\n";
  $message .= 'Email: ' . $data['email'] . "\n";
  if ($data['phone']) {
    $message .= 'Phone: ' . $data['phone'] . "\n";
  }
  $message .= 'Message: ' . $data['message'];

  $headers = "From: " . $data['email'] . "\n";
  $headers .= 'X-Mailer: PHP/' . phpversion();
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\n";

  if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]); // Send success message to Vue
  } else {
    echo json_encode(['error' => 'Error sending email']); // Send error message
  }
} else {
  echo json_encode(['error' => 'Invalid email address']); // Handle invalid email
}
?>