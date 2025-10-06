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
    <div class="header-bar">
      <div class="header-title">品牌後台</div>
      <div class="header-subtitle">管理你的品牌關係</div>
    </div>

    <div style="padding: 16px">
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
              <button class="btn" style="padding:6px 12px; font-size:12px" onclick="goToPage(15)">
                <i class="fas fa-trophy" style="margin-right:6px"></i>品牌排行
              </button>
              <button class="btn btn-primary" style="padding:6px 12px; font-size:12px" onclick="goToPage(17)">進入品牌</button>
            </div>
          </div>
        </div>
        <button class="btn btn-primary" onclick="goToPage(16)">
          <i class="fas fa-plus" style="margin-right:8px"></i>加入更多品牌
        </button>
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
      <span class="tab-label">探索</span>
    </div>
    <div class="tab-item">
      <i class="fas fa-plus-circle tab-icon"></i>
      <span class="tab-label">創作</span>
    </div>
    <div class="tab-item">
      <i class="fas fa-wallet tab-icon"></i>
      <span class="tab-label">錢包</span>
    </div>
    <div class="tab-item active">
      <i class="fas fa-user tab-icon"></i>
      <span class="tab-label">我的</span>
    </div>
  </div>
</div>
`;
