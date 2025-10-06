// 品牌 01: 品牌登入
document.getElementById("brand-01").innerHTML = `
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
    <div style="padding: 50px 20px; text-align: center">
      <div style="width: 100px; height: 100px; margin: 0 auto 24px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 30px; display: flex; align-items: center; justify-content: center">
        <i class="fas fa-store" style="font-size: 48px; color: white"></i>
      </div>
      <h1 style="font-size: 40px; font-weight: 800; color: #1e293b; margin-bottom: 12px">品牌後台</h1>
      <p style="font-size: 16px; color: #64748b; margin-bottom: 48px">FlipTok Brand Dashboard</p>

      <input type="email" class="form-input" placeholder="品牌帳號 Email" style="margin-bottom: 12px">
      <input type="password" class="form-input" placeholder="密碼" style="margin-bottom: 24px">

      <button class="btn btn-primary" style="margin-bottom: 16px" onclick="goToPage(2)">
        登入品牌後台 <i class="fas fa-arrow-right" style="margin-left: 8px"></i>
      </button>

      <p style="font-size: 12px; color: #94a3b8">
        由平台管理員創建品牌帳號
      </p>
    </div>
  </div>
</div>
`;
