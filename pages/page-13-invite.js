// 頁面 13: 邀請好友頁面
document.getElementById("page-13").innerHTML = `
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
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">邀請好友</h2>
      </div>
      <!-- 邀請獎勵 -->
      <div class="card-gradient" style="margin-bottom: 20px">
        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px">
          <i class="fas fa-gift" style="font-size: 32px"></i>
          <div>
            <div style="font-size: 20px; font-weight: 800; margin-bottom: 4px">邀請獎勵</div>
            <div style="font-size: 14px; opacity: 0.9">每成功邀請一位好友獲得 NT$ 50</div>
          </div>
        </div>
        <div style="background: rgba(255,255,255,0.2); border-radius: 12px; padding: 16px">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px">
            <span style="font-size: 14px; opacity: 0.9">已邀請好友</span>
            <span style="font-size: 18px; font-weight: 800">12 位</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px">
            <span style="font-size: 14px; opacity: 0.9">累計獎勵</span>
            <span style="font-size: 18px; font-weight: 800">NT$ 600</span>
          </div>
          <div style="display: flex; justify-content: space-between">
            <span style="font-size: 14px; opacity: 0.9">本月邀請</span>
            <span style="font-size: 18px; font-weight: 800">3 位</span>
          </div>
        </div>
      </div>

      <!-- 邀請連結 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">我的邀請連結</h3>
        <div style="background: #f8fafc; border-radius: 12px; padding: 16px; margin-bottom: 12px">
          <div style="font-size: 12px; color: #64748b; margin-bottom: 8px">邀請連結</div>
          <div style="font-size: 14px; color: #1e293b; font-family: monospace; word-break: break-all; margin-bottom: 12px">
            https://fliptok.app/invite/emily_fashion_abc123
          </div>
          <button style="background: #6366f1; color: white; border: none; padding: 8px 16px; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer" onclick="alert('已複製連結')">
            <i class="fas fa-copy" style="margin-right: 6px"></i>複製連結
          </button>
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px">
          <button style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 12px; font-size: 13px; font-weight: 600; color: #1e293b; cursor: pointer" onclick="alert('分享到 Line')">
            <i class="fab fa-line" style="margin-right: 6px; color: #00c300"></i>Line
          </button>
          <button style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 12px; font-size: 13px; font-weight: 600; color: #1e293b; cursor: pointer" onclick="alert('分享到 Facebook')">
            <i class="fab fa-facebook" style="margin-right: 6px; color: #1877f2"></i>Facebook
          </button>
        </div>
      </div>

      <!-- 邀請記錄 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">邀請記錄</h3>
        <div style="display: grid; gap: 12px">
          <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" alt="User" style="width: 48px; height: 48px; border-radius: 24px; flex-shrink: 0">
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b">Alex Chen</div>
              <div style="font-size: 13px; color: #64748b">@alex_lifestyle</div>
              <div style="font-size: 12px; color: #10b981">已加入 • 2024-01-15</div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-end; justify-content: center; gap: 4px; flex-shrink: 0">
              <div style="font-size: 16px; font-weight: 700; color: #10b981">+NT$ 50</div>
              <div style="padding: 2px 8px; background: #d1fae5; color: #059669; border-radius: 12px; font-size: 10px; font-weight: 600">獎勵已發放</div>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop" alt="User" style="width: 48px; height: 48px; border-radius: 24px; flex-shrink: 0">
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b">Sarah Wang</div>
              <div style="font-size: 13px; color: #64748b">@sarah_beauty</div>
              <div style="font-size: 12px; color: #10b981">已加入 • 2024-01-12</div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-end; justify-content: center; gap: 4px; flex-shrink: 0">
              <div style="font-size: 16px; font-weight: 700; color: #10b981">+NT$ 50</div>
              <div style="padding: 2px 8px; background: #d1fae5; color: #059669; border-radius: 12px; font-size: 10px; font-weight: 600">獎勵已發放</div>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop" alt="User" style="width: 48px; height: 48px; border-radius: 24px; flex-shrink: 0">
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b">Mike Liu</div>
              <div style="font-size: 13px; color: #64748b">@mike_tech</div>
              <div style="font-size: 12px; color: #f59e0b">待加入 • 2024-01-10</div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-end; justify-content: center; gap: 4px; flex-shrink: 0">
              <div style="font-size: 16px; font-weight: 700; color: #94a3b8">待發放</div>
              <div style="padding: 2px 8px; background: #fef3c7; color: #d97706; border-radius: 12px; font-size: 10px; font-weight: 600">等待註冊</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 邀請規則 -->
      <div class="card">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">邀請規則</h3>
        <div style="display: grid; gap: 12px">
          <div style="display: flex; gap: 12px; padding: 12px; background: #f8fafc; border-radius: 12px">
            <div style="width: 24px; height: 24px; background: #e0f2fe; color: #0284c7; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0">1</div>
            <div>
              <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 2px">分享邀請連結</div>
              <div style="font-size: 12px; color: #64748b">複製你的專屬邀請連結分享給朋友</div>
            </div>
          </div>

          <div style="display: flex; gap: 12px; padding: 12px; background: #f8fafc; border-radius: 12px">
            <div style="width: 24px; height: 24px; background: #e0f2fe; color: #0284c7; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0">2</div>
            <div>
              <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 2px">好友完成註冊</div>
              <div style="font-size: 12px; color: #64748b">朋友透過你的連結註冊並完成認證</div>
            </div>
          </div>

          <div style="display: flex; gap: 12px; padding: 12px; background: #f8fafc; border-radius: 12px">
            <div style="width: 24px; height: 24px; background: #e0f2fe; color: #0284c7; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0">3</div>
            <div>
              <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 2px">獲得獎勵</div>
              <div style="font-size: 12px; color: #64748b">好友成功加入後，你將獲得 NT$ 50 獎勵</div>
            </div>
          </div>
        </div>

        <div style="background: #fef3c7; border: 1px solid #fbbf24; border-radius: 12px; padding: 12px; margin-top: 16px">
          <div style="display: flex; gap: 8px">
            <i class="fas fa-info-circle" style="color: #f59e0b; font-size: 16px; flex-shrink: 0"></i>
            <div>
              <div style="font-size: 12px; font-weight: 700; color: #78350f; margin-bottom: 2px">注意事項</div>
              <div style="font-size: 11px; color: #92400e; line-height: 1.4">
                獎勵將在好友完成首次內容發布後發放，每人最多可邀請 50 位好友。
              </div>
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
    <div class="tab-item active">
      <i class="fas fa-user tab-icon"></i>
      <span class="tab-label">我的</span>
    </div>
  </div>
</div>
`;
