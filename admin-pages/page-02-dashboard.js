// Admin 02: 平台儀表板
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
    <div style="padding: 20px">
      <div style="position: relative; margin-bottom: 24px">
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 8px">
          <i class="fas fa-crown" style="color: #4facfe; margin-right: 8px"></i>
          平台管理
        </h2>
        <p style="font-size: 14px; color: #64748b">FlipTok Admin Dashboard</p>
      </div>

      <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 20px; padding: 24px; margin-bottom: 24px; color: white; box-shadow: 0 10px 30px rgba(79,172,254,0.3)">
        <div style="font-size: 14px; opacity: 0.9; margin-bottom: 8px">平台總收益</div>
        <div style="font-size: 40px; font-weight: 900; margin-bottom: 16px">NT$ 8.5M</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px">
          <div>
            <div style="font-size: 12px; opacity: 0.8; margin-bottom: 4px">品牌數量</div>
            <div style="font-size: 18px; font-weight: 700">28 個</div>
          </div>
          <div>
            <div style="font-size: 12px; opacity: 0.8; margin-bottom: 4px">用戶總數</div>
            <div style="font-size: 18px; font-weight: 700">15.2k</div>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px">
        <button class="btn" style="background: white; border: 1.5px solid #4facfe; color: #4facfe; padding: 16px; display: flex; flex-direction: column; align-items: center; gap: 8px" onclick="goToPage(2)">
          <i class="fas fa-plus-circle" style="font-size: 24px"></i>
          <span style="font-size: 13px">創建品牌</span>
        </button>
        <button class="btn" style="background: white; border: 1.5px solid #4facfe; color: #4facfe; padding: 16px; display: flex; flex-direction: column; align-items: center; gap: 8px" onclick="goToPage(3)">
          <i class="fas fa-store" style="font-size: 24px"></i>
          <span style="font-size: 13px">品牌列表</span>
        </button>
        <button class="btn" style="background: white; border: 1.5px solid #4facfe; color: #4facfe; padding: 16px; display: flex; flex-direction: column; align-items: center; gap: 8px" onclick="goToPage(4)">
          <i class="fas fa-chart-line" style="font-size: 24px"></i>
          <span style="font-size: 13px">收益報表</span>
        </button>
        <button class="btn" style="background: white; border: 1.5px solid #4facfe; color: #4facfe; padding: 16px; display: flex; flex-direction: column; align-items: center; gap: 8px" onclick="goToPage(5)">
          <i class="fas fa-shield-alt" style="font-size: 24px"></i>
          <span style="font-size: 13px">內容審核</span>
        </button>
        <button class="btn" style="background: white; border: 1.5px solid #4facfe; color: #4facfe; padding: 16px; display: flex; flex-direction: column; align-items: center; gap: 8px" onclick="goToPage(6)">
          <i class="fas fa-cog" style="font-size: 24px"></i>
          <span style="font-size: 13px">系統設定</span>
        </button>
      </div>
    </div>
  </div>
</div>
`;
