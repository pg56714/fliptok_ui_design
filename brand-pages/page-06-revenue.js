// 品牌 06: 品牌收益報表
document.getElementById("brand-05").innerHTML = `
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
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">收益報表</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px">
        ${[
          ["總銷售額", "NT$ 1.2M", "#f5576c", "fas fa-dollar-sign"],
          ["訂單數", "3,248", "#10b981", "fas fa-shopping-cart"],
          ["大使收益", "NT$ 156k", "#f59e0b", "fas fa-users"],
          ["淨收益", "NT$ 1.04M", "#6366f1", "fas fa-chart-line"],
        ]
          .map(
            ([label, value, color, icon]) => `
          <div class="card" style="text-align: center; padding: 20px">
            <i class="${icon}" style="font-size: 24px; color: ${color}; margin-bottom: 12px"></i>
            <div style="font-size: 20px; font-weight: 900; color: #1e293b; margin-bottom: 4px">${value}</div>
            <div style="font-size: 12px; color: #64748b">${label}</div>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="card">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">收益趨勢</h3>
        <div style="height: 200px; background: #f8fafc; border-radius: 12px; display: flex; align-items: center; justify-content: center">
          <div style="text-align: center; color: #64748b">
            <i class="fas fa-chart-area" style="font-size: 48px; opacity: 0.3; margin-bottom: 12px"></i>
            <div style="font-size: 14px">圖表數據載入中...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
