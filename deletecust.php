 <?php
include("connection1.php");
$sql = "delete from customer where id = " . $_GET["cust_name"] ;
   $delete=$conn->query($sql);
    if ($delete === TRUE) {
     header('Location:customerlist.html');
      exit;
                          }