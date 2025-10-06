// 頁面 11: 數據分析頁面
document.getElementById("page-11").innerHTML = `
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
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">數據分析</h2>
      </div>
      <!-- 時間範圍選擇 -->
      <div style="display: flex; gap: 8px; margin-bottom: 20px">
        <button style="flex: 1; padding: 8px 16px; background: #6366f1; color: white; border: none; border-radius: 20px; font-size: 13px; font-weight: 600">本週</button>
        <button style="flex: 1; padding: 8px 16px; background: #f1f5f9; color: #64748b; border: none; border-radius: 20px; font-size: 13px; font-weight: 600">本月</button>
        <button style="flex: 1; padding: 8px 16px; background: #f1f5f9; color: #64748b; border: none; border-radius: 20px; font-size: 13px; font-weight: 600">本年</button>
      </div>

      <!-- 總覽統計 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">本週總覽</h3>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value" style="color: #6366f1">12</div>
            <div class="stat-label">發布內容</div>
          </div>
          <div class="stat-card">
            <div class="stat-value" style="color: #10b981">2.3k</div>
            <div class="stat-label">總讚數</div>
          </div>
          <div class="stat-card">
            <div class="stat-value" style="color: #f59e0b">156</div>
            <div class="stat-label">評論數</div>
          </div>
          <div class="stat-card">
            <div class="stat-value" style="color: #8b5cf6">89</div>
            <div class="stat-label">分享數</div>
          </div>
        </div>
      </div>

      <!-- 互動趨勢圖 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">互動趨勢</h3>
        <div style="height: 200px; background: #f8fafc; border-radius: 12px; display: flex; align-items: center; justify-content: center; position: relative">
          <div style="text-align: center; color: #64748b">
            <i class="fas fa-chart-line" style="font-size: 48px; margin-bottom: 12px"></i>
            <div style="font-size: 14px">互動趨勢圖表</div>
            <div style="font-size: 12px; margin-top: 4px">顯示過去 7 天的互動數據</div>
          </div>
          <!-- 模擬圖表 -->
          <div style="position: absolute; bottom: 20px; left: 20px; right: 20px; height: 60px; display: flex; align-items: end; gap: 8px">
            <div style="flex: 1; height: 40px; background: #6366f1; border-radius: 2px 2px 0 0"></div>
            <div style="flex: 1; height: 55px; background: #6366f1; border-radius: 2px 2px 0 0"></div>
            <div style="flex: 1; height: 30px; background: #6366f1; border-radius: 2px 2px 0 0"></div>
            <div style="flex: 1; height: 45px; background: #6366f1; border-radius: 2px 2px 0 0"></div>
            <div style="flex: 1; height: 60px; background: #6366f1; border-radius: 2px 2px 0 0"></div>
            <div style="flex: 1; height: 35px; background: #6366f1; border-radius: 2px 2px 0 0"></div>
            <div style="flex: 1; height: 50px; background: #6366f1; border-radius: 2px 2px 0 0"></div>
          </div>
        </div>
      </div>

      <!-- 熱門內容 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">熱門內容</h3>
        <div style="display: grid; gap: 12px">
          <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px">
            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=60&h=60&fit=crop" alt="Content" style="width: 48px; height: 48px; border-radius: 8px; flex-shrink: 0">
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px">
              <div style="font-size: 14px; font-weight: 700; color: #1e293b">今日最佳穿搭</div>
              <div style="font-size: 12px; color: #64748b">2 天前發布</div>
              <div style="display: flex; gap: 12px; font-size: 11px; color: #64748b">
                <span><i class="fas fa-heart" style="margin-right: 2px"></i>856</span>
                <span><i class="fas fa-comment" style="margin-right: 2px"></i>23</span>
                <span><i class="fas fa-share" style="margin-right: 2px"></i>12</span>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-end; justify-content: center; gap: 4px; flex-shrink: 0">
              <div style="padding: 4px 10px; background: #d1fae5; color: #059669; border-radius: 16px; font-size: 13px; font-weight: 700">+15%</div>
              <div style="font-size: 10px; color: #64748b">成長率</div>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px">
            <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=60&h=60&fit=crop" alt="Content" style="width: 48px; height: 48px; border-radius: 8px; flex-shrink: 0">
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px">
              <div style="font-size: 14px; font-weight: 700; color: #1e293b">美妝教學分享</div>
              <div style="font-size: 12px; color: #64748b">3 天前發布</div>
              <div style="display: flex; gap: 12px; font-size: 11px; color: #64748b">
                <span><i class="fas fa-heart" style="margin-right: 2px"></i>642</span>
                <span><i class="fas fa-comment" style="margin-right: 2px"></i>18</span>
                <span><i class="fas fa-share" style="margin-right: 2px"></i>8</span>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-end; justify-content: center; gap: 4px; flex-shrink: 0">
              <div style="padding: 4px 10px; background: #d1fae5; color: #059669; border-radius: 16px; font-size: 13px; font-weight: 700">+8%</div>
              <div style="font-size: 10px; color: #64748b">成長率</div>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px">
            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=60&h=60&fit=crop" alt="Content" style="width: 48px; height: 48px; border-radius: 8px; flex-shrink: 0">
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px">
              <div style="font-size: 14px; font-weight: 700; color: #1e293b">居家佈置靈感</div>
              <div style="font-size: 12px; color: #64748b">5 天前發布</div>
              <div style="display: flex; gap: 12px; font-size: 11px; color: #64748b">
                <span><i class="fas fa-heart" style="margin-right: 2px"></i>423</span>
                <span><i class="fas fa-comment" style="margin-right: 2px"></i>15</span>
                <span><i class="fas fa-share" style="margin-right: 2px"></i>6</span>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-end; justify-content: center; gap: 4px; flex-shrink: 0">
              <div style="padding: 4px 10px; background: #d1fae5; color: #059669; border-radius: 16px; font-size: 13px; font-weight: 700">+12%</div>
              <div style="font-size: 10px; color: #64748b">成長率</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 粉絲分析 -->
      <div class="card">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">粉絲分析</h3>
        <div style="display: grid; gap: 16px">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 16px; background: #f8fafc; border-radius: 12px">
            <div>
              <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 2px">粉絲增長</div>
              <div style="font-size: 12px; color: #64748b">本週新增粉絲</div>
            </div>
            <div style="text-align: right">
              <div style="font-size: 20px; font-weight: 800; color: #10b981">+156</div>
              <div style="font-size: 12px; color: #10b981">+12.5%</div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding: 16px; background: #f8fafc; border-radius: 12px">
            <div>
              <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 2px">互動率</div>
              <div style="font-size: 12px; color: #64748b">平均互動率</div>
            </div>
            <div style="text-align: right">
              <div style="font-size: 20px; font-weight: 800; color: #6366f1">8.3%</div>
              <div style="font-size: 12px; color: #6366f1">+2.1%</div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding: 16px; background: #f8fafc; border-radius: 12px">
            <div>
              <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 2px">最佳發布時間</div>
              <div style="font-size: 12px; color: #64748b">建議發布時段</div>
            </div>
            <div style="text-align: right">
              <div style="font-size: 16px; font-weight: 800; color: #f59e0b">19:00-21:00</div>
              <div style="font-size: 12px; color: #f59e0b">週三、週五</div>
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
