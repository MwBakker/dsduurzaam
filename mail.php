<?php 
    function sanitize_email($field) {
        $field = filter_var($field, FILTER_SANITIZE_EMAIL);
        if (filter_var($field, FILTER_VALIDATE_EMAIL)) {
            return true;
        } else {
            return false;
        }
    }
    $data = json_decode(file_get_contents("php://input"), TRUE);

    $headers  = "From: " . $data['name'] . "<". $data['email'] .">\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=iso-8859-1\n";

    $to_email = 'info@insteq.nl';
    $subject = 'Contactformulier - ' . $data['subject'];
    $message = '<html><body>';
    $message = '<p>'. $data['message'] . '</p>';
    if ($data['name'] != null) {
        $message .= '<br>';
        $message .= $data['name'];
        $message .= '<br>';
        $message .= $data['phone'];
    }
    $message .= '</body></html>';
    $secure_check = sanitize_email($to_email);
    if ($secure_check == false) {
    } else {
        mail($to_email, $subject, $message, $headers);
    }
?>