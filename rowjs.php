<?php
include("connection1.php");
  $query = "select price from gift where id=" . $_POST["productId"];
  $result = $conn->query($query);
  $row=mysqli_fetch_assoc($result);
  print $row["price"];
  $sql = "select id,gift_name from gift";
  $result = $conn->query($sql);
  $sql = "select id,discount from gift";
  $resulttt = $conn->query($sql);
?>
<html>
    <tr id = "head">
    
     <td><label for="giftname"></label>
         <select name = "giftname" id = "giftname">
         <?php
          while($giftname = mysqli_fetch_array($result))
          {
         ?>
          <option value = "<?php echo $giftname["id"]; ?>">
          <?php echo $giftname["gift_name"]; ?>
          </option>
          <?php
          }
          ?>
         </select>
     </td>
     <td><label for="price"></label>
         <input type="text" name="price" id="price" disabled><br>
     </td>
     <td><label for="quantity"></label>
         <input type="number" name="quantity1" id="quantity1" onchange = "mul_number();"><br>
     </td>
     <td><label for = "totalamount"></label>
       <input type = "number" name = "totalamount" id = "totalamount"  disabled >
     </td>
     <td><label for="discount"></label>
         <input type="number" name="discount1" id="discount1" disabled><br>
     </td>
     <td><label for="Totalafterdiscount"></label>
         <input type="number" name="totalafterdiscount" id="totalafterdiscount" onchange = "getPriceafterdiscount()" ></td>
     </tr>
  