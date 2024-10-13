 <?php
include("connection1.php");
  

  $query = "select id,gift_name from gift";
  $resultt = $conn->query($query);
  while($giftname = mysqli_fetch_array($resultt))
          {
             echo "<option value='".$giftname['id']."'>".$giftname['gift_name']."</option>";
          }

           

?>