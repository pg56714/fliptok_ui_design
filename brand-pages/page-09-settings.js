// 品牌 09: 品牌設定
document.getElementById("brand-08").innerHTML = `
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
      <div style="position: relative; margin-bottom: 24px">
        <button 
          onclick="goToPage(1)" 
          style="position: absolute; left: 0; top: 4px; background: white; border: 1.5px solid #e2e8f0; width: 36px; height: 36px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #64748b; cursor: pointer; transition: all 0.3s"
          onmouseover="this.style.background='#f8fafc'; this.style.borderColor='#cbd5e1'"
          onmouseout="this.style.background='white'; this.style.borderColor='#e2e8f0'"
        >
          <i class="fas fa-arrow-left"></i>
        </button>
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">品牌設定</h2>
      </div>

      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">品牌資訊</h3>
        <div style="display: grid; gap: 16px">
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 8px">品牌名稱</label>
            <input type="text" class="form-input" value="時尚潮牌 A">
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 8px">品牌 Logo URL</label>
            <input type="url" class="form-input" placeholder="https://example.com/logo.png" value="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=200&h=200&fit=crop">
            <div style="font-size: 12px; color: #64748b; margin-top: 6px">建議尺寸：200x200px</div>
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 8px">品牌簡介</label>
            <textarea class="form-input" rows="3">專注於時尚潮流的品牌...</textarea>
          </div>
          <button class="btn btn-primary" onclick="alert('✅ 品牌資訊已儲存')">儲存變更</button>
        </div>
      </div>

      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">修改密碼</h3>
        <div style="display: grid; gap: 16px">
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 8px">目前密碼</label>
            <input type="password" class="form-input" placeholder="輸入目前密碼">
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 8px">新密碼</label>
            <input type="password" class="form-input" placeholder="輸入新密碼">
            <div style="font-size: 12px; color: #64748b; margin-top: 6px">密碼長度至少 8 個字元</div>
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 8px">確認新密碼</label>
            <input type="password" class="form-input" placeholder="再次輸入新密碼">
          </div>
          <button class="btn btn-primary" onclick="alert('✅ 密碼已更新')">更新密碼</button>
        </div>
      </div>

      <div class="card">
        <button style="background: none; border: none; color: #dc2626; font-size: 14px; font-weight: 600; cursor: pointer; width: 100%; text-align: left; padding: 16px" onclick="if (confirm('確定登出？')) { goToPage(1); }">
          <i class="fas fa-sign-out-alt" style="margin-right: 8px"></i>登出
        </button>
      </div>
    </div>
  </div>
</div>
`;
