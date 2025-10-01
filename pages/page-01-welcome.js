// 頁面 01: 歡迎頁 (Google 登入)
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
    <div style="padding: 50px 20px; text-align: center; display: flex; flex-direction: column; justify-content: center; min-height: 100%">
      <div style="margin-bottom: 60px">
        <div style="width: 100px; height: 100px; margin: 0 auto 24px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 30px; display: flex; align-items: center; justify-content: center; font-size: 48px; color: white; box-shadow: 0 8px 24px rgba(99,102,241,0.3)">
          <i class="fas fa-crown"></i>
        </div>
        <h1 style="font-size: 40px; font-weight: 800; color: #1e293b; margin-bottom: 12px">FlipTok</h1>
        <p style="font-size: 16px; color: #64748b; line-height: 1.6">創作 · 表達 · 歸屬<br/>成為你熱愛品牌的大使</p>
      </div>

      <button class="btn" style="background: white; color: #1e293b; border: 1.5px solid #e2e8f0; margin-bottom: 12px; display: flex; align-items: center; justify-content: center; gap: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06)">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
          <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
          <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
          <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335"/>
        </svg>
        <span style="font-weight: 600">使用 Google 帳號繼續</span>
      </button>

      <button class="btn btn-outline" style="margin-bottom: 40px">
        <i class="fas fa-envelope" style="margin-right: 8px"></i>使用電子郵件註冊
      </button>

      <div style="background: #fef3c7; border: 1.5px solid #fbbf24; border-radius: 12px; padding: 16px; margin-bottom: 20px; text-align: left">
        <div style="display: flex; gap: 12px">
          <i class="fas fa-info-circle" style="color: #f59e0b; font-size: 20px; flex-shrink: 0"></i>
          <div>
            <div style="font-size: 13px; font-weight: 700; color: #78350f; margin-bottom: 4px">社群免責聲明</div>
            <div style="font-size: 12px; color: #92400e; line-height: 1.5">
              FlipTok 是粉絲社群平台，內容由用戶創作。我們與品牌官方無直接關係，請理性消費。
            </div>
          </div>
        </div>
      </div>

      <p style="font-size: 12px; color: #94a3b8; line-height: 1.6">
        繼續即表示你同意我們的<br>
        <a href="#" style="color: #6366f1; text-decoration: none; font-weight: 600">服務條款</a> 和 
        <a href="#" style="color: #6366f1; text-decoration: none; font-weight: 600">隱私政策</a>
      </p>
    </div>
  </div>
</div>
`;
