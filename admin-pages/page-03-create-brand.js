// Admin 03: 創建品牌帳號
document.getElementById("admin-02").innerHTML = `
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
    <div style="padding: 20px">
      <div style="position: relative; margin-bottom: 32px">
        <button 
          onclick="goToPage(1)" 
          style="position: absolute; left: 0; top: 4px; background: white; border: 1.5px solid #e2e8f0; width: 36px; height: 36px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #64748b; cursor: pointer; transition: all 0.3s"
          onmouseover="this.style.background='#f8fafc'; this.style.borderColor='#cbd5e1'"
          onmouseout="this.style.background='white'; this.style.borderColor='#e2e8f0'"
        >
          <i class="fas fa-arrow-left"></i>
        </button>
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 8px; padding-left: 48px">創建品牌帳號</h2>
        <p style="font-size: 14px; color: #64748b; padding-left: 48px">新增品牌到 FlipTok 平台</p>
      </div>

      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">品牌資訊</h3>
        <div style="display: grid; gap: 16px">
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 8px">品牌名稱 *</label>
            <input type="text" class="form-input" placeholder="例：時尚潮牌 A">
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 8px">品牌簡介</label>
            <textarea class="form-input" rows="3" placeholder="品牌描述..."></textarea>
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 8px">品牌 Logo URL</label>
            <input type="text" class="form-input" placeholder="https://...">
          </div>
        </div>
      </div>

      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">登入帳號</h3>
        <div style="display: grid; gap: 16px">
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 8px">Email *</label>
            <input type="email" class="form-input" placeholder="brand@example.com">
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 8px">初始密碼 *</label>
            <input type="password" class="form-input" placeholder="••••••••">
          </div>
        </div>
      </div>

      <div class="card" style="margin-bottom: 24px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">創建者資訊</h3>
        <div style="background: #f8fafc; border-radius: 12px; padding: 16px">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px">
            <span style="font-size: 13px; color: #64748b">創建者</span>
            <span style="font-size: 13px; font-weight: 600; color: #1e293b">Admin User</span>
          </div>
          <div style="display: flex; justify-content: space-between">
            <span style="font-size: 13px; color: #64748b">創建時間</span>
            <span style="font-size: 13px; font-weight: 600; color: #1e293b">${new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <button class="btn btn-primary" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" onclick="
        if (confirm('確定創建此品牌帳號？')) {
          alert('✅ 品牌帳號創建成功！');
          goToPage(4);
        }
      ">
        <i class="fas fa-check" style="margin-right: 8px"></i>
        創建品牌帳號
      </button>
    </div>
  </div>
</div>
`;
