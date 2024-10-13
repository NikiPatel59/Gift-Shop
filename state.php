<?php
include("connection1.php");

  $query = "select id,state_name from state where country_id=" . $_POST["productId1"];
  $resultt = $conn->query($query);
  while($statename = mysqli_fetch_array($resultt))
          {
             echo "<option value='".$statename['id']."'>".$statename['state_name']."</option>";
          }

?>