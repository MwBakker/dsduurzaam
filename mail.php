<?php
  header('Content-Type: application/json');

  // Sanitize email address
  function sanitize_email($email) {
    return filter_var($email, FILTER_SANITIZE_EMAIL);
  }

  $data = json_decode(file_get_contents("php://input"), TRUE);

  if (sanitize_email($data['email'])) {
    $to = 'info@insteq.nl';
    $subject = 'Contact formulier - ' . $data['subject'];
    $message = $data['message'] . "\n\n";
    $message .= 'Naam: ' . $data['firstName'] . ' ' . $data['lastName'] . "\n";
    $message .= 'E-mail: ' . $data['email'] . "\n";
    if ($data['phone']) {
      $message .= 'Tel: ' . $data['phone'] . "\n";
    }
    $headers = "From: " . $data['email'] . "\n";

    if (mail($to, $subject, $message, $headers)) {
      echo json_encode(['success' => true]); // Send success message to Vue
    } else {
      echo json_encode(['error' => 'Error sending email']); // Send error message
    }
  }
?>