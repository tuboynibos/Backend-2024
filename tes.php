<?php
// Koneksi ke database
$servername = "localhost";
$username_db = "root";
$password_db = "";
$dbname = "database_name";

// Membuat koneksi ke database
$conn = new mysqli($servername, $username_db, $password_db, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mendapatkan email dari form
    $email_input = $_POST['email'];
    
    // Query untuk memeriksa apakah email terdaftar di database menggunakan prepared statements
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email_input); // "s" artinya string
    
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Email ditemukan - mengirimkan link pemulihan password
        echo "Link pemulihan password telah dikirim ke email Anda.";
    } else {
        // Email tidak ditemukan
        echo "Email tidak ditemukan dalam sistem kami!";
    }

    $stmt->close();
}

$conn->close();
?>