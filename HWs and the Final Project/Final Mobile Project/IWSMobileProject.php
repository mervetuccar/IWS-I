
<?php
//Merve Tuccar, IWS I, Final Project php file, Fall 2013
 $command = $_POST['command'];

 
 $conn =mysql_connect("localhost","bmiuser","deus100");
 mysql_select_db("bmiuser");
 
if( $command == "Login")
{
	$email = $_POST['email'];
	$password = $_POST['password'];
	$queryString = "SELECT * FROM user WHERE email ='$email'";
	
	$query = mysql_query($queryString, $conn);//,$conn);

	if(mysql_num_rows($query) > 0)
	{
		 
		  $row = mysql_fetch_assoc($query);
		 
          if($row['password'] == $password)
		  {
			echo "Login_success";
		  
		  }
		  else
			echo "Login_fail";
			
			
	
	}
}

else if($command == "Signup")
{	

	$email = $_POST['email'];
	$password = $_POST['password'];
	
	$date = new DateTime();
	$realDate = $date->format('Y-m-d');
	$query = mysql_query("INSERT INTO `bmiuser`.`user` (`email`, `password`, `bmi`, `date`) VALUES ('$email', '$password',4, $realDate)", $conn);
	//INSERT INTO `bmiuser`.`user` (`email`, `password`, `bmi`, `date`) VALUES ('merve', '1', '3.4', '2013-12-04');

	echo "signup_success";
		  

	
	

}






?>