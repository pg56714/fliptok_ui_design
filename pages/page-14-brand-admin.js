// 頁面 14: 品牌後台（進入/排行）
document.getElementById("page-14").innerHTML = `
<div class="phone-container">
  <div class="status-bar">
    <div class="status-time">9:41</div>
    <div class="status-icons">
      <i class="fas fa-signal"></i>
      <i class="fas fa-wifi"></i>
      <i class="fas fa-battery-full"></i>
    </div>
  </div>

  <div class="page-content">
    <div style="padding: 20px">
      <!-- 標題區域 -->
      <div style="position: relative; margin-bottom: 24px">
        <button 
          onclick="goToPage(9)" 
          style="position: absolute; left: 0; top: 4px; background: white; border: 1.5px solid #e2e8f0; width: 36px; height: 36px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #64748b; cursor: pointer; transition: all 0.3s"
          onmouseover="this.style.background='#f8fafc'; this.style.borderColor='#cbd5e1'"
          onmouseout="this.style.background='white'; this.style.borderColor='#e2e8f0'"
        >
          <i class="fas fa-arrow-left"></i>
        </button>
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">品牌後台</h2>
      </div>
      <div class="card" style="margin-bottom: 16px">
        <div style="display:flex; align-items:center; justify-content:flex-start; gap:8px; margin-bottom: 8px">
          <h3 style="font-size: 16px; font-weight: 800; color:#1e293b">已加入的品牌</h3>
        </div>

        <div class="list-item" style="background:#f8fafc; border-radius:12px; padding:16px; margin:0; display:flex; gap:12px; align-items:center">
          <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=64&h=64&fit=crop" alt="Brand" style="width: 64px; height: 64px; border-radius: 12px; object-fit: cover; flex-shrink:0">
          <div style="flex:1; display:flex; flex-direction:column; gap:8px; min-width: 160px">
            <div>
              <div style="font-size: 15px; font-weight: 700; color:#1e293b; margin-bottom: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">時尚潮牌 A</div>
              <div style="font-size: 12px; color:#64748b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis">856 位大使 • 已加入</div>
            </div>
            <div style="display:flex; gap:8px; justify-content:flex-end; flex-wrap:wrap">
              <button class="btn" style="padding:6px 12px; font-size:12px; background:#8b5cf6; color:white; border:none" onclick="goToPage(15)">
                <i class="fas fa-trophy" style="margin-right:6px"></i>品牌排行
              </button>
              <button class="btn" style="padding:6px 12px; font-size:12px; background:#f59e0b; color:white; border:none" onclick="goToPage(10)">
                <i class="fas fa-crown" style="margin-right:6px"></i>大使認證
              </button>
              <button class="btn btn-primary" style="padding:6px 12px; font-size:12px" onclick="goToPage(17)">進入品牌</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="tab-bar">
    <div class="tab-item">
      <i class="fas fa-home tab-icon"></i>
      <span class="tab-label">首頁</span>
    </div>
    <div class="tab-item">
      <i class="fas fa-compass tab-icon"></i>
      <span class="tab-label">搜尋</span>
    </div>
    <div class="tab-item">
      <i class="fas fa-plus-circle tab-icon"></i>
      <span class="tab-label">創作</span>
    </div>
    <div class="tab-item active">
      <i class="fas fa-user tab-icon"></i>
      <span class="tab-label">我的</span>
    </div>
  </div>
</div>
`;
