<?php

		
		if(isset($_POST['action'])) 
		{					
			$FirstName = $_POST['name'];
			$LastName = $_POST['lastname'];
			$email = $_POST['email'];
							
			mail ($receiver, $name . " " . $lastname, "Comment was successfully submitted. Thanks!");

		}

?>