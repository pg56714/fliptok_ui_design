// 頁面 10: 大使認證頁面
document.getElementById("page-10").innerHTML = `
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
      <div class="header-title">大使認證</div>
      <div class="header-subtitle">成為品牌大使</div>
    </div>

    <div style="padding: 16px">
      <!-- 認證狀態 -->
      <div class="card-gradient" style="margin-bottom: 20px">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px">
          <i class="fas fa-crown" style="font-size: 24px"></i>
          <div style="flex: 1">
            <div style="font-size: 18px; font-weight: 800; margin-bottom: 4px">金牌大使</div>
            <div style="font-size: 14px; opacity: 0.9">時尚潮牌 A</div>
          </div>
        </div>
        <div style="background: rgba(255,255,255,0.2); border-radius: 12px; padding: 16px; margin-bottom: 12px">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px">
            <span style="font-size: 14px; opacity: 0.9">認證狀態</span>
            <span style="font-size: 14px; font-weight: 700">已認證 ✓</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px">
            <span style="font-size: 14px; opacity: 0.9">認證日期</span>
            <span style="font-size: 14px; font-weight: 700">2024-01-01</span>
          </div>
          <div style="display: flex; justify-content: space-between">
            <span style="font-size: 14px; opacity: 0.9">大使等級</span>
            <span style="font-size: 14px; font-weight: 700">Level 3</span>
          </div>
        </div>
        <!-- 品牌聊天按鈕 -->
        <button class="btn" style="width: 100%; background: white; color: #f5576c; padding: 14px; font-size: 15px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 8px" onclick="goToPage('10a')">
          <i class="fas fa-comments"></i>
          <span>與品牌聊天</span>
        </button>
      </div>

      <!-- 大使等級 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">大使等級</h3>
        <div style="display: grid; gap: 12px">
          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f8fafc; border-radius: 12px">
            <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700">3</div>
            <div style="flex: 1">
              <div style="font-size: 14px; font-weight: 700; color: #1e293b">金牌大使</div>
              <div style="font-size: 12px; color: #64748b">目前等級</div>
            </div>
            <div style="text-align: right">
              <div style="font-size: 12px; color: #10b981; font-weight: 700">2,480 分</div>
              <div style="font-size: 10px; color: #64748b">累計積分</div>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f8fafc; border-radius: 12px; opacity: 0.6">
            <div style="width: 40px; height: 40px; background: #e2e8f0; border-radius: 20px; display: flex; align-items: center; justify-content: center; color: #94a3b8; font-weight: 700">4</div>
            <div style="flex: 1">
              <div style="font-size: 14px; font-weight: 700; color: #64748b">鑽石大使</div>
              <div style="font-size: 12px; color: #64748b">下一等級</div>
            </div>
            <div style="text-align: right">
              <div style="font-size: 12px; color: #6366f1; font-weight: 700">還需 520 分</div>
              <div style="font-size: 10px; color: #64748b">達到條件</div>
            </div>
          </div>
        </div>

        <!-- 進度條 -->
        <div style="margin-top: 16px">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px">
            <span style="font-size: 12px; color: #64748b">升級進度</span>
            <span style="font-size: 12px; color: #6366f1; font-weight: 700">83%</span>
          </div>
          <div style="height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden">
            <div style="width: 83%; height: 100%; background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%); border-radius: 4px"></div>
          </div>
        </div>
      </div>

      <!-- 大使權益 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">大使權益</h3>
        <div style="display: grid; gap: 12px">
          <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px">
            <div class="list-icon" style="background: #fef3c7; color: #f59e0b; flex-shrink: 0">
              <i class="fas fa-gift"></i>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px">
              <div class="list-title">專屬商品折扣</div>
              <div class="list-subtitle">享受 15% 專屬優惠</div>
              <span class="badge badge-success" style="align-self: flex-start; margin-top: 4px">已啟用</span>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px">
            <div class="list-icon" style="background: #e0f2fe; color: #0284c7; flex-shrink: 0">
              <i class="fas fa-star"></i>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px">
              <div class="list-title">優先體驗新產品</div>
              <div class="list-subtitle">搶先試用最新商品</div>
              <span class="badge badge-success" style="align-self: flex-start; margin-top: 4px">已啟用</span>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px">
            <div class="list-icon" style="background: #f3e8ff; color: #8b5cf6; flex-shrink: 0">
              <i class="fas fa-users"></i>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px">
              <div class="list-title">專屬社群</div>
              <div class="list-subtitle">加入大使專屬群組</div>
              <span class="badge badge-success" style="align-self: flex-start; margin-top: 4px">已啟用</span>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px">
            <div class="list-icon" style="background: #f0fdf4; color: #16a34a; flex-shrink: 0">
              <i class="fas fa-trophy"></i>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px">
              <div class="list-title">年度獎勵</div>
              <div class="list-subtitle">年度表現獎勵計畫</div>
              <span class="badge badge-success" style="align-self: flex-start; margin-top: 4px">已啟用</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 認證要求 -->
      <div class="card">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">認證要求</h3>
        <div style="display: grid; gap: 12px">
          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f0fdf4; border-radius: 12px">
            <i class="fas fa-check-circle" style="color: #16a34a; font-size: 20px"></i>
            <div style="flex: 1">
              <div style="font-size: 14px; font-weight: 700; color: #1e293b">完成品牌問卷</div>
              <div style="font-size: 12px; color: #64748b">了解品牌理念和價值</div>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f0fdf4; border-radius: 12px">
            <i class="fas fa-check-circle" style="color: #16a34a; font-size: 20px"></i>
            <div style="flex: 1">
              <div style="font-size: 14px; font-weight: 700; color: #1e293b">發布 3 篇優質內容</div>
              <div style="font-size: 12px; color: #64748b">展示對品牌的熱愛</div>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f0fdf4; border-radius: 12px">
            <i class="fas fa-check-circle" style="color: #16a34a; font-size: 20px"></i>
            <div style="flex: 1">
              <div style="font-size: 14px; font-weight: 700; color: #1e293b">獲得 100+ 讚數</div>
              <div style="font-size: 12px; color: #64748b">證明內容受歡迎程度</div>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #f0fdf4; border-radius: 12px">
            <i class="fas fa-check-circle" style="color: #16a34a; font-size: 20px"></i>
            <div style="flex: 1">
              <div style="font-size: 14px; font-weight: 700; color: #1e293b">完成身份驗證</div>
              <div style="font-size: 12px; color: #64748b">提供真實身份資訊</div>
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
