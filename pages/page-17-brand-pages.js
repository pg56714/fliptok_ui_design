// 頁面 17: 品牌中心頁面
document.getElementById("page-17").innerHTML = `
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
      <div class="header-title">時尚潮牌 A</div>
      <div class="header-subtitle">品牌中心</div>
    </div>

    <div style="padding: 16px">
      <!-- 品牌橫幅 -->
      <div style="height: 200px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; margin-bottom: 20px; position: relative; overflow: hidden">
        <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=200&fit=crop" alt="Brand Banner" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent)">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px">
            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=60&h=60&fit=crop" alt="Brand Logo" style="width: 48px; height: 48px; border-radius: 12px; border: 2px solid rgba(255,255,255,0.3)">
            <div>
              <h2 style="font-size: 20px; font-weight: 800; color: white; margin-bottom: 2px">時尚潮牌 A</h2>
              <div style="font-size: 12px; color: rgba(255,255,255,0.8)">856 位大使 • 12.5k 粉絲</div>
            </div>
          </div>
          <div style="display: flex; gap: 8px">
            <span style="padding: 4px 8px; background: rgba(255,255,255,0.2); color: white; border-radius: 12px; font-size: 10px; font-weight: 600">#時尚</span>
            <span style="padding: 4px 8px; background: rgba(255,255,255,0.2); color: white; border-radius: 12px; font-size: 10px; font-weight: 600">#穿搭</span>
            <span style="padding: 4px 8px; background: rgba(255,255,255,0.2); color: white; border-radius: 12px; font-size: 10px; font-weight: 600">#潮流</span>
          </div>
        </div>
      </div>

      <!-- 品牌統計 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">品牌數據</h3>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value" style="color: #6366f1">856</div>
            <div class="stat-label">大使數量</div>
          </div>
          <div class="stat-card">
            <div class="stat-value" style="color: #10b981">12.5k</div>
            <div class="stat-label">總粉絲</div>
          </div>
          <div class="stat-card">
            <div class="stat-value" style="color: #f59e0b">2.3k</div>
            <div class="stat-label">月活躍</div>
          </div>
          <div class="stat-card">
            <div class="stat-value" style="color: #8b5cf6">156</div>
            <div class="stat-label">內容數</div>
          </div>
        </div>
      </div>

      <!-- 精選內容 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">精選內容</h3>
        <div style="display: grid; gap: 12px">
          <div class="video-item" style="height: 160px">
            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=160&fit=crop" alt="Featured Video">
            <div class="video-overlay">
              <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px">品牌故事</div>
              <div style="font-size: 12px; opacity: 0.8">@emily_fashion • 2.3k 讚</div>
            </div>
          </div>

          <div class="video-item" style="height: 160px">
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=160&fit=crop" alt="Featured Video">
            <div class="video-overlay">
              <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px">新品發布</div>
              <div style="font-size: 12px; opacity: 0.8">@sarah_beauty • 1.8k 讚</div>
            </div>
          </div>

          <div class="video-item" style="height: 160px">
            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=160&fit=crop" alt="Featured Video">
            <div class="video-overlay">
              <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px">穿搭靈感</div>
              <div style="font-size: 12px; opacity: 0.8">@alex_lifestyle • 3.1k 讚</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 熱門大使 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">熱門大使</h3>
        <div style="display: grid; gap: 12px">
          <div class="list-item" style="background: #f8fafc; border-radius: 12px; padding: 16px; margin: 0">
            <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='%236366f1'/><stop offset='1' stop-color='%238b5cf6'/></linearGradient></defs><circle cx='30' cy='30' r='30' fill='url(%23g)'/><circle cx='30' cy='24' r='10' fill='%23ffffff' fill-opacity='0.95'/><path d='M10 52a20 20 0 0140 0v2H10z' fill='%23ffffff' fill-opacity='0.95'/><circle cx='30' cy='24' r='8' fill='%23e0e7ff'/></svg>" alt="User" style="width: 48px; height: 48px; border-radius: 24px; margin-right: 12px; object-fit: cover; background:#e2e8f0">
            <div style="flex: 1">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 2px">@emily_fashion</div>
              <div style="font-size: 13px; color: #64748b; margin-bottom: 4px">金牌大使 • 12.5k 粉絲</div>
              <div style="font-size: 12px; color: #6366f1">2.3k 讚 • 89 評論</div>
            </div>
            <button style="background: #6366f1; color: white; border: none; padding: 6px 12px; border-radius: 16px; font-size: 12px; font-weight: 600">關注</button>
          </div>

          <div class="list-item" style="background: #f8fafc; border-radius: 12px; padding: 16px; margin: 0">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop" alt="User" style="width: 48px; height: 48px; border-radius: 24px; margin-right: 12px">
            <div style="flex: 1">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 2px">@sarah_beauty</div>
              <div style="font-size: 13px; color: #64748b; margin-bottom: 4px">銀牌大使 • 8.2k 粉絲</div>
              <div style="font-size: 12px; color: #6366f1">1.8k 讚 • 156 評論</div>
            </div>
            <button style="background: #6366f1; color: white; border: none; padding: 6px 12px; border-radius: 16px; font-size: 12px; font-weight: 600">關注</button>
          </div>

          <div class="list-item" style="background: #f8fafc; border-radius: 12px; padding: 16px; margin: 0">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" alt="User" style="width: 48px; height: 48px; border-radius: 24px; margin-right: 12px">
            <div style="flex: 1">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 2px">@alex_lifestyle</div>
              <div style="font-size: 13px; color: #64748b; margin-bottom: 4px">銅牌大使 • 15.3k 粉絲</div>
              <div style="font-size: 12px; color: #6366f1">3.1k 讚 • 234 評論</div>
            </div>
            <button style="background: #6366f1; color: white; border: none; padding: 6px 12px; border-radius: 16px; font-size: 12px; font-weight: 600">關注</button>
          </div>
        </div>
      </div>

      <!-- 品牌資訊 -->
      <div class="card">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">品牌資訊</h3>
        <div style="display: grid; gap: 12px">
          <div style="padding: 12px; background: #f8fafc; border-radius: 12px">
            <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 4px">品牌理念</div>
            <div style="font-size: 13px; color: #64748b; line-height: 1.5">
              致力於為現代都市人提供時尚、舒適且具有個性的服裝選擇，讓每個人都能展現獨特的風格。
            </div>
          </div>

          <div style="padding: 12px; background: #f8fafc; border-radius: 12px">
            <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 4px">成立時間</div>
            <div style="font-size: 13px; color: #64748b">2018 年</div>
          </div>

          <div style="padding: 12px; background: #f8fafc; border-radius: 12px">
            <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 4px">主要產品</div>
            <div style="font-size: 13px; color: #64748b">外套、上衣、褲裝、配飾</div>
          </div>

          <div style="padding: 12px; background: #f8fafc; border-radius: 12px">
            <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 4px">價格區間</div>
            <div style="font-size: 13px; color: #64748b">NT$ 500 - NT$ 5,000</div>
          </div>
        </div>

        <button class="btn btn-primary" style="margin-top: 16px">
          <i class="fas fa-plus" style="margin-right: 8px"></i>
          申請成為大使
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
