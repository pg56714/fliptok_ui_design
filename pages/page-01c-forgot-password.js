// 頁面 01c: 忘記密碼
document.getElementById("page-01c").innerHTML = `
<div class="phone-container">
  <div class="status-bar">
    <div class="status-time">9:41</div>
    <div class="status-icons">
      <i class="fas fa-signal"></i>
      <i class="fas fa-wifi"></i>
      <i class="fas fa-battery-full"></i>
    </div>
  </div>

  <div class="page-content" style="bottom: 0">
    <div style="padding: 40px 24px; min-height: 100%; display: flex; flex-direction: column; justify-content: center">
      <!-- 返回按鈕 -->
      <button 
        onclick="goToPage('01')" 
        style="position: absolute; top: 60px; left: 24px; background: white; border: 1.5px solid #e2e8f0; width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #64748b; cursor: pointer; transition: all 0.3s"
        onmouseover="this.style.background='#f8fafc'; this.style.borderColor='#cbd5e1'"
        onmouseout="this.style.background='white'; this.style.borderColor='#e2e8f0'"
      >
        <i class="fas fa-arrow-left"></i>
      </button>

      <!-- Icon 與標題 -->
      <div style="text-align: center; margin-bottom: 40px">
        <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 24px; display: flex; align-items: center; justify-content: center; font-size: 40px; color: white; box-shadow: 0 8px 24px rgba(99,102,241,0.3)">
          <i class="fas fa-lock"></i>
        </div>
        <p style="font-size: 14px; color: #94a3b8; margin-bottom: 8px">別擔心，這種事常發生</p>
        <h1 style="font-size: 32px; font-weight: 800; color: #1e293b; margin-bottom: 12px">忘記密碼</h1>
        <p style="font-size: 14px; color: #64748b; line-height: 1.6; max-width: 320px; margin: 0 auto">
          輸入你的電子郵件地址，我們會傳送重設密碼的連結給你
        </p>
      </div>

      <!-- 表單 -->
      <div id="forgot-password-form" style="margin-bottom: 24px">
        <!-- Email -->
        <div style="margin-bottom: 24px">
          <input 
            id="reset-email"
            type="email" 
            placeholder="電子郵件地址" 
            class="form-input"
            style="width: 100%; padding: 14px 16px; background: white; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s"
            onfocus="this.style.borderColor='#6366f1'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
            onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'"
          >
        </div>

        <!-- Submit button -->
        <button 
          class="btn btn-primary" 
          style="width: 100%; margin-bottom: 16px; padding: 14px; font-size: 16px; font-weight: 600"
          onclick="
            const email = document.getElementById('reset-email').value;
            if (email) {
              document.getElementById('forgot-password-form').style.display = 'none';
              document.getElementById('success-message').style.display = 'block';
            } else {
              alert('請輸入電子郵件地址');
            }
          "
        >
          傳送重設連結
        </button>

        <!-- Back to login -->
        <div style="text-align: center; margin-top: 24px">
          <a href="#" style="font-size: 14px; color: #6366f1; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px" onclick="goToPage('01')">
            <i class="fas fa-arrow-left"></i>
            返回登入
          </a>
        </div>
      </div>

      <!-- Success Message (hidden by default) -->
      <div id="success-message" style="display: none; text-align: center">
        <!-- Success Icon -->
        <div style="width: 80px; height: 80px; margin: 0 auto 24px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 40px; color: white; box-shadow: 0 8px 24px rgba(16,185,129,0.3)">
          <i class="fas fa-check"></i>
        </div>

        <!-- Success Message -->
        <h2 style="font-size: 24px; font-weight: 800; color: #1e293b; margin-bottom: 12px">郵件已傳送！</h2>
        <p style="font-size: 14px; color: #64748b; line-height: 1.6; margin-bottom: 32px; max-width: 320px; margin-left: auto; margin-right: auto">
          我們已經將重設密碼的連結傳送到你的電子郵件信箱。請檢查你的收件匣（包含垃圾郵件匣）。
        </p>

        <!-- Info box -->
        <div style="background: #eff6ff; border: 1.5px solid #bfdbfe; border-radius: 12px; padding: 16px; margin-bottom: 24px; text-align: left">
          <div style="display: flex; gap: 12px">
            <i class="fas fa-info-circle" style="color: #3b82f6; font-size: 18px; flex-shrink: 0; margin-top: 2px"></i>
            <div>
              <div style="font-size: 13px; font-weight: 700; color: #1e40af; margin-bottom: 6px">小提示</div>
              <div style="font-size: 12px; color: #1e3a8a; line-height: 1.5">
                • 連結有效期限為 24 小時<br>
                • 如果沒收到郵件，請檢查垃圾郵件匣<br>
                • 可以在 5 分鐘後重新傳送
              </div>
            </div>
          </div>
        </div>

        <!-- Resend button -->
        <button 
          class="btn" 
          style="width: 100%; background: white; color: #6366f1; border: 1.5px solid #6366f1; padding: 14px; font-size: 15px; font-weight: 600; margin-bottom: 16px"
          onclick="alert('重新傳送郵件')"
        >
          <i class="fas fa-redo" style="margin-right: 8px"></i>
          重新傳送郵件
        </button>

        <!-- Back to login -->
        <div style="text-align: center; margin-top: 24px">
          <a href="#" style="font-size: 14px; color: #6366f1; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px" onclick="goToPage('01')">
            <i class="fas fa-arrow-left"></i>
            返回登入
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
`;
