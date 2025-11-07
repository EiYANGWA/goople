export function createApp(root) {
  // สร้าง container หลัก
  const container = document.createElement('div');
  container.className = 'app-container';

  // สร้างหัวข้อ
  const title = document.createElement('h1');
  title.textContent = 'Welcome To Git Neemon 🚀';

  // สร้างปุ่ม
  const button = document.createElement('button');
  button.id = 'btnCounter';
  button.name = 'counterBtn';
  button.textContent = 'Click Counter: 0';

  let count = 0;
  button.addEventListener('click', () => {
    count++;
    button.textContent = `Click Counter: ${count}`;
  });

  // ใส่ทุกอย่างใน container
  container.appendChild(title);
  container.appendChild(button);

  // แสดงผลบน root
  root.appendChild(container);
}
