<?php
/**
 * sync.php - Server-Side Data Synchronizer
 * Saves administrative captures and gallery metadata into a local data.json file.
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

// 1. Read input payload
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data || (!isset($data['captures']) && !isset($data['galleries']))) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid data payload provided'
    ]);
    exit;
}

// 2. Load existing data or initialize
$dbPath = __DIR__ . '/data.json';
$existing = file_exists($dbPath) ? json_decode(file_get_contents($dbPath), true) : [];

if (!is_array($existing)) {
    $existing = [];
}

// 3. Update values
if (isset($data['captures'])) {
    $existing['captures'] = $data['captures'];
}
if (isset($data['galleries'])) {
    $existing['galleries'] = $data['galleries'];
}
if (isset($data['likes'])) {
    $existing['likes'] = $data['likes'];
}

// 4. Securely write back to data.json
if (file_put_contents($dbPath, json_encode($existing, JSON_PRETTY_PRINT))) {
    echo json_encode([
        'status' => 'success',
        'message' => 'Server database successfully synchronized'
    ]);
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Failed to write data to data.json'
    ]);
}
