document.addEventListener("DOMContentLoaded", function() {
    // สมมติว่าคุณมีอ็อบเจ็กต์ผู้ใช้ที่มีข้อมูลบางประการ
    const user = {
        username: "JohnDoe"
        // เพิ่มข้อมูลผู้ใช้อื่น ๆ ตามที่ต้องการ
    };

    // ดึงอิลิเมนต์ที่มี id เป็น "user-link"
    const userLinkElement = document.getElementById("user-link");

    // อัปเดตข้อความภายในลิงก์ด้วยชื่อผู้ใช้ถ้าผู้ใช้เข้าสู่ระบบ
    if (user.username) {
        userLinkElement.innerText = user.username;
    }
});
