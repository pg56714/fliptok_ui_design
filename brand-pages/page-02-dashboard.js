// 品牌 02: 品牌儀表板
document.getElementById("brand-02").innerHTML = `
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
      <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 8px">時尚潮牌 A</h2>
      <p style="font-size: 14px; color: #64748b; margin-bottom: 24px">品牌管理儀表板</p>

      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 20px; padding: 24px; margin-bottom: 24px; color: white">
        <div style="font-size: 14px; opacity: 0.9; margin-bottom: 8px">本月收益</div>
        <div style="font-size: 40px; font-weight: 900; margin-bottom: 16px">NT$ 458,230</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px">
          <div>
            <div style="font-size: 12px; opacity: 0.8; margin-bottom: 4px">大使數量</div>
            <div style="font-size: 18px; font-weight: 700">856 位</div>
          </div>
          <div>
            <div style="font-size: 12px; opacity: 0.8; margin-bottom: 4px">待審核</div>
            <div style="font-size: 18px; font-weight: 700">12 則</div>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px">
        <button class="btn" style="background: white; border: 1.5px solid #f5576c; color: #f5576c; padding: 16px; display: flex; flex-direction: column; align-items: center; gap: 8px" onclick="goToPage(3)">
          <i class="fas fa-video" style="font-size: 24px"></i>
          <span style="font-size: 13px">審核內容</span>
          <span class="badge" style="background: #fee2e2; color: #dc2626; font-size: 10px">12</span>
        </button>
        <button class="btn" style="background: white; border: 1.5px solid #f5576c; color: #f5576c; padding: 16px; display: flex; flex-direction: column; align-items: center; gap: 8px" onclick="goToPage(4)">
          <i class="fas fa-users" style="font-size: 24px"></i>
          <span style="font-size: 13px">大使列表</span>
        </button>
        <button class="btn" style="background: white; border: 1.5px solid #f5576c; color: #f5576c; padding: 16px; display: flex; flex-direction: column; align-items: center; gap: 8px" onclick="goToPage(5)">
          <i class="fas fa-comments" style="font-size: 24px"></i>
          <span style="font-size: 13px">聊天室</span>
        </button>
        <button class="btn" style="background: white; border: 1.5px solid #f5576c; color: #f5576c; padding: 16px; display: flex; flex-direction: column; align-items: center; gap: 8px" onclick="goToPage(6)">
          <i class="fas fa-chart-line" style="font-size: 24px"></i>
          <span style="font-size: 13px">收益報表</span>
        </button>
      </div>
    </div>
  </div>
</div>
`;
