// Admin 01: 平台管理員登入
document.getElementById("admin-01").innerHTML = `
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
      <div style="width: 100px; height: 100px; margin: 0 auto 24px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 30px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(79,172,254,0.3)">
        <i class="fas fa-crown" style="font-size: 48px; color: white"></i>
      </div>
      <h1 style="font-size: 40px; font-weight: 800; color: #1e293b; margin-bottom: 12px">FlipTok Admin</h1>
      <p style="font-size: 16px; color: #64748b; margin-bottom: 48px">平台管理員後台</p>

      <input type="email" class="form-input" placeholder="管理員 Email" style="margin-bottom: 12px">
      <input type="password" class="form-input" placeholder="密碼" style="margin-bottom: 24px">

      <button class="btn btn-primary" style="margin-bottom: 16px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" onclick="goToPage(2)">
        登入管理後台 <i class="fas fa-arrow-right" style="margin-left: 8px"></i>
      </button>

      <div style="background: #eff6ff; border: 1.5px solid #3b82f6; border-radius: 12px; padding: 16px; text-align: left">
        <div style="display: flex; gap: 12px">
          <i class="fas fa-shield-alt" style="color: #3b82f6; font-size: 18px; flex-shrink: 0"></i>
          <div style="font-size: 12px; color: #1e40af; line-height: 1.5">
            僅限平台管理員登入，具有最高權限
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
