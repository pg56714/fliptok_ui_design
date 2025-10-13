// 頁面 09B: 問卷調查（在設定中）
document.getElementById("page-09b").innerHTML = `
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
    <div style="padding: 20px">
      <!-- 標題區域 -->
      <div style="position: relative; margin-bottom: 24px">
        <button 
          onclick="goToPage(9)" 
          style="position: absolute; left: 0; top: 4px; background: white; border: 1.5px solid #e2e8f0; width: 36px; height: 36px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #64748b; cursor: pointer; transition: all 0.3s"
          onmouseover="this.style.background='#f8fafc'; this.style.borderColor='#cbd5e1'"
          onmouseout="this.style.background='white'; this.style.borderColor='#e2e8f0'"
        >
          <i class="fas fa-arrow-left"></i>
        </button>
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">用戶調查</h2>
      </div>
      <!-- 進度條 -->
      <div style="margin-bottom: 32px">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px">
          <span style="font-size: 14px; font-weight: 700; color: #1e293b">問卷進度</span>
          <span style="font-size: 14px; font-weight: 700; color: #6366f1">40%</span>
        </div>
        <div style="height: 8px; background: #f1f5f9; border-radius: 4px; overflow: hidden">
          <div style="width: 40%; height: 100%; background: linear-gradient(to right, #6366f1, #8b5cf6); transition: width 0.3s"></div>
        </div>
        <div style="font-size: 12px; color: #64748b; margin-top: 6px">第 2 題，共 5 題</div>
      </div>

      <!-- 問題 1 -->
      <div style="background: white; border-radius: 20px; padding: 24px; margin-bottom: 20px; box-shadow: 0 2px 12px rgba(0,0,0,0.08)">
        <div style="font-size: 14px; color: #64748b; margin-bottom: 8px">問題 1</div>
        <h3 style="font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: 20px">你最常使用 FlipTok 的時間是？</h3>
        <div style="display: grid; gap: 12px">
          <label style="background: #f8fafc; border: 2px solid #6366f1; border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 12px; cursor: pointer">
            <input type="radio" name="q1" checked style="width: 20px; height: 20px; accent-color: #6366f1">
            <span style="font-size: 15px; color: #1e293b; font-weight: 600">早上 (6:00 - 12:00)</span>
          </label>
          <label style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 12px; cursor: pointer">
            <input type="radio" name="q1" style="width: 20px; height: 20px; accent-color: #6366f1">
            <span style="font-size: 15px; color: #1e293b">下午 (12:00 - 18:00)</span>
          </label>
          <label style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 12px; cursor: pointer">
            <input type="radio" name="q1" style="width: 20px; height: 20px; accent-color: #6366f1">
            <span style="font-size: 15px; color: #1e293b">晚上 (18:00 - 24:00)</span>
          </label>
          <label style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 12px; cursor: pointer">
            <input type="radio" name="q1" style="width: 20px; height: 20px; accent-color: #6366f1">
            <span style="font-size: 15px; color: #1e293b">深夜 (00:00 - 6:00)</span>
          </label>
        </div>
      </div>

      <!-- 問題 2 -->
      <div style="background: white; border-radius: 20px; padding: 24px; margin-bottom: 20px; box-shadow: 0 2px 12px rgba(0,0,0,0.08)">
        <div style="font-size: 14px; color: #64748b; margin-bottom: 8px">問題 2</div>
        <h3 style="font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: 20px">你最感興趣的商品類別？（可複選）</h3>
        <div style="display: grid; gap: 12px">
          <label style="background: #f8fafc; border: 2px solid #6366f1; border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 12px; cursor: pointer">
            <input type="checkbox" checked style="width: 20px; height: 20px; accent-color: #6366f1">
            <span style="font-size: 15px; color: #1e293b; font-weight: 600">時尚服飾</span>
          </label>
          <label style="background: #f8fafc; border: 2px solid #6366f1; border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 12px; cursor: pointer">
            <input type="checkbox" checked style="width: 20px; height: 20px; accent-color: #6366f1">
            <span style="font-size: 15px; color: #1e293b; font-weight: 600">美妝保養</span>
          </label>
          <label style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 12px; cursor: pointer">
            <input type="checkbox" style="width: 20px; height: 20px; accent-color: #6366f1">
            <span style="font-size: 15px; color: #1e293b">3C 科技</span>
          </label>
          <label style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 12px; cursor: pointer">
            <input type="checkbox" style="width: 20px; height: 20px; accent-color: #6366f1">
            <span style="font-size: 15px; color: #1e293b">居家生活</span>
          </label>
          <label style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 12px; cursor: pointer">
            <input type="checkbox" style="width: 20px; height: 20px; accent-color: #6366f1">
            <span style="font-size: 15px; color: #1e293b">運動健身</span>
          </label>
          <label style="background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 12px; cursor: pointer">
            <input type="checkbox" style="width: 20px; height: 20px; accent-color: #6366f1">
            <span style="font-size: 15px; color: #1e293b">食品飲料</span>
          </label>
        </div>
      </div>

      <!-- 問題 3 -->
      <div style="background: white; border-radius: 20px; padding: 24px; margin-bottom: 20px; box-shadow: 0 2px 12px rgba(0,0,0,0.08)">
        <div style="font-size: 14px; color: #64748b; margin-bottom: 8px">問題 3</div>
        <h3 style="font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: 20px">你希望 FlipTok 增加什麼功能？</h3>
        <textarea class="form-input" placeholder="請輸入你的建議..." style="min-height: 120px; resize: vertical"></textarea>
      </div>

      <!-- 獎勵提示 -->
      <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 16px; padding: 20px; margin-bottom: 24px; color: white">
        <div style="display: flex; align-items: center; gap: 12px">
          <div style="width: 48px; height: 48px; background: rgba(255,255,255,0.2); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
            <i class="fas fa-lightbulb" style="font-size: 24px"></i>
          </div>
          <div>
            <div style="font-weight: 700; margin-bottom: 4px">你的意見很重要！</div>
            <div style="font-size: 13px; opacity: 0.9">幫助我們打造更好的 FlipTok 體驗</div>
          </div>
        </div>
      </div>

      <!-- 提交按鈕 -->
      <button class="btn btn-primary" onclick="alert('感謝你的寶貴意見！'); goToPage(9)">
        提交問卷
      </button>
      <button class="btn btn-outline" style="margin-top: 12px" onclick="goToPage(9)">
        稍後再填
      </button>
    </div>
  </div>

  <div class="tab-bar">
    <div class="tab-item" onclick="goToPage(4)">
      <i class="fas fa-home tab-icon"></i>
      <span class="tab-label">首頁</span>
    </div>
    <div class="tab-item" onclick="goToPage(6)">
      <i class="fas fa-compass tab-icon"></i>
      <span class="tab-label">搜尋</span>
    </div>
    <div class="tab-item" onclick="goToPage(7)">
      <i class="fas fa-plus-circle tab-icon"></i>
      <span class="tab-label">創作</span>
    </div>
    <div class="tab-item active">
      <i class="fas fa-user tab-icon"></i>
      <span class="tab-label">我的</span>
    </div>
  </div>
</div>
`;
