// 頁面 09: 個人資料頁面
document.getElementById("page-09").innerHTML = `
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
      <div class="header-title">個人資料</div>
      <div class="header-subtitle">管理你的帳戶設定</div>
    </div>

    <div style="padding: 16px">
      <!-- 個人資訊卡片 -->
      <div class="card" style="margin-bottom: 20px">
        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px">
          <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop'" alt="Profile" style="width: 64px; height: 64px; border-radius: 32px; border: 3px solid #6366f1; object-fit: cover; background:#f1f5f9">
          <div style="flex: 1">
            <h2 style="font-size: 20px; font-weight: 800; color: #1e293b; margin-bottom: 4px">Emily Chen</h2>
            <p style="font-size: 14px; color: #64748b; margin-bottom: 8px">@emily_fashion</p>
            <div style="display: flex; gap: 8px">
              <span class="badge badge-primary">
                <i class="fas fa-crown" style="font-size: 10px"></i>
                大使 · 時尚潮牌 A
              </span>
            </div>
          </div>
          
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; text-align: center">
          <div>
            <div style="font-size: 20px; font-weight: 800; color: #1e293b">156</div>
            <div style="font-size: 12px; color: #64748b">作品</div>
          </div>
          <div>
            <div style="font-size: 20px; font-weight: 800; color: #1e293b">12.5k</div>
            <div style="font-size: 12px; color: #64748b">粉絲</div>
          </div>
          <div>
            <div style="font-size: 20px; font-weight: 800; color: #1e293b">2.3k</div>
            <div style="font-size: 12px; color: #64748b">獲讚</div>
          </div>
        </div>
      </div>

      <!-- 功能快捷入口 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 12px">功能快捷入口</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px">
          <div style="background: #ffffff; border: 1px solid #f1f5f9; border-radius: 12px; padding: 14px; text-align: center; cursor: pointer" onclick="goToPage(12)">
            <div style="width: 40px; height: 40px; margin: 0 auto 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: #fef3c7; color: #f59e0b">
              <i class="fas fa-shopping-cart"></i>
            </div>
            <div style="font-size: 12px; font-weight: 700; color: #334155">購物車</div>
          </div>
          <div style="background: #ffffff; border: 1px solid #f1f5f9; border-radius: 12px; padding: 14px; text-align: center; cursor: pointer" onclick="goToPage('09a')">
            <div style="width: 40px; height: 40px; margin: 0 auto 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: #dbeafe; color: #2563eb">
              <i class="fas fa-heart"></i>
            </div>
            <div style="font-size: 12px; font-weight: 700; color: #334155">我的關注</div>
          </div>
          <div style="background: #ffffff; border: 1px solid #f1f5f9; border-radius: 12px; padding: 14px; text-align: center; cursor: pointer" onclick="goToPage(13)">
            <div style="width: 40px; height: 40px; margin: 0 auto 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: #f3e8ff; color: #8b5cf6">
              <i class="fas fa-user-friends"></i>
            </div>
            <div style="font-size: 12px; font-weight: 700; color: #334155">邀請好友</div>
          </div>
          
          <div style="background: #ffffff; border: 1px solid #f1f5f9; border-radius: 12px; padding: 14px; text-align: center; cursor: pointer" onclick="document.getElementById('ambassador-modal').style.display='flex'">
            <div style="width: 40px; height: 40px; margin: 0 auto 8px; border-radius: 12px; display: flex; align-items: center; justify-content: center; background: #fef3c7; color: #f59e0b">
              <i class="fas fa-crown"></i>
            </div>
            <div style="font-size: 12px; font-weight: 700; color: #334155">大使功能</div>
          </div>
        </div>
      </div>

      <!-- 大使功能選擇模態框 -->
      <div id="ambassador-modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center" onclick="if(event.target === this) this.style.display='none'">
        <div style="background: white; border-radius: 24px; padding: 32px 24px; margin: 20px; max-width: 360px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.3)" onclick="event.stopPropagation()">
          <!-- 標題 -->
          <div style="text-align: center; margin-bottom: 24px">
            <div style="width: 64px; height: 64px; margin: 0 auto 16px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center">
              <i class="fas fa-crown" style="font-size: 32px; color: white"></i>
            </div>
            <h3 style="font-size: 22px; font-weight: 800; color: #1e293b; margin-bottom: 8px">大使功能</h3>
            <p style="font-size: 14px; color: #64748b">選擇你要使用的功能</p>
          </div>

          <!-- 功能選項 -->
          <div style="display: grid; gap: 12px; margin-bottom: 24px">
            <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: #f8fafc; border-radius: 16px; cursor: pointer; transition: all 0.3s" 
              onmouseover="this.style.background='#f1f5f9'; this.style.transform='translateX(4px)'" 
              onmouseout="this.style.background='#f8fafc'; this.style.transform='translateX(0)'"
              onclick="document.getElementById('ambassador-modal').style.display='none'; goToPage(11)">
              <div style="width: 48px; height: 48px; background: #f0fdf4; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
                <i class="fas fa-chart-line" style="font-size: 20px; color: #16a34a"></i>
              </div>
              <div style="flex: 1">
                <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 2px">數據分析</div>
                <div style="font-size: 12px; color: #64748b">查看作品表現與收益</div>
              </div>
              <i class="fas fa-chevron-right" style="color: #94a3b8"></i>
            </div>

            <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: #f8fafc; border-radius: 16px; cursor: pointer; transition: all 0.3s" 
              onmouseover="this.style.background='#f1f5f9'; this.style.transform='translateX(4px)'" 
              onmouseout="this.style.background='#f8fafc'; this.style.transform='translateX(0)'"
              onclick="document.getElementById('ambassador-modal').style.display='none'; goToPage(14)">
              <div style="width: 48px; height: 48px; background: #eff6ff; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
                <i class="fas fa-store" style="font-size: 20px; color: #3b82f6"></i>
              </div>
              <div style="flex: 1">
                <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 2px">品牌後台</div>
                <div style="font-size: 12px; color: #64748b">管理品牌相關設定</div>
              </div>
              <i class="fas fa-chevron-right" style="color: #94a3b8"></i>
            </div>

            <div style="display: flex; align-items: center; gap: 16px; padding: 16px; background: #f8fafc; border-radius: 16px; cursor: pointer; transition: all 0.3s" 
              onmouseover="this.style.background='#f1f5f9'; this.style.transform='translateX(4px)'" 
              onmouseout="this.style.background='#f8fafc'; this.style.transform='translateX(0)'"
              onclick="document.getElementById('ambassador-modal').style.display='none'; goToPage('10a')">
              <div style="width: 48px; height: 48px; background: #fef3c7; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0">
                <i class="fas fa-comments" style="font-size: 20px; color: #f59e0b"></i>
              </div>
              <div style="flex: 1">
                <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 2px">品牌聊天室</div>
                <div style="font-size: 12px; color: #64748b">與品牌團隊溝通</div>
              </div>
              <i class="fas fa-chevron-right" style="color: #94a3b8"></i>
            </div>
          </div>

          <!-- 取消按鈕 -->
          <button 
            style="width: 100%; padding: 14px; background: #f1f5f9; border: none; border-radius: 12px; color: #64748b; font-size: 15px; font-weight: 600; cursor: pointer"
            onclick="document.getElementById('ambassador-modal').style.display='none'"
          >
            取消
          </button>
        </div>
      </div>

      

      <!-- 設定（合併原「帳戶設定」與「其他」） -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">設定</h3>
        <div style="display: grid; gap: 12px">
          <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px">
            <div class="list-icon" style="background: #fef3c7; color: #f59e0b; flex-shrink: 0">
              <i class="fas fa-bell"></i>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px">
              <div class="list-title">粉絲影響購買通知</div>
              <div class="list-subtitle">當粉絲影響購買時，系統會悄悄通知大使。</div>
            </div>
            <input type="checkbox" aria-label="粉絲影響購買通知切換" checked onchange="console.log('粉絲影響購買通知', this.checked)" style="width: 18px; height: 18px; accent-color: #6366f1; cursor: pointer; flex-shrink: 0">
          </div>

          

          <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px; cursor: pointer" onclick="goToPage('09b')">
            <div class="list-icon" style="background: #fce7f3; color: #ec4899; flex-shrink: 0">
              <i class="fas fa-clipboard-list"></i>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px">
              <div class="list-title">用戶調查</div>
              <div class="list-subtitle">填寫問卷送購物金</div>
            </div>
            <i class="fas fa-chevron-right" style="color: #94a3b8; flex-shrink: 0"></i>
          </div>

          <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px; cursor: pointer" onclick="alert('語言設定')">
            <div class="list-icon" style="background: #f0fdf4; color: #16a34a; flex-shrink: 0">
              <i class="fas fa-language"></i>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px">
              <div class="list-title">語言設定</div>
              <div class="list-subtitle">繁體中文</div>
            </div>
            <i class="fas fa-chevron-right" style="color: #94a3b8; flex-shrink: 0"></i>
          </div>

          

          <div style="display: flex; align-items: center; gap: 12px; background: #f8fafc; border-radius: 12px; padding: 16px; cursor: pointer" onclick="alert('登出')">
            <div class="list-icon" style="background: #fef2f2; color: #dc2626; flex-shrink: 0">
              <i class="fas fa-sign-out-alt"></i>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; gap: 4px">
              <div class="list-title">登出</div>
              <div class="list-subtitle">安全退出帳戶</div>
            </div>
            <i class="fas fa-chevron-right" style="color: #94a3b8; flex-shrink: 0"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="tab-bar">
    <div class="tab-item" onclick="goToPage(4)">
      <i class="fas fa-home tab-icon"></i>
      <span class="tab-label">首頁</span>
    </div>
    <div class="tab-item" onclick="goToPage(6)">
      <i class="fas fa-compass tab-icon"></i>
      <span class="tab-label">探索</span>
    </div>
    <div class="tab-item" onclick="goToPage(7)">
      <i class="fas fa-plus-circle tab-icon"></i>
      <span class="tab-label">創作</span>
    </div>
    <div class="tab-item" onclick="goToPage(8)">
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
