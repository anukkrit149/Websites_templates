<?php

if (isset($_POST['login-submit'])) 
{
	require 'dbh.inc.php';

	$username = $_POST['login-username'];
	$password = $_POST['login-password'];
	

	if (empty($username) || empty($password))
	{
		header("Location: ../login.php?error=emptyfields");
		exit();
	}

	else
	{
		$sql = "select * from admin where adminid='".$username."' limit 1";
		$stmt = mysqli_stmt_init($conn);
		if (!mysqli_stmt_prepare($stmt, $sql)) 
		{
			header("Location: ../login.php?error=sqlerror");
			exit();		
		}
		else
		{
			mysqli_stmt_bind_param($stmt, "ss", $username, $username);
			mysqli_stmt_execute($stmt);
			$result = mysqli_stmt_get_result($stmt);
			
			if ($row = mysqli_fetch_assoc($result)) 
			{
				$hdPassword = $row['password'];

				//$hashedPassword = password_hash($password, PASSWORD_DEFAULT);
				
				$verified = $password == $hdPassword;
				if ($verified != true) 
				{
					
				header("Location: ../login.php?error=wrongpassword");
				
				exit();		
				}
				elseif ($verified == true) 
				{
					session_start();
					$_SESSION['useruid']=$row['adminid'];
					header("Location: ../index.php");
					exit();	
				}
				else
				{
					header("Location: ../login.php?error=wrongpassword");
					exit();		
				}
			}
			else
			{
				//echo mysqli_fetch_assoc($result);
				header("Location: ../login.php?error=nouser");
			exit();		
			}	
		}
	}	

}

else
{
	header("Location: ../index.php");
	exit();
}