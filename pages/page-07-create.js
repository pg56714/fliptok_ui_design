// 頁面 07: 創作頁面
document.getElementById("page-07").innerHTML = `
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
      <div class="header-title">創作內容</div>
      <div class="header-subtitle">分享你的精彩時刻</div>
    </div>

    <div style="padding: 16px">
      <!-- 創作選項 -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 24px">
        <div style="background: white; border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.08); cursor: pointer" onclick="alert('開啟相機')">
          <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 30px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px">
            <i class="fas fa-camera" style="font-size: 24px; color: white"></i>
          </div>
          <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 4px">拍攝影片</h3>
          <p style="font-size: 13px; color: #64748b">錄製新的短影片</p>
        </div>

        <div style="background: white; border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.08); cursor: pointer" onclick="alert('選擇相簿')">
          <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 30px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px">
            <i class="fas fa-images" style="font-size: 24px; color: white"></i>
          </div>
          <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 4px">從相簿選擇</h3>
          <p style="font-size: 13px; color: #64748b">使用現有的照片或影片</p>
        </div>
      </div>

      

      <!-- 我的創作 -->
      <div>
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 12px">我的創作</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px">
          <div class="video-item" style="height: 120px">
            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=200&h=120&fit=crop" alt="My Video" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='">
            <div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.6); color: white; padding: 2px 6px; border-radius: 4px; font-size: 10px">2.3k</div>
          </div>
          <div class="video-item" style="height: 120px">
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=120&fit=crop" alt="My Video" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='">
            <div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.6); color: white; padding: 2px 6px; border-radius: 4px; font-size: 10px">1.8k</div>
          </div>
          <div class="video-item" style="height: 120px">
            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=200&h=120&fit=crop" alt="My Video" onerror="this.onerror=null;this.src='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='">
            <div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.6); color: white; padding: 2px 6px; border-radius: 4px; font-size: 10px">3.1k</div>
          </div>
          <div class="video-item" style="height: 120px; background: #f1f5f9; display: flex; align-items: center; justify-content: center; cursor: pointer" onclick="alert('新增創作')">
            <i class="fas fa-plus" style="font-size: 24px; color: #94a3b8"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="tab-bar">
    <div class="tab-item" onclick="goToPage(4)">
      <i class="fas fa-home tab-icon"></i>
      <span class="tab-label">首頁</span>
    </div>
    <div class="tab-item" onclick="goToPage(6)">
      <i class="fas fa-compass tab-icon"></i>
      <span class="tab-label">探索</span>
    </div>
    <div class="tab-item active">
      <i class="fas fa-plus-circle tab-icon"></i>
      <span class="tab-label">創作</span>
    </div>
    <div class="tab-item" onclick="goToPage(8)">
      <i class="fas fa-wallet tab-icon"></i>
      <span class="tab-label">錢包</span>
    </div>
    <div class="tab-item" onclick="goToPage(9)">
      <i class="fas fa-user tab-icon"></i>
      <span class="tab-label">我的</span>
    </div>
  </div>
</div>
`;
