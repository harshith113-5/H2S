<?php 

if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['submit']))
{
    $conn = mysqli_connect('localhost','root','','h2s') or die("Connection Failed");

    if(isset($_POST['name']) && isset($_POST['rating']) && isset($_POST['comments']))
    {
        $email = $_POST['email'];
        $password = $_POST['password'];
        // $comments = $_POST['comments'];

        $sql = "INSERT INTO details (email, password)  VALUES ('$email','$password')";

        if(mysqli_query($conn,$sql))
        {
            echo "Entry Successfull";
        }
        else
        {
            echo "Error Occured";
        }
    }
}
?>