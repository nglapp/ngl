<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assuming you want to save the entered username to a file
    $username = $_POST['username'];
    
    // Open the file for writing
    $file = fopen("usernames.txt", "a"); // 'a' means append to the file
    if ($file) {
        // Write the username to the file
        fwrite($file, $username . "\n");
        fclose($file);
        
        // Respond to the client (optional)
        echo "Username '$username' submitted successfully.";
    } else {
        // Handle file opening error (optional)
        echo "Error opening file.";
    }
}
?>
