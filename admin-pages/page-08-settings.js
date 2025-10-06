// Admin 08: 系統設定
document.getElementById("admin-08").innerHTML = `
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
      <button class="btn btn-text" style="padding: 8px; margin-bottom: 20px" onclick="goToPage(2)">
        <i class="fas fa-arrow-left" style="margin-right: 8px"></i> 返回
      </button>

      <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 24px">系統設定</h2>

      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">平台設定</h3>
        <div style="display: grid; gap: 12px">
          <label style="display: flex; align-items: center; justify-content: space-between; padding: 16px; background: #f8fafc; border-radius: 12px; cursor: pointer">
            <div>
              <div style="font-size: 14px; font-weight: 600; color: #1e293b; margin-bottom: 4px">自動審核</div>
              <div style="font-size: 12px; color: #64748b">自動通過大使內容</div>
            </div>
            <input type="checkbox" style="width: 18px; height: 18px; accent-color: #4facfe; cursor: pointer">
          </label>

          <label style="display: flex; align-items: center; justify-content: space-between; padding: 16px; background: #f8fafc; border-radius: 12px; cursor: pointer">
            <div>
              <div style="font-size: 14px; font-weight: 600; color: #1e293b; margin-bottom: 4px">維護模式</div>
              <div style="font-size: 12px; color: #64748b">啟用平台維護模式</div>
            </div>
            <input type="checkbox" style="width: 18px; height: 18px; accent-color: #4facfe; cursor: pointer">
          </label>
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
