// 頁面 04: 首頁（全螢幕直式滑動 Feed）
document.getElementById("page-04").innerHTML = `
<div class="phone-container">
  <div class="status-bar">
    <div class="status-time">9:41</div>
    <div class="status-icons">
      <i class="fas fa-signal"></i>
      <i class="fas fa-wifi"></i>
      <i class="fas fa-battery-full"></i>
    </div>
  </div>

  <div class="page-content" style="top:0; bottom:0; background:black; overflow-y:hidden">
    <div class="tiktok-feed" style="overflow-y:hidden">
      <!-- item 1 -->
      <div class="tiktok-item" style="background:url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=1600&fit=crop') center/cover">
      <!-- 右側互動按鈕 -->
      <div style="position: absolute; right: 16px; bottom: 120px; display: flex; flex-direction: column; gap: 20px; z-index: 10">
        <!-- 頭像 -->
        <div style="position: relative">
          <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='%236366f1'/><stop offset='1' stop-color='%238b5cf6'/></linearGradient></defs><circle cx='30' cy='30' r='30' fill='url(%23g)'/><circle cx='30' cy='24' r='10' fill='%23ffffff' fill-opacity='0.95'/><path d='M10 52a20 20 0 0140 0v2H10z' fill='%23ffffff' fill-opacity='0.95'/><circle cx='30' cy='24' r='8' fill='%23e0e7ff'/></svg>" alt="User" style="width: 48px; height: 48px; border-radius: 24px; border: 3px solid white; object-fit: cover; background:#e2e8f0; cursor: pointer" onclick="goToPage(5)">
        </div>

        <!-- 按讚 -->
        <button style="background: none; border: none; color: white; display: flex; flex-direction: column; align-items: center; gap: 4px" onclick="this.style.color='#ef4444'">
          <i class="fas fa-heart" style="font-size: 28px"></i>
          <span style="font-size: 12px; font-weight: 600">2.3k</span>
        </button>

        <!-- 評論 -->
        <button style="background: none; border: none; color: white; display: flex; flex-direction: column; align-items: center; gap: 4px">
          <i class="fas fa-comment" style="font-size: 28px"></i>
          <span style="font-size: 12px; font-weight: 600">89</span>
        </button>

        <!-- 分享 -->
        <button style="background: none; border: none; color: white; display: flex; flex-direction: column; align-items: center; gap: 4px">
          <i class="fas fa-share" style="font-size: 28px"></i>
          <span style="font-size: 12px; font-weight: 600">分享</span>
        </button>
      </div>

      <!-- 底部資訊 -->
      <div style="position: absolute; bottom: 120px; left: 20px; right: 80px; z-index: 10">
        <div style="margin-bottom: 12px">
          <span style="color: white; font-size: 16px; font-weight: 700; margin-right: 8px">@emily_fashion</span>
          <span class="badge badge-primary" style="font-size: 10px; padding: 2px 6px">大使</span>
        </div>
        <p style="color: white; font-size: 14px; line-height: 1.5; margin-bottom: 8px">今天的新穿搭！這件外套真的太好看了，質感超棒 ✨ #時尚 #穿搭 #外套</p>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px">
          <i class="fas fa-music" style="color: white; font-size: 12px"></i>
          <span style="color: white; font-size: 12px">原創音樂 - Emily's Style</span>
        </div>
        
        <!-- 商品膠囊 -->
        <div style="background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); border-radius: 12px; padding: 12px; margin-top: 12px; cursor: pointer" onclick="alert('商品詳情')">
          <div style="display: flex; align-items: center; gap: 12px">
            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=60&h=60&fit=crop" alt="Product" style="width: 48px; height: 48px; border-radius: 8px" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='">
            <div style="flex: 1">
              <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 2px">經典風衣外套</div>
              <div style="font-size: 12px; color: #64748b; margin-bottom: 4px">時尚潮牌 A</div>
              <div style="font-size: 16px; font-weight: 800; color: #6366f1">NT$ 3,280</div>
            </div>
            <i class="fas fa-chevron-right" style="color: #94a3b8; font-size: 14px"></i>
          </div>
        </div>
      </div>

      <!-- 底部導航提示 -->
      <div style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); z-index: 10">
        <div style="display: flex; flex-direction: column; gap: 4px; align-items:center">
          <div style="width: 6px; height: 6px; background: rgba(255,255,255,0.3); border-radius: 3px"></div>
          <div style="width: 6px; height: 6px; background: white; border-radius: 3px"></div>
          <div style="width: 6px; height: 6px; background: rgba(255,255,255,0.3); border-radius: 3px"></div>
        </div>
      </div>
      </div>

      <!-- item 2 -->
      <div class="tiktok-item" style="background:url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=1600&fit=crop') center/cover">
        <div style="position:absolute;right:16px;bottom:120px;display:flex;flex-direction:column;gap:20px;z-index:10">
          <button style="background:none;border:none;color:white;display:flex;flex-direction:column;align-items:center;gap:4px"><i class="fas fa-heart" style="font-size:28px"></i><span style="font-size:12px;font-weight:600">1.8k</span></button>
          <button style="background:none;border:none;color:white;display:flex;flex-direction:column;align-items:center;gap:4px"><i class="fas fa-comment" style="font-size:28px"></i><span style="font-size:12px;font-weight:600">156</span></button>
        </div>
        <div style="position:absolute;bottom:120px;left:20px;right:80px;z-index:10;color:white">
          <div style="margin-bottom:12px"><span style="font-size:16px;font-weight:700;margin-right:8px">@sarah_beauty</span><span class="badge badge-primary" style="font-size:10px;padding:2px 6px">大使</span></div>
          <p style="font-size:14px;line-height:1.5;margin-bottom:8px">5分鐘完成日常妝容 💄 #美妝</p>
        </div>
      </div>

      <!-- item 3 -->
      <div class="tiktok-item" style="background:url('https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=1600&fit=crop') center/cover">
        <div style="position:absolute;bottom:120px;left:20px;right:80px;z-index:10;color:white">
          <div style="margin-bottom:12px"><span style="font-size:16px;font-weight:700;margin-right:8px">@alex_lifestyle</span><span class="badge badge-primary" style="font-size:10px;padding:2px 6px">大使</span></div>
          <p style="font-size:14px;line-height:1.5;margin-bottom:8px">居家佈置靈感 ✨ #居家 #設計</p>
        </div>
      </div>
    </div>
  </div>

  <div class="tab-bar">
    <div class="tab-item active">
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
    <div class="tab-item">
      <i class="fas fa-user tab-icon"></i>
      <span class="tab-label">我的</span>
    </div>
  </div>
</div>
`;
