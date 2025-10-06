// 頁面 07A: 影片拍攝編輯工具（時長限制）
document.getElementById("page-07a").innerHTML = `
<div class="phone-container">
  <div class="status-bar">
    <div class="status-time">9:41</div>
    <div class="status-icons">
      <i class="fas fa-signal"></i>
      <i class="fas fa-wifi"></i>
      <i class="fas fa-battery-full"></i>
    </div>
  </div>

  <div class="page-content" style="bottom: 0; background: #000">
    <!-- 頂部工具列 -->
    <div style="position: absolute; top: 60px; left: 0; right: 0; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; z-index: 10; background: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)">
      <button class="btn-icon" style="background: rgba(0,0,0,0.5)" onclick="goToPage(7)">
        <i class="fas fa-times" style="color: white"></i>
      </button>
      <div style="display: flex; gap: 12px">
        <button class="btn-icon" style="background: rgba(0,0,0,0.5)">
          <i class="fas fa-music" style="color: white"></i>
        </button>
        <button class="btn-icon" style="background: rgba(0,0,0,0.5)">
          <i class="fas fa-sparkles" style="color: white"></i>
        </button>
        <button class="btn-icon" style="background: rgba(0,0,0,0.5)">
          <i class="fas fa-cog" style="color: white"></i>
        </button>
      </div>
    </div>

    <!-- 錄製畫面區域 -->
    <div style="position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center">
      <!-- 模擬相機畫面 -->
      <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1200&fit=crop" alt="Camera" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8">
      
      <!-- 錄製時間與剩餘時間 -->
      <div style="position: absolute; top: 120px; left: 50%; transform: translateX(-50%); text-align: center">
        <div style="background: rgba(239,68,68,0.9); color: white; padding: 8px 20px; border-radius: 20px; font-size: 18px; font-weight: 700; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3)">
          <div style="width: 10px; height: 10px; background: white; border-radius: 50%; animation: pulse 1.5s infinite"></div>
          00:15
        </div>
        <div style="color: white; font-size: 13px; margin-top: 8px; text-shadow: 0 2px 8px rgba(0,0,0,0.5)">
          剩餘時間：00:45 <i class="fas fa-info-circle" style="margin-left: 4px; cursor: pointer" onclick="alert('大使影片最長可錄製 60 秒')"></i>
        </div>
      </div>

      <!-- 濾鏡選項 -->
      <div style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 16px">
        <button class="btn-icon" style="background: rgba(0,0,0,0.6)" title="美顏">
          <i class="fas fa-magic" style="color: white"></i>
        </button>
        <button class="btn-icon" style="background: rgba(0,0,0,0.6)" title="濾鏡">
          <i class="fas fa-palette" style="color: white"></i>
        </button>
        <button class="btn-icon" style="background: rgba(0,0,0,0.6)" title="速度">
          <i class="fas fa-tachometer-alt" style="color: white"></i>
        </button>
        <button class="btn-icon" style="background: rgba(0,0,0,0.6)" title="倒數計時">
          <i class="fas fa-stopwatch" style="color: white"></i>
        </button>
      </div>
    </div>

    <!-- 底部控制列 -->
    <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 24px 20px 40px; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent)">
      <!-- 編輯工具 -->
      <div style="display: flex; justify-content: center; gap: 24px; margin-bottom: 24px; overflow-x: auto; padding-bottom: 8px">
        <button style="background: none; border: none; color: white; text-align: center; cursor: pointer; flex-shrink: 0">
          <div style="width: 56px; height: 56px; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 6px">
            <i class="fas fa-cut" style="font-size: 22px"></i>
          </div>
          <div style="font-size: 11px; font-weight: 600">剪輯</div>
        </button>
        <button style="background: none; border: none; color: white; text-align: center; cursor: pointer; flex-shrink: 0">
          <div style="width: 56px; height: 56px; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 6px">
            <i class="fas fa-text" style="font-size: 22px"></i>
          </div>
          <div style="font-size: 11px; font-weight: 600">文字</div>
        </button>
        <button style="background: none; border: none; color: white; text-align: center; cursor: pointer; flex-shrink: 0">
          <div style="width: 56px; height: 56px; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 6px">
            <i class="fas fa-icons" style="font-size: 22px"></i>
          </div>
          <div style="font-size: 11px; font-weight: 600">貼圖</div>
        </button>
        <button style="background: none; border: none; color: white; text-align: center; cursor: pointer; flex-shrink: 0">
          <div style="width: 56px; height: 56px; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 6px">
            <i class="fas fa-volume-up" style="font-size: 22px"></i>
          </div>
          <div style="font-size: 11px; font-weight: 600">音效</div>
        </button>
        <button style="background: none; border: none; color: white; text-align: center; cursor: pointer; flex-shrink: 0">
          <div style="width: 56px; height: 56px; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 6px">
            <i class="fas fa-adjust" style="font-size: 22px"></i>
          </div>
          <div style="font-size: 11px; font-weight: 600">調整</div>
        </button>
      </div>

      <!-- 錄製按鈕 -->
      <div style="display: flex; align-items: center; justify-content: center; gap: 32px">
        <button class="btn-icon" style="width: 56px; height: 56px; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px)">
          <i class="fas fa-images" style="color: white; font-size: 24px"></i>
        </button>

        <button style="width: 80px; height: 80px; background: white; border: 6px solid rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 16px rgba(0,0,0,0.3); transition: transform 0.2s" onmousedown="this.style.transform='scale(0.9)'" onmouseup="this.style.transform='scale(1)'">
          <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center">
            <i class="fas fa-pause" style="color: white; font-size: 28px"></i>
          </div>
        </button>

        <button class="btn-icon" style="width: 56px; height: 56px; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px)">
          <i class="fas fa-sync-alt" style="color: white; font-size: 24px"></i>
        </button>
      </div>

      <!-- 時長限制提示 -->
      <div style="text-align: center; margin-top: 20px">
        <div style="background: rgba(245,158,11,0.9); color: white; padding: 8px 16px; border-radius: 20px; font-size: 12px; display: inline-block">
          <i class="fas fa-clock" style="margin-right: 6px"></i>
          大使影片限制：60 秒
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
</style>
`;
