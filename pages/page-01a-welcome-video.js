// 頁面 01A: 註冊成功 - 迎賓影片
document.getElementById("page-01a").innerHTML = `
<div class="phone-container">
  <div class="status-bar">
    <div class="status-time">9:41</div>
    <div class="status-icons">
      <i class="fas fa-signal"></i>
      <i class="fas fa-wifi"></i>
      <i class="fas fa-battery-full"></i>
    </div>
  </div>

  <div class="page-content" style="bottom: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
    <div style="padding: 20px; text-align: center; display: flex; flex-direction: column; justify-content: center; min-height: 100%">
      <!-- 影片區域 -->
      <div style="background: rgba(0,0,0,0.3); border-radius: 24px; padding: 24px; margin-bottom: 32px; backdrop-filter: blur(10px)">
        <div style="position: relative; width: 100%; aspect-ratio: 16/9; background: linear-gradient(135deg, #1e293b 0%, #334155 100%); border-radius: 16px; overflow: hidden; margin-bottom: 20px">
          <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center">
            <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.95); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 8px 32px rgba(0,0,0,0.3); transition: transform 0.3s" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" onclick="alert('播放迎賓影片')">
              <i class="fas fa-play" style="font-size: 32px; color: #6366f1; margin-left: 6px"></i>
            </div>
          </div>
          <!-- 假裝的影片縮圖 -->
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop" alt="Welcome" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.7">
        </div>
        
        <div style="color: white">
          <h2 style="font-size: 24px; font-weight: 800; margin-bottom: 8px">🎉 歡迎加入 FlipTok！</h2>
          <p style="font-size: 14px; opacity: 0.9; line-height: 1.6">
            一起探索你喜愛的品牌，創作精彩內容<br>成為品牌大使，開啟賺錢之旅
          </p>
        </div>
      </div>

      <!-- 特色介紹 -->
      <div style="display: grid; gap: 12px; margin-bottom: 32px">
        <div style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 12px; text-align: left">
          <div style="width: 48px; height: 48px; background: rgba(99,102,241,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
            <i class="fas fa-shopping-bag" style="font-size: 20px; color: white"></i>
          </div>
          <div style="color: white">
            <div style="font-weight: 700; margin-bottom: 2px">購物輕鬆簡單</div>
            <div style="font-size: 13px; opacity: 0.8">一鍵立即購買</div>
          </div>
        </div>

        <div style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 12px; text-align: left">
          <div style="width: 48px; height: 48px; background: rgba(139,92,246,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
            <i class="fas fa-video" style="font-size: 20px; color: white"></i>
          </div>
          <div style="color: white">
            <div style="font-weight: 700; margin-bottom: 2px">創作賺取收益</div>
            <div style="font-size: 13px; opacity: 0.8">成為大使，分享影片賺錢</div>
          </div>
        </div>

        <div style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 12px; text-align: left">
          <div style="width: 48px; height: 48px; background: rgba(16,185,129,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
            <i class="fas fa-crown" style="font-size: 20px; color: white"></i>
          </div>
          <div style="color: white">
            <div style="font-weight: 700; margin-bottom: 2px">專屬品牌社群</div>
            <div style="font-size: 13px; opacity: 0.8">與品牌和粉絲互動交流</div>
          </div>
        </div>
      </div>

      <!-- 開始按鈕 -->
      <button class="btn" style="background: white; color: #667eea; font-weight: 700; box-shadow: 0 8px 32px rgba(0,0,0,0.2)" onclick="goToPage(2)">
        開始探索 <i class="fas fa-arrow-right" style="margin-left: 8px"></i>
      </button>
    </div>
  </div>
</div>
`;
