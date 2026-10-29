// script.js - Bài tập cá nhân: CI/CD Pipeline với GitHub Actions
// Sinh viên: Vũ Hoàng Anh - MSSV: 1822040470

document.addEventListener('DOMContentLoaded', () => {
    // 1. Đồng hồ thời gian thực (Real-time Clock)
    const clockElement = document.getElementById('live-clock');
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        if (clockElement) {
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }
    updateClock();
    setInterval(updateClock, 1000);

    // 2. Bộ đếm lượt click tương tác (Interactive Click Counter)
    let clickCount = 0;
    const btnCount = document.getElementById('btn-count');
    const displayCount = document.getElementById('click-counter');

    if (btnCount && displayCount) {
        btnCount.addEventListener('click', () => {
            clickCount++;
            displayCount.textContent = clickCount;
            btnCount.textContent = `Đã bấm ${clickCount} lần!`;
            
            // Hiệu ứng scale nhẹ khi bấm
            btnCount.style.transform = 'scale(0.96)';
            setTimeout(() => {
                btnCount.style.transform = '';
            }, 100);
        });
    }

    // 3. Đổi giao diện Sáng / Tối (Theme Switcher)
    const btnTheme = document.getElementById('btn-theme');
    let isLight = false;

    if (btnTheme) {
        btnTheme.addEventListener('click', () => {
            isLight = !isLight;
            if (isLight) {
                document.body.classList.add('light-theme');
                btnTheme.textContent = '🌙 Chuyển sang giao diện Tối';
            } else {
                document.body.classList.remove('light-theme');
                btnTheme.textContent = '☀️ Chuyển sang giao diện Sáng';
            }
        });
    }

    // 4. Chạy kiểm tra tự động (Self-Diagnostic System)
    const btnVerify = document.getElementById('btn-verify');
    const resultBox = document.getElementById('verification-result');

    if (btnVerify && resultBox) {
        btnVerify.addEventListener('click', () => {
            const hasTitle = document.title && document.title.length > 0;
            const h1Element = document.getElementById('main-title');
            const hasMSSV = h1Element && h1Element.textContent.includes('1822040470');
            const hasName = h1Element && h1Element.textContent.includes('Vũ Hoàng Anh');

            if (hasTitle && hasMSSV && hasName) {
                resultBox.className = 'verify-box';
                resultBox.innerHTML = `
                    <strong>✅ TẤT CẢ KIỂM TRA ĐỀU VƯỢT QUA!</strong><br>
                    • Tiêu đề website: <em>"${document.title}"</em> (Hợp lệ)<br>
                    • Thẻ &lt;h1&gt;: <em>"${h1Element.textContent}"</em> (Chính xác)<br>
                    • Kịch bản script.js & style.css hoạt động hoàn hảo.<br>
                    • Trạng thái pipeline: Sẵn sàng cho GitHub Actions kiểm tra & deploy!
                `;
            } else {
                resultBox.className = 'verify-box';
                resultBox.style.borderColor = '#ef4444';
                resultBox.style.color = '#ef4444';
                resultBox.innerHTML = `
                    <strong>⚠️ CẢNH BÁO KIỂM TRA:</strong><br>
                    Thẻ &lt;title&gt; hoặc nội dung &lt;h1&gt; chưa đúng định dạng yêu cầu!
                `;
            }
            resultBox.classList.remove('hidden');
        });
    }

    console.log('[DevOps CI/CD] Website initialized successfully. Student: Vũ Hoàng Anh - 1822040470');
});
