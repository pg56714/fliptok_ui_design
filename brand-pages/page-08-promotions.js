// 品牌 08: 促銷活動管理
document.getElementById("brand-07").innerHTML = `
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
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">促銷活動</h2>
      </div>

      <button class="btn btn-primary" style="margin-bottom: 20px" onclick="alert('新增活動')">
        <i class="fas fa-plus" style="margin-right: 8px"></i>新增活動
      </button>

      <div class="card">
        <div style="text-align: center; padding: 40px 20px; color: #94a3b8">
          <i class="fas fa-megaphone" style="font-size: 48px; opacity: 0.3; margin-bottom: 12px"></i>
          <div style="font-size: 14px">尚無進行中的活動</div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
