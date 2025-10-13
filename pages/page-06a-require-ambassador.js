// 頁面 06a: 需要大使身份（創作內容前的檢查頁）
document.getElementById("page-06a").innerHTML = `
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
    <div style="padding: 40px 24px; text-align: center; display: flex; flex-direction: column; justify-content: center; min-height: 100%">
      <!-- 返回按鈕 -->
      <button 
        onclick="goToPage('04')" 
        style="position: absolute; top: 60px; left: 24px; background: rgba(255,255,255,0.2); border: 1.5px solid rgba(255,255,255,0.3); width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; cursor: pointer; transition: all 0.3s"
        onmouseover="this.style.background='rgba(255,255,255,0.3)'"
        onmouseout="this.style.background='rgba(255,255,255,0.2)'"
      >
        <i class="fas fa-arrow-left"></i>
      </button>

      <!-- 鎖定圖示 -->
      <div style="margin-bottom: 32px">
        <div style="width: 120px; height: 120px; margin: 0 auto; position: relative">
          <div style="width: 120px; height: 120px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center">
            <i class="fas fa-lock" style="font-size: 56px; color: white"></i>
          </div>
        </div>
      </div>

      <!-- 標題與說明 -->
      <div style="color: white; margin-bottom: 40px">
        <h1 style="font-size: 32px; font-weight: 800; margin-bottom: 16px">僅限品牌大使使用</h1>
        <p style="font-size: 16px; opacity: 0.95; line-height: 1.8; max-width: 300px; margin: 0 auto">
          購買商品後即可成為品牌大使<br>
          開始創作內容並賺取收益
        </p>
      </div>

      <!-- 大使權益卡片 -->
      <div style="background: white; border-radius: 20px; padding: 24px; margin-bottom: 32px; text-align: left">
        <h3 style="font-size: 18px; font-weight: 800; color: #1e293b; margin-bottom: 20px; text-align: center">
          <i class="fas fa-crown" style="color: #f59e0b; margin-right: 8px"></i>
          大使專屬權益
        </h3>
        <div style="display: grid; gap: 16px">
          <div style="display: flex; align-items: start; gap: 12px">
            <div style="width: 40px; height: 40px; background: #fef3c7; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
              <i class="fas fa-video" style="color: #f59e0b; font-size: 18px"></i>
            </div>
            <div>
              <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">創作影片內容</div>
              <div style="font-size: 13px; color: #64748b; line-height: 1.5">分享品牌商品的使用心得與穿搭</div>
            </div>
          </div>

          <div style="display: flex; align-items: start; gap: 12px">
            <div style="width: 40px; height: 40px; background: #dcfce7; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
              <i class="fas fa-dollar-sign" style="color: #10b981; font-size: 18px"></i>
            </div>
            <div>
              <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">賺取創作收益</div>
              <div style="font-size: 13px; color: #64748b; line-height: 1.5">每個觀看、點讚都能獲得收益</div>
            </div>
          </div>

          <div style="display: flex; align-items: start; gap: 12px">
            <div style="width: 40px; height: 40px; background: #e0e7ff; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
              <i class="fas fa-chart-line" style="color: #6366f1; font-size: 18px"></i>
            </div>
            <div>
              <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">數據分析工具</div>
              <div style="font-size: 13px; color: #64748b; line-height: 1.5">追蹤作品表現與收益報表</div>
            </div>
          </div>

          <div style="display: flex; align-items: start; gap: 12px">
            <div style="width: 40px; height: 40px; background: #fce7f3; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
              <i class="fas fa-comments" style="color: #ec4899; font-size: 18px"></i>
            </div>
            <div>
              <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">品牌直接聯繫</div>
              <div style="font-size: 13px; color: #64748b; line-height: 1.5">與品牌團隊即時溝通合作</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 升級按鈕 -->
      <button 
        class="btn btn-primary" 
        style="width: 100%; background: white; color: #f59e0b; font-size: 18px; font-weight: 800; padding: 18px; margin-bottom: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.2)"
        onclick="goToPage(4)"
      >
        <i class="fas fa-shopping-bag" style="margin-right: 8px"></i>
        前往購物解鎖大使
      </button>
      
      <p style="font-size: 13px; color: rgba(255,255,255,0.8); text-align: center">
        購買任一商品後即可解鎖大使功能
      </p>
    </div>
  </div>
</div>
`;
