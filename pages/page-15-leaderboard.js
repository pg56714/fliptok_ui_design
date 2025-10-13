// 頁面 15: 排行榜頁面
document.getElementById("page-15").innerHTML = `
<div class="phone-container">
  <div class="status-bar">
    <div class="status-time">9:41</div>
    <div class="status-icons">
      <i class="fas fa-signal"></i>
      <i class="fas fa-wifi"></i>
      <i class="fas fa-battery-full"></i>
    </div>
  </div>

  <div class="page-content" style="overflow-y:auto">
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
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">排行榜</h2>
      </div>
      <!-- 時間範圍選擇 -->
      <div style="display: flex; gap: 8px; margin-bottom: 20px">
        <button style="flex: 1; padding: 8px 16px; background: #6366f1; color: white; border: none; border-radius: 20px; font-size: 13px; font-weight: 600">本週</button>
        <button style="flex: 1; padding: 8px 16px; background: #f1f5f9; color: #64748b; border: none; border-radius: 20px; font-size: 13px; font-weight: 600">本月</button>
        <button style="flex: 1; padding: 8px 16px; background: #f1f5f9; color: #64748b; border: none; border-radius: 20px; font-size: 13px; font-weight: 600">本年</button>
      </div>

      <!-- 我的排名 -->
      <div class="card-gradient" style="margin-bottom: 20px">
        <div style="display: flex; align-items: center; gap: 16px">
          <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 30px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: 800">#2</div>
          <div style="flex: 1">
            <div style="font-size: 18px; font-weight: 800; margin-bottom: 4px">你的排名</div>
            <div style="font-size: 14px; opacity: 0.9; margin-bottom: 8px">本週排名第 2 名</div>
            <div style="display: flex; gap: 16px; font-size: 12px">
              <span><i class="fas fa-heart" style="margin-right: 4px"></i>2.3k 讚</span>
              <span><i class="fas fa-comment" style="margin-right: 4px"></i>89 評論</span>
              <span><i class="fas fa-share" style="margin-right: 4px"></i>12 分享</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 排行榜 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 12px; text-align: center">本週排行榜</h3>
        <div class="rank-list">
          <!-- 第1名 -->
          <div class="rank-item rank-1">
            <div class="rank-badge">1</div>
            <img class="avatar" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" alt="User">
            <div class="content">
              <div class="title">@alex_lifestyle</div>
              <div class="subtitle">生活達人</div>
              <div class="stats">3.1k 讚 • 156 評論 • 23 分享</div>
            </div>
            <div class="score">
              <div class="value">3,279</div>
              <div class="label">總分</div>
            </div>
          </div>

          <!-- 第2名 (我) -->
          <div class="rank-item rank-2">
            <div class="rank-badge">2</div>
            <img class="avatar" src="https://i.pravatar.cc/60?img=12" alt="User">
            <div class="content">
              <div class="title">@emily_fashion</div>
              <div class="subtitle">時尚達人</div>
              <div class="stats">2.3k 讚 • 89 評論 • 12 分享</div>
            </div>
            <div class="score">
              <div class="value">2,401</div>
              <div class="label">總分</div>
            </div>
          </div>

          <!-- 第3名 -->
          <div class="rank-item rank-3">
            <div class="rank-badge">3</div>
            <img class="avatar" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop" alt="User">
            <div class="content">
              <div class="title">@sarah_beauty</div>
              <div class="subtitle">美妝達人</div>
              <div class="stats">1.8k 讚 • 156 評論 • 18 分享</div>
            </div>
            <div class="score">
              <div class="value">1,974</div>
              <div class="label">總分</div>
            </div>
          </div>

          <!-- 第4名 -->
          <div class="rank-item rank-neutral">
            <div class="rank-badge">4</div>
            <img class="avatar" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop" alt="User">
            <div class="content">
              <div class="title">@mike_tech</div>
              <div class="subtitle">科技達人</div>
              <div class="stats">1.2k 讚 • 67 評論 • 8 分享</div>
            </div>
            <div class="score">
              <div class="value">1,287</div>
              <div class="label">總分</div>
            </div>
          </div>

          <!-- 第5名 -->
          <div class="rank-item rank-neutral">
            <div class="rank-badge">5</div>
            <img class="avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop" alt="User">
            <div class="content">
              <div class="title">@lisa_travel</div>
              <div class="subtitle">旅遊達人</div>
              <div class="stats">856 讚 • 45 評論 • 6 分享</div>
            </div>
            <div class="score">
              <div class="value">907</div>
              <div class="label">總分</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 排行榜說明 -->
      <div class="card">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 12px">評分標準</h3>
        <div style="display: grid; gap: 8px">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0">
            <span style="font-size: 13px; color: #64748b">內容創作</span>
            <span style="font-size: 13px; font-weight: 700; color: #1e293b">每篇 +10 分</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0">
            <span style="font-size: 13px; color: #64748b">獲得讚數</span>
            <span style="font-size: 13px; font-weight: 700; color: #1e293b">每個 +1 分</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0">
            <span style="font-size: 13px; color: #64748b">評論互動</span>
            <span style="font-size: 13px; font-weight: 700; color: #1e293b">每個 +2 分</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0">
            <span style="font-size: 13px; color: #64748b">分享轉發</span>
            <span style="font-size: 13px; font-weight: 700; color: #1e293b">每個 +3 分</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0">
            <span style="font-size: 13px; color: #64748b">促成購買</span>
            <span style="font-size: 13px; font-weight: 700; color: #1e293b">每次 +50 分</span>
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
    <div class="tab-item">
      <i class="fas fa-compass tab-icon"></i>
      <span class="tab-label">搜尋</span>
    </div>
    <div class="tab-item">
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
