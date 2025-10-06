// 品牌 08: 促銷活動管理
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
      <button class="btn btn-text" style="padding: 8px; margin-bottom: 20px" onclick="goToPage(2)">
        <i class="fas fa-arrow-left" style="margin-right: 8px"></i> 返回
      </button>

      <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 24px">促銷活動</h2>

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
