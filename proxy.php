<?php
// Get file name from query
$file = $_GET['file'] ?? '';

// Only allow safe file names (no folder paths)
$file = basename($file);

// Check if file exists in same folder as this proxy
if (!file_exists($file)) {
    http_response_code(404);
    echo "File not found";
    exit;
}

// Send HTML content
header("Content-Type: text/html; charset=UTF-8");
readfile($file);
?>