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
      <!-- 權限檢查提示（僅大使可創作） -->
      <div id="ambassador-check-warning" style="display: none; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 20px; padding: 24px; margin-bottom: 20px; text-align: center; color: white">
        <div style="width: 80px; height: 80px; margin: 0 auto 16px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center">
          <i class="fas fa-crown" style="font-size: 36px"></i>
        </div>
        <h3 style="font-size: 20px; font-weight: 800; margin-bottom: 8px">僅限品牌大使使用</h3>
        <p style="font-size: 14px; opacity: 0.95; margin-bottom: 20px">
          創作功能僅開放給品牌大使<br>
          完成購買即可升級為大使
        </p>
        <button class="btn" style="background: white; color: #f59e0b; font-weight: 700" onclick="goToPage('10b')">
          <i class="fas fa-arrow-right" style="margin-right: 8px"></i>
          了解如何成為大使
        </button>
      </div>

      <!-- 創作選項（僅大使可見） -->
      <div id="ambassador-content">
        <!-- 大使狀態徽章 -->
        <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 16px; padding: 16px; margin-bottom: 20px; color: white; display: flex; align-items: center; gap: 12px">
          <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
            <i class="fas fa-crown" style="font-size: 24px"></i>
          </div>
          <div style="flex: 1">
            <div style="font-weight: 700; margin-bottom: 2px">品牌大使</div>
            <div style="font-size: 13px; opacity: 0.9">你的影片需經品牌審核後發布</div>
          </div>
        </div>

        <!-- 創作選項 -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 24px">
          <div style="background: white; border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.08); cursor: pointer" onclick="alert('開啟相機'); goToPage('07a')">
            <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 30px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px">
              <i class="fas fa-camera" style="font-size: 24px; color: white"></i>
            </div>
            <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 4px">拍攝影片</h3>
            <p style="font-size: 13px; color: #64748b">錄製新的短影片（限 60 秒）</p>
          </div>

          <div style="background: white; border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.08); cursor: pointer" onclick="alert('選擇相簿')">
            <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 30px; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px">
              <i class="fas fa-images" style="font-size: 24px; color: white"></i>
            </div>
            <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 4px">從相簿選擇</h3>
            <p style="font-size: 13px; color: #64748b">使用現有的照片或影片（限 60 秒）</p>
          </div>
        </div>

        <!-- 審核狀態提示 -->
        <div style="background: #fef3c7; border: 1.5px solid #fbbf24; border-radius: 12px; padding: 16px; margin-bottom: 20px; display: flex; align-items: center; gap: 12px">
          <i class="fas fa-clock" style="color: #f59e0b; font-size: 20px"></i>
          <div style="flex: 1">
            <div style="font-size: 14px; font-weight: 700; color: #78350f; margin-bottom: 2px">2 支影片審核中</div>
            <div style="font-size: 12px; color: #92400e">品牌正在審核你的創作，通常 1-2 天內完成</div>
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
    <div class="tab-item" onclick="goToPage(9)">
      <i class="fas fa-user tab-icon"></i>
      <span class="tab-label">我的</span>
    </div>
  </div>
</div>

<script>
  // 模擬權限檢查：檢查是否為大使
  const isAmbassador = true; // 在真實應用中，這應該從後端 API 或用戶狀態獲取
  
  if (!isAmbassador) {
    // 非大使：顯示提示，隱藏創作內容
    document.getElementById('ambassador-check-warning').style.display = 'block';
    document.getElementById('ambassador-content').style.display = 'none';
  } else {
    // 是大使：隱藏提示，顯示創作內容
    document.getElementById('ambassador-check-warning').style.display = 'none';
    document.getElementById('ambassador-content').style.display = 'block';
  }
</script>
`;
