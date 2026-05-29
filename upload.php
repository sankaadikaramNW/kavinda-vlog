<?php
/**
 * upload.php - Secure Server-Side File Uploader for Hasitha Portfolio
 * Saves incoming multipart images directly into the local /assets folder.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'status' => 'error',
        'message' => 'Only POST requests are permitted'
    ]);
    exit;
}

// 1. Create assets directory and gallery-specific subfolder if provided
$galleryId = isset($_POST['gallery_id']) ? preg_replace('/[^a-zA-Z0-9_-]/', '', $_POST['gallery_id']) : '';
$targetDir = __DIR__ . '/assets';

if (!file_exists($targetDir)) {
    mkdir($targetDir, 0777, true);
}

if (!empty($galleryId)) {
    $targetDir .= '/' . $galleryId;
}

if (!file_exists($targetDir)) {
    if (!mkdir($targetDir, 0777, true)) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Failed to instantiate storage directory: ' . $targetDir
        ]);
        exit;
    }
}

// 2. Validate and process file
if (!isset($_FILES['file'])) {
    echo json_encode([
        'status' => 'error',
        'message' => 'No file payload detected'
    ]);
    exit;
}

$file = $_FILES['file'];

if ($file['error'] !== UPLOAD_ERR_OK) {
    echo json_encode([
        'status' => 'error',
        'message' => 'File transfer error code: ' . $file['error']
    ]);
    exit;
}

// 3. Confirm image dimensions and mime types
$info = getimagesize($file['tmp_name']);
if ($info === false) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Uploaded file is not a valid image'
    ]);
    exit;
}

$allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
if (!in_array($info['mime'], $allowedTypes)) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid file format. Allowed formats: JPEG, PNG, WEBP, GIF'
    ]);
    exit;
}

// 4. Sanitize and generate unique filename
$ext = pathinfo($file['name'], PATHINFO_EXTENSION);
if (empty($ext)) {
    $ext = ($info['mime'] === 'image/png') ? 'png' : (($info['mime'] === 'image/webp') ? 'webp' : 'jpg');
}

$sanitizedName = preg_replace('/[^a-zA-Z0-9_-]/', '', pathinfo($file['name'], PATHINFO_FILENAME));
$uniqueName = 'img_' . time() . '_' . rand(1000, 9999) . '_' . $sanitizedName . '.' . $ext;
$targetPath = $targetDir . '/' . $uniqueName;

// 5. Transfer file from temporary container
if (move_uploaded_file($file['tmp_name'], $targetPath)) {
    $relativePath = 'assets/' . (!empty($galleryId) ? $galleryId . '/' : '') . $uniqueName;
    echo json_encode([
        'status' => 'success',
        'message' => 'Image successfully archived',
        'url' => $relativePath
    ]);
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Failed to write file to local disk'
    ]);
}
