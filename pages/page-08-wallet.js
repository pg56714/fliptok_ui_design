// 頁面 08: 錢包頁面
document.getElementById("page-08").innerHTML = `
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
      <div class="header-title">大使錢包</div>
      <div class="header-subtitle">你的收益與獎勵</div>
    </div>

    <div style="padding: 16px">
      <!-- 總收益卡片 -->
      <div class="card card-gradient" style="margin-bottom: 20px">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px">
          <div>
            <div style="font-size: 14px; opacity: 0.9; margin-bottom: 4px">總收益</div>
            <div style="font-size: 32px; font-weight: 800">NT$ 2,480</div>
          </div>
          <div style="text-align: right">
            <div style="font-size: 14px; opacity: 0.9; margin-bottom: 4px">本月收益</div>
            <div style="font-size: 18px; font-weight: 700">NT$ 680</div>
          </div>
        </div>
        <div style="display: flex; gap: 16px">
          <button style="flex: 1; background: rgba(255,255,255,0.2); color: white; border: 1px solid rgba(255,255,255,0.3); padding: 12px; border-radius: 12px; font-size: 14px; font-weight: 600">
            <i class="fas fa-download" style="margin-right: 6px"></i>提現
          </button>
        </div>
      </div>

      <!-- 收益統計 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">收益統計</h3>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">156</div>
            <div class="stat-label">內容創作</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">2.3k</div>
            <div class="stat-label">獲得讚數</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">89</div>
            <div class="stat-label">評論互動</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">12</div>
            <div class="stat-label">促成購買</div>
          </div>
        </div>
      </div>

      <!-- 收益來源 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">收益來源</h3>
        <div style="display: grid; gap: 12px">
          <div class="list-item" style="background: #f8fafc; border-radius: 12px; padding: 16px; margin: 0">
            <div class="list-icon" style="background: #fef3c7; color: #f59e0b">
              <i class="fas fa-video"></i>
            </div>
            <div class="list-content">
              <div class="list-title">內容創作獎勵</div>
              <div class="list-subtitle">發布優質內容獲得獎勵</div>
            </div>
            <div class="list-value" style="color: #10b981">+NT$ 1,200</div>
          </div>

          <div class="list-item" style="background: #f8fafc; border-radius: 12px; padding: 16px; margin: 0">
            <div class="list-icon" style="background: #e0f2fe; color: #0284c7">
              <i class="fas fa-shopping-cart"></i>
            </div>
            <div class="list-content">
              <div class="list-title">銷售佣金</div>
              <div class="list-subtitle">透過內容促成商品銷售</div>
            </div>
            <div class="list-value" style="color: #10b981">+NT$ 680</div>
          </div>

          <div class="list-item" style="background: #f8fafc; border-radius: 12px; padding: 16px; margin: 0">
            <div class="list-icon" style="background: #f3e8ff; color: #8b5cf6">
              <i class="fas fa-users"></i>
            </div>
            <div class="list-content">
              <div class="list-title">邀請獎勵</div>
              <div class="list-subtitle">成功邀請好友加入</div>
            </div>
            <div class="list-value" style="color: #10b981">+NT$ 600</div>
          </div>
        </div>
      </div>

      <!-- 最近交易 -->
      <div class="card">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">最近交易</h3>
        <div style="display: grid; gap: 12px">
          <div class="list-item" style="background: #f8fafc; border-radius: 12px; padding: 16px; margin: 0">
            <div class="list-icon" style="background: #f0fdf4; color: #16a34a">
              <i class="fas fa-plus"></i>
            </div>
            <div class="list-content">
              <div class="list-title">內容創作獎勵</div>
              <div class="list-subtitle">2024-01-15 14:30</div>
            </div>
            <div class="list-value" style="color: #10b981">+NT$ 50</div>
          </div>

          <div class="list-item" style="background: #f8fafc; border-radius: 12px; padding: 16px; margin: 0">
            <div class="list-icon" style="background: #f0fdf4; color: #16a34a">
              <i class="fas fa-shopping-cart"></i>
            </div>
            <div class="list-content">
              <div class="list-title">銷售佣金</div>
              <div class="list-subtitle">2024-01-14 16:45</div>
            </div>
            <div class="list-value" style="color: #10b981">+NT$ 120</div>
          </div>

          <div class="list-item" style="background: #f8fafc; border-radius: 12px; padding: 16px; margin: 0">
            <div class="list-icon" style="background: #fef2f2; color: #dc2626">
              <i class="fas fa-download"></i>
            </div>
            <div class="list-content">
              <div class="list-title">提現到銀行</div>
              <div class="list-subtitle">2024-01-12 10:20</div>
            </div>
            <div class="list-value" style="color: #dc2626">-NT$ 500</div>
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
    <div class="tab-item active">
      <i class="fas fa-wallet tab-icon"></i>
      <span class="tab-label">錢包</span>
    </div>
    <div class="tab-item">
      <i class="fas fa-user tab-icon"></i>
      <span class="tab-label">我的</span>
    </div>
  </div>
</div>
`;
