<?php
// إعدادات قاعدة البيانات
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tasbeeh_db";

// إنشاء اتصال
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("فشل الاتصال: " . $conn->connect_error);
}

// الحصول على عدد التسبيحات من الطلب
$count = isset($_POST['count']) ? intval($_POST['count']) : 0;

// إدخال البيانات في الجدول
$sql = "INSERT INTO tasbeeh_count (count) VALUES ($count)";
if ($conn->query($sql) === TRUE) {
    echo "تم حفظ عدد التسبيحات بنجاح.";
} else {
    echo "خطأ: " . $sql . "<br>" . $conn->error;
}

// إغلاق الاتصال
$conn->close();
?>