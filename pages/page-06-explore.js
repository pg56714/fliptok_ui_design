// 頁面 06: 探索頁面
document.getElementById("page-06").innerHTML = `
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
      <div class="header-title">探索</div>
      <div class="header-subtitle">發現更多精彩內容</div>
    </div>

    <div style="padding: 16px">
      <!-- 搜尋欄 -->
      <div style="position: relative; margin-bottom: 20px">
        <input type="text" class="form-input" placeholder="搜尋用戶、品牌或內容..." style="padding-left: 44px; background: #f8fafc">
        <i class="fas fa-search" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #94a3b8"></i>
      </div>

      <!-- 熱門標籤 -->
      <div style="margin-bottom: 24px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 12px">熱門標籤</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 8px">
          <span style="padding: 8px 16px; background: #6366f1; color: white; border-radius: 20px; font-size: 13px; font-weight: 600">#時尚穿搭</span>
          <span style="padding: 8px 16px; background: #f1f5f9; color: #64748b; border-radius: 20px; font-size: 13px; font-weight: 600">#美妝保養</span>
          <span style="padding: 8px 16px; background: #f1f5f9; color: #64748b; border-radius: 20px; font-size: 13px; font-weight: 600">#咖啡文化</span>
          <span style="padding: 8px 16px; background: #f1f5f9; color: #64748b; border-radius: 20px; font-size: 13px; font-weight: 600">#居家設計</span>
          <span style="padding: 8px 16px; background: #f1f5f9; color: #64748b; border-radius: 20px; font-size: 13px; font-weight: 600">#旅遊探險</span>
        </div>
      </div>

      <!-- 推薦用戶 -->
      <div style="margin-bottom: 24px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 12px">推薦關注</h3>
        <div style="display: grid; gap: 12px">
          <div style="background: white; border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 12px">
            <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='%236366f1'/><stop offset='1' stop-color='%238b5cf6'/></linearGradient></defs><circle cx='30' cy='30' r='30' fill='url(%23g)'/><circle cx='30' cy='24' r='10' fill='%23ffffff' fill-opacity='0.95'/><path d='M10 52a20 20 0 0140 0v2H10z' fill='%23ffffff' fill-opacity='0.95'/><circle cx='30' cy='24' r='8' fill='%23e0e7ff'/></svg>" alt="User" style="width: 48px; height: 48px; border-radius: 24px; object-fit: cover; background:#e2e8f0">
            <div style="flex: 1">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 2px">@emily_fashion</div>
              <div style="font-size: 13px; color: #64748b; margin-bottom: 4px">時尚穿搭達人 • 12.5k 粉絲</div>
              <div style="font-size: 12px; color: #6366f1; font-weight: 600">大使 · 時尚潮牌 A</div>
            </div>
            <button style="background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; cursor: pointer; flex-shrink: 0">關注</button>
          </div>

          <div style="background: white; border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 12px">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop" alt="User" style="width: 48px; height: 48px; border-radius: 24px; object-fit: cover" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='">
            <div style="flex: 1">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 2px">@sarah_beauty</div>
              <div style="font-size: 13px; color: #64748b; margin-bottom: 4px">美妝達人 • 8.2k 粉絲</div>
              <div style="font-size: 12px; color: #6366f1; font-weight: 600">大使 · 精品美妝 B</div>
            </div>
            <button style="background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; cursor: pointer; flex-shrink: 0">關注</button>
          </div>

          <div style="background: white; border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 12px">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" alt="User" style="width: 48px; height: 48px; border-radius: 24px; object-fit: cover" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='">
            <div style="flex: 1">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 2px">@alex_lifestyle</div>
              <div style="font-size: 13px; color: #64748b; margin-bottom: 4px">生活達人 • 15.3k 粉絲</div>
              <div style="font-size: 12px; color: #6366f1; font-weight: 600">大使 · 生活居家 C</div>
            </div>
            <button style="background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; cursor: pointer; flex-shrink: 0">關注</button>
          </div>
        </div>
      </div>

      <!-- 熱門內容 -->
      <div>
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 12px">熱門內容</h3>
        <div style="display: grid; gap: 12px">
          <div class="video-item" style="height: 160px">
            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=160&fit=crop" alt="Video" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='">
            <div class="video-overlay">
              <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px">今日最佳穿搭</div>
              <div style="font-size: 12px; opacity: 0.8">@emily_fashion • 2.3k 讚</div>
            </div>
          </div>

          <div class="video-item" style="height: 160px">
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=160&fit=crop" alt="Video" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='">
            <div class="video-overlay">
              <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px">5分鐘美妝教學</div>
              <div style="font-size: 12px; opacity: 0.8">@sarah_beauty • 1.8k 讚</div>
            </div>
          </div>

          <div class="video-item" style="height: 160px">
            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=160&fit=crop" alt="Video" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='">
            <div class="video-overlay">
              <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px">居家佈置靈感</div>
              <div style="font-size: 12px; opacity: 0.8">@alex_lifestyle • 3.1k 讚</div>
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
    <div class="tab-item active">
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
    <div class="tab-item">
      <i class="fas fa-user tab-icon"></i>
      <span class="tab-label">我的</span>
    </div>
  </div>
</div>
`;
