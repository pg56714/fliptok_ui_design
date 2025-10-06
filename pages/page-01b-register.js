// 頁面 01b: 註冊頁面
document.getElementById("page-01b").innerHTML = `
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

      <!-- Logo 與標題 -->
      <div style="text-align: center; margin-bottom: 40px">
        <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 24px; display: flex; align-items: center; justify-content: center; font-size: 40px; color: white; box-shadow: 0 8px 24px rgba(99,102,241,0.3)">
          <i class="fas fa-user-plus"></i>
        </div>
        <p style="font-size: 14px; color: #94a3b8; margin-bottom: 8px">開始你的旅程</p>
        <h1 style="font-size: 32px; font-weight: 800; color: #1e293b; margin-bottom: 0">建立帳號</h1>
      </div>

      <!-- 表單 -->
      <div style="margin-bottom: 24px">
        <!-- Full Name -->
        <div style="margin-bottom: 16px">
          <input 
            type="text" 
            placeholder="姓名" 
            class="form-input"
            style="width: 100%; padding: 14px 16px; background: white; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s"
            onfocus="this.style.borderColor='#6366f1'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
            onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'"
          >
        </div>

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

        <!-- Phone -->
        <div style="margin-bottom: 16px">
          <input 
            type="tel" 
            placeholder="手機號碼" 
            class="form-input"
            style="width: 100%; padding: 14px 16px; background: white; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s"
            onfocus="this.style.borderColor='#6366f1'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
            onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'"
          >
        </div>

        <!-- Password -->
        <div style="margin-bottom: 16px; position: relative">
          <input 
            id="register-password"
            type="password" 
            placeholder="密碼（至少 8 個字元）" 
            class="form-input"
            style="width: 100%; padding: 14px 16px; background: white; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s"
            onfocus="this.style.borderColor='#6366f1'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
            onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'"
          >
          <button
            type="button"
            onclick="
              const input = document.getElementById('register-password');
              const icon = this.querySelector('i');
              if (input.type === 'password') {
                input.type = 'text';
                icon.className = 'fas fa-eye-slash';
              } else {
                input.type = 'password';
                icon.className = 'fas fa-eye';
              }
            "
            style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #94a3b8; cursor: pointer; padding: 8px"
          >
            <i class="fas fa-eye"></i>
          </button>
        </div>

        <!-- Confirm Password -->
        <div style="margin-bottom: 16px; position: relative">
          <input 
            id="register-confirm-password"
            type="password" 
            placeholder="確認密碼" 
            class="form-input"
            style="width: 100%; padding: 14px 16px; background: white; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s"
            onfocus="this.style.borderColor='#6366f1'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
            onblur="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'"
          >
          <button
            type="button"
            onclick="
              const input = document.getElementById('register-confirm-password');
              const icon = this.querySelector('i');
              if (input.type === 'password') {
                input.type = 'text';
                icon.className = 'fas fa-eye-slash';
              } else {
                input.type = 'password';
                icon.className = 'fas fa-eye';
              }
            "
            style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #94a3b8; cursor: pointer; padding: 8px"
          >
            <i class="fas fa-eye"></i>
          </button>
        </div>

        <!-- Password strength indicator -->
        <div style="margin-bottom: 20px">
          <div style="display: flex; gap: 4px; margin-bottom: 8px">
            <div style="flex: 1; height: 4px; background: #e2e8f0; border-radius: 2px"></div>
            <div style="flex: 1; height: 4px; background: #e2e8f0; border-radius: 2px"></div>
            <div style="flex: 1; height: 4px; background: #e2e8f0; border-radius: 2px"></div>
            <div style="flex: 1; height: 4px; background: #e2e8f0; border-radius: 2px"></div>
          </div>
          <p style="font-size: 12px; color: #94a3b8; margin: 0">密碼強度：<span style="color: #64748b">尚未輸入</span></p>
        </div>

        <!-- Terms and conditions -->
        <div style="margin-bottom: 24px">
          <label style="display: flex; align-items: start; gap: 10px; cursor: pointer">
            <input type="checkbox" style="width: 18px; height: 18px; accent-color: #6366f1; cursor: pointer; margin-top: 2px; flex-shrink: 0">
            <span style="font-size: 13px; color: #64748b; line-height: 1.5">
              我已閱讀並同意
              <a href="#" style="color: #6366f1; text-decoration: none; font-weight: 600">服務條款</a>、
              <a href="#" style="color: #6366f1; text-decoration: none; font-weight: 600">隱私政策</a>
              以及
              <a href="#" style="color: #6366f1; text-decoration: none; font-weight: 600">社群規範</a>
            </span>
          </label>
        </div>

        <!-- Sign up button -->
        <button 
          class="btn btn-primary" 
          style="width: 100%; margin-bottom: 16px; padding: 14px; font-size: 16px; font-weight: 600"
          onclick="alert('註冊成功！'); goToPage('01a')"
        >
          建立帳號
        </button>

        <!-- Divider -->
        <div style="display: flex; align-items: center; gap: 16px; margin: 24px 0">
          <div style="flex: 1; height: 1px; background: #e2e8f0"></div>
          <span style="font-size: 13px; color: #94a3b8">或使用</span>
          <div style="flex: 1; height: 1px; background: #e2e8f0"></div>
        </div>

        <!-- Social sign up buttons -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px">
          <!-- Google -->
          <button 
            class="btn" 
            style="background: white; color: #1e293b; border: 1.5px solid #e2e8f0; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px; font-weight: 600; font-size: 14px"
            onclick="alert('使用 Google 註冊'); goToPage('01a')"
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
            onclick="alert('使用 Apple 註冊'); goToPage('01a')"
          >
            <i class="fab fa-apple" style="font-size: 18px"></i>
            Apple
          </button>
        </div>

        <!-- Sign in link -->
        <div style="text-align: center; margin-top: 24px">
          <span style="font-size: 14px; color: #94a3b8">已經有帳號了？</span>
          <a href="#" style="font-size: 14px; color: #6366f1; text-decoration: none; font-weight: 600" onclick="goToPage('01')">立即登入</a>
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
    </div>
  </div>
</div>
`;
