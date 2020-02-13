<? php
  if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $message=$_POST['text'];
    $subject='message sent by '.$name;
    $mailTo='samrajyathapa123@gmail.com';
    $headers='From '.$from."\r\n".'Content-type: text/plain';
    $txt='';

    if(mail($mailTo, $subject, $message, $headers)){
      echo "message sent.";
    };
  }
?>
