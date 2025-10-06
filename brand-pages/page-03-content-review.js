// 品牌 03: 審核大使創作
document.getElementById("brand-03").innerHTML = `
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

      <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 8px">內容審核</h2>
      <p style="font-size: 14px; color: #64748b; margin-bottom: 24px">待審核: 12 則</p>

      <div style="display: grid; gap: 12px">
        ${[1, 2, 3]
          .map(
            (i) => `
          <div class="card" style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 16px">
              <img src="https://images.unsplash.com/photo-152338121${i}0434-271e8be1f52b?w=80&h=120&fit=crop" alt="Video" style="width: 60px; height: 90px; border-radius: 8px; object-fit: cover">
              <div style="flex: 1">
                <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 4px">@emily_fashion</div>
                <div style="font-size: 12px; color: #64748b; margin-bottom: 8px">
                  今天的新穿搭！這件外套真的太好看了...
                </div>
                <span class="badge" style="background: #fef3c7; color: #f59e0b; font-size: 11px">待審核</span>
              </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px">
              <button class="btn" style="background: #fee2e2; color: #dc2626; border: none; padding: 12px" onclick="
                if (confirm('確定拒絕此內容？')) {
                  this.closest('.card').style.opacity = '0.5';
                  this.disabled = true;
                  alert('已拒絕');
                }
              ">
                <i class="fas fa-times" style="margin-right: 6px"></i>拒絕
              </button>
              <button class="btn btn-primary" style="padding: 12px" onclick="
                if (confirm('確定通過此內容？')) {
                  this.closest('.card').style.opacity = '0.5';
                  this.disabled = true;
                  alert('✅ 已通過審核');
                }
              ">
                <i class="fas fa-check" style="margin-right: 6px"></i>通過
              </button>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  </div>
</div>
`;
