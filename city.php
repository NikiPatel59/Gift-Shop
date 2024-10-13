<?php
include("connection1.php");
  

  $query = "select id,city_name from city where state_id=" . $_POST["productId2"];;
  $resultt = $conn->query($query);
  while($statename = mysqli_fetch_array($resultt))
          {
             echo "<option value='".$statename['id']."'>".$statename['city_name']."</option>";
          }

           

?>