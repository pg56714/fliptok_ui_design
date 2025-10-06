// 頁面 01: 歡迎頁 (登入 / 註冊)
document.getElementById("page-01").innerHTML = `
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
      <!-- Logo 與標題 -->
      <div style="text-align: center; margin-bottom: 40px">
        <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 24px; display: flex; align-items: center; justify-content: center; font-size: 40px; color: white; box-shadow: 0 8px 24px rgba(99,102,241,0.3)">
          <i class="fas fa-crown"></i>
        </div>
        <p style="font-size: 14px; color: #94a3b8; margin-bottom: 8px">請輸入你的資料</p>
        <h1 style="font-size: 32px; font-weight: 800; color: #1e293b; margin-bottom: 0">歡迎回來</h1>
      </div>

      <!-- 表單 -->
      <div style="margin-bottom: 24px">
        <!-- Email -->
        <div style="margin-bottom: 16px">
          <input 
            type="email" 
            placeholder="電子郵件地址" 
            class="form-input"
            style="width: 100%; padding: 14px 16px; background: white; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s"
            onfocus="this.style.borderColor='#6366f1'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
            onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'"
          >
        </div>

        <!-- Password -->
        <div style="margin-bottom: 16px">
          <input 
            type="password" 
            placeholder="密碼" 
            class="form-input"
            style="width: 100%; padding: 14px 16px; background: white; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s"
            onfocus="this.style.borderColor='#6366f1'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
            onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'"
          >
        </div>

        <!-- Remember me & Forgot password -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer">
            <input type="checkbox" style="width: 18px; height: 18px; accent-color: #6366f1; cursor: pointer">
            <span style="font-size: 14px; color: #64748b">記住 30 天</span>
          </label>
          <a href="#" style="font-size: 14px; color: #6366f1; text-decoration: none; font-weight: 600" onclick="goToPage('01c'); return false;">忘記密碼</a>
        </div>

        <!-- Sign up button -->
        <button 
          class="btn btn-primary" 
          style="width: 100%; margin-bottom: 16px; padding: 14px; font-size: 16px; font-weight: 600"
          onclick="alert('登入成功！'); goToPage('01a')"
        >
          登入
        </button>

        <!-- Divider -->
        <div style="display: flex; align-items: center; gap: 16px; margin: 24px 0">
          <div style="flex: 1; height: 1px; background: #e2e8f0"></div>
          <span style="font-size: 13px; color: #94a3b8">或使用</span>
          <div style="flex: 1; height: 1px; background: #e2e8f0"></div>
        </div>

        <!-- Social login buttons -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px">
          <!-- Google -->
          <button 
            class="btn" 
            style="background: white; color: #1e293b; border: 1.5px solid #e2e8f0; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px; font-weight: 600; font-size: 14px"
            onclick="alert('使用 Google 登入'); goToPage('01a')"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
              <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
              <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
              <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335"/>
            </svg>
            Google
          </button>

          <!-- Apple -->
          <button 
            class="btn" 
            style="background: #000; color: white; border: 1.5px solid #000; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px; font-weight: 600; font-size: 14px"
            onclick="alert('使用 Apple 登入'); goToPage('01a')"
          >
            <i class="fab fa-apple" style="font-size: 18px"></i>
            Apple
          </button>
        </div>

        <!-- Sign up link -->
        <div style="text-align: center; margin-top: 24px">
          <span style="font-size: 14px; color: #94a3b8">還沒有帳號？</span>
          <a href="#" style="font-size: 14px; color: #6366f1; text-decoration: none; font-weight: 600" onclick="goToPage('01b'); return false;">立即註冊</a>
        </div>
      </div>

      <!-- 免責聲明 -->
      <div style="background: #fef3c7; border: 1.5px solid #fbbf24; border-radius: 12px; padding: 14px; margin-top: 20px">
        <div style="display: flex; gap: 10px">
          <i class="fas fa-info-circle" style="color: #f59e0b; font-size: 16px; flex-shrink: 0; margin-top: 2px"></i>
          <div>
            <div style="font-size: 12px; font-weight: 700; color: #78350f; margin-bottom: 3px">社群免責聲明</div>
            <div style="font-size: 11px; color: #92400e; line-height: 1.5">
              FlipTok 是粉絲社群平台，內容由用戶創作。我們與品牌官方無直接關係，請理性消費。
            </div>
          </div>
        </div>
      </div>

      <!-- 服務條款 -->
      <p style="font-size: 11px; color: #94a3b8; line-height: 1.6; text-align: center; margin-top: 16px">
        繼續即表示你同意我們的
        <a href="#" style="color: #6366f1; text-decoration: none; font-weight: 600">服務條款</a> 和 
        <a href="#" style="color: #6366f1; text-decoration: none; font-weight: 600">隱私政策</a>
      </p>
    </div>
  </div>
</div>
`;
