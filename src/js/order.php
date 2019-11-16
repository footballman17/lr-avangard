<?php

// define method
$method = $_SERVER['REQUEST_METHOD'];

// set default timezone
date_default_timezone_set('Europe/Moscow');

// script foreach
$c = true;
if ($method === 'POST') {

    $project_name = trim($_POST['project_name']);
    $admin_email  = trim($_POST['admin_email']);
    $mail_subject = trim($_POST['mail_subject']);

    foreach ($_POST as $key => $value) {
        if ($value != '' && $key != 'project_name' && $key != 'admin_email' && $key != 'mail_subject') {
            $form_content .= "
			" . (($c = !$c) ? '<tr style="background-color: #ffffff;">' : '<tr style="background-color: #f8f8f8;">') . "
				<td style='padding: 5px; border: #e9e9e9 1px solid;'><b>" . $key . "</b></td>
				<td style='padding: 5px; border: #e9e9e9 1px solid;'>" . $value . "</td>
			</tr>
			";
        }
    }
} else if ($method === 'GET') {

    $project_name = trim($_POST['project_name']);
    $admin_email  = trim($_POST['admin_email']);
    $mail_subject = trim($_POST['mail_subject']);

    foreach ($_POST as $key => $value) {
        if ($value != '' && $key != 'project_name' && $key != 'admin_email' && $key != 'mail_subject') {
            $form_content .= "
			" . (($c = !$c) ? '<tr style="background-color: #ffffff;">' : '<tr style="background-color: #f8f8f8;">') . "
				<td style='padding: 5px; border: #e9e9e9 1px solid;'><b>" . $key . "</b></td>
				<td style='padding: 5px; border: #e9e9e9 1px solid;'>" . $value . "</td>
			</tr>
			";
        }
    }
}

// create message
$order_data   = date('Y.m.d-H.i.s');
$form_content = "<table style='width: 100%;'>" . $form_content . "</table>";
$message      = file_get_contents('../docs/tpl-email/tpl-email_v1.html');
$message      = str_replace('%formContent%', $form_content, $message);

// include class
require_once 'sendmailsmtpclass.php';

// settings
$mailSMTP = new SendMailSmtpClass(
    /*
    */
    465, // port
    'UTF-8' // charset
);

// from
$from = array(
    // 'LR Avangard Автосервис', // name
    // 'noreply@lr-avangard.ru', // email (use 'login' from $mailSMTP class for Mail.RU)
    'LR Avangard Автосервис', // name
);

// to
$to = $admin_email;

// send message
$result = $mailSMTP->send($to, $mail_subject, $message, $from);

if ($result === true) {
    echo 'Done';
} else {
    echo 'Error: ' . $result;
}
