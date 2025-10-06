// 頁面 10B: 升級為大使確認頁
document.getElementById("page-10b").innerHTML = `
<div class="phone-container">
  <div class="status-bar">
    <div class="status-time">9:41</div>
    <div class="status-icons">
      <i class="fas fa-signal"></i>
      <i class="fas fa-wifi"></i>
      <i class="fas fa-battery-full"></i>
    </div>
  </div>

  <div class="page-content" style="bottom: 0; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%)">
    <div style="padding: 20px; text-align: center; display: flex; flex-direction: column; justify-content: center; min-height: 100%">
      <!-- 大使徽章動畫 -->
      <div style="margin-bottom: 32px">
        <div style="width: 140px; height: 140px; margin: 0 auto; position: relative">
          <div style="width: 140px; height: 140px; background: rgba(255,255,255,0.2); border-radius: 50%; position: absolute; animation: ping 2s infinite"></div>
          <div style="width: 140px; height: 140px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 12px 48px rgba(0,0,0,0.3); position: relative">
            <i class="fas fa-crown" style="font-size: 64px; color: #f59e0b"></i>
          </div>
        </div>
      </div>

      <div style="color: white; margin-bottom: 40px">
        <h1 style="font-size: 36px; font-weight: 800; margin-bottom: 12px">恭喜你！🎉</h1>
        <p style="font-size: 18px; font-weight: 600; margin-bottom: 8px">你已成為品牌大使</p>
        <p style="font-size: 14px; opacity: 0.9; line-height: 1.6">
          所有大使功能已解鎖<br>開始創作內容，賺取收益
        </p>
      </div>

      <!-- 大使權益 -->
      <div style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); border-radius: 24px; padding: 24px; margin-bottom: 32px; text-align: left">
        <div style="font-size: 16px; font-weight: 700; color: white; margin-bottom: 20px; text-align: center">
          <i class="fas fa-gift" style="margin-right: 8px"></i>
          大使專屬權益
        </div>
        <div style="display: grid; gap: 16px">
          <div style="display: flex; align-items: start; gap: 12px">
            <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
              <i class="fas fa-video" style="color: white; font-size: 18px"></i>
            </div>
            <div style="color: white">
              <div style="font-weight: 700; margin-bottom: 2px">創作影片賺取收益</div>
              <div style="font-size: 13px; opacity: 0.9">每支影片可獲得 $500-5,000 獎勵</div>
            </div>
          </div>

          <div style="display: flex; align-items: start; gap: 12px">
            <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
              <i class="fas fa-percentage" style="color: white; font-size: 18px"></i>
            </div>
            <div style="color: white">
              <div style="font-weight: 700; margin-bottom: 2px">專屬折扣優惠</div>
              <div style="font-size: 13px; opacity: 0.9">所有商品享 8 折優惠</div>
            </div>
          </div>

          <div style="display: flex; align-items: start; gap: 12px">
            <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
              <i class="fas fa-comments" style="color: white; font-size: 18px"></i>
            </div>
            <div style="color: white">
              <div style="font-weight: 700; margin-bottom: 2px">與品牌直接溝通</div>
              <div style="font-size: 13px; opacity: 0.9">專屬聊天室，合作更順暢</div>
            </div>
          </div>

          <div style="display: flex; align-items: start; gap: 12px">
            <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
              <i class="fas fa-chart-line" style="color: white; font-size: 18px"></i>
            </div>
            <div style="color: white">
              <div style="font-weight: 700; margin-bottom: 2px">詳細數據分析</div>
              <div style="font-size: 13px; opacity: 0.9">追蹤觀看次數與收益</div>
            </div>
          </div>

          <div style="display: flex; align-items: start; gap: 12px">
            <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
              <i class="fas fa-star" style="color: white; font-size: 18px"></i>
            </div>
            <div style="color: white">
              <div style="font-weight: 700; margin-bottom: 2px">優先體驗新品</div>
              <div style="font-size: 13px; opacity: 0.9">搶先獲得最新商品資訊</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 按鈕 -->
      <button class="btn" style="background: white; color: #f59e0b; font-weight: 700; font-size: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.3)" onclick="goToPage(4)">
        <i class="fas fa-rocket" style="margin-right: 8px"></i>
        開始探索
      </button>
    </div>
  </div>
</div>

<style>
  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    75%, 100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
</style>
`;
