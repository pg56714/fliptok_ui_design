// 頁面 05: 個人資料與歷史影片
document.getElementById("page-05").innerHTML = `
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
      <div class="header-title">@emily_fashion</div>
      <div class="header-subtitle">個人資料與歷史影片</div>
    </div>

    <div style="padding:16px">
      <!-- 個人區塊 -->
      <div class="card" style="margin-bottom:16px">
        <div style="display:flex; align-items:center; gap:12px">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 60 60'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='%236366f1'/><stop offset='1' stop-color='%238b5cf6'/></linearGradient></defs><circle cx='30' cy='30' r='30' fill='url(%23g)'/><circle cx='30' cy='24' r='10' fill='%23ffffff' fill-opacity='0.95'/><path d='M10 52a20 20 0 0140 0v2H10z' fill='%23ffffff' fill-opacity='0.95'/><circle cx='30' cy='24' r='8' fill='%23e0e7ff'/></svg>" alt="avatar" style="width:64px; height:64px; border-radius:32px; object-fit:cover; background:#e2e8f0">
          <div style="flex:1">
            <div style="font-size:18px; font-weight:800; color:#1e293b; margin-bottom:2px">Emily Chen</div>
            <div style="font-size:13px; color:#64748b; margin-bottom:4px">時尚穿搭達人 • 12.5k 粉絲</div>
            <span class="badge badge-primary"><i class="fas fa-crown" style="font-size:10px"></i> 大使 · 時尚潮牌 A</span>
          </div>
          <button class="btn btn-primary" style="width:auto">關注</button>
        </div>
      </div>

      <!-- 歷史影片網格 -->
      <h3 style="font-size:16px; font-weight:700; color:#1e293b; margin:8px 0 12px">歷史影片</h3>
      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:8px">
        <div class="video-item" style="height:160px"><img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&h=160&fit=crop" alt="v1" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='"><div class="video-overlay"><div style="font-size:12px">2.3k</div></div></div>
        <div class="video-item" style="height:160px"><img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=160&fit=crop" alt="v2" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='"><div class="video-overlay"><div style="font-size:12px">1.8k</div></div></div>
        <div class="video-item" style="height:160px"><img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=300&h=160&fit=crop" alt="v3" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='"><div class="video-overlay"><div style="font-size:12px">3.1k</div></div></div>
        <div class="video-item" style="height:160px"><img src="https://images.unsplash.com/photo-1549388604-817d15aa0110?w=300&h=160&fit=crop" alt="v4" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='"><div class="video-overlay"><div style="font-size:12px">980</div></div></div>
        <div class="video-item" style="height:160px"><img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=300&h=160&fit=crop" alt="v5" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='"><div class="video-overlay"><div style="font-size:12px">2.1k</div></div></div>
        <div class="video-item" style="height:160px"><img src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=300&h=160&fit=crop" alt="v6" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='"><div class="video-overlay"><div style="font-size:12px">765</div></div></div>
      </div>
    </div>
  </div>
</div>
`;
