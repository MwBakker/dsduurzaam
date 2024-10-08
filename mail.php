<?php 
function sanitize_input($field) {
    return htmlspecialchars(strip_tags(trim($field)));
}

function sanitize_email($field) {
    $field = filter_var($field, FILTER_SANITIZE_EMAIL);
    return filter_var($field, FILTER_VALIDATE_EMAIL);
}

$data = json_decode(file_get_contents("php://input"), TRUE);

if (sanitize_email($data['email'])) {
    $headers  = "From: " . sanitize_input($data['name']) . "<". sanitize_input($data['email']) .">\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=iso-8859-1\n";

    $to_email = 'info@insteq.nl';
    $subject = 'Contactformulier - ' . sanitize_input($data['subject']);
    $message = '<html><body>';
    $message .= '<p>' . sanitize_input($data['message']) . '</p>';
    if (!empty($data['name'])) {
        $message .= '<br>' . sanitize_input($data['name']);
        $message .= '<br>' . sanitize_input($data['phone']);
    }
    $message .= '</body></html>';

    mail($to_email, $subject, $message, $headers);
}
?>
