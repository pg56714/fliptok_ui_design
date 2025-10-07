// 頁面 09c: 編輯個人資料
document.getElementById("page-09c").innerHTML = `
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
    <!-- 導航欄 -->
    <div class="header-bar" style="display: flex; align-items: center; gap: 12px; background: white; border-bottom: 1px solid #f1f5f9">
      <button onclick="goToPage(9)" style="background: none; border: none; padding: 0; cursor: pointer; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; color: #64748b">
        <i class="fas fa-arrow-left" style="font-size: 20px"></i>
      </button>
      <div style="flex: 1">
        <div style="font-size: 18px; font-weight: 700; color: #1e293b">編輯個人資料</div>
      </div>
      <button id="save-profile-btn" onclick="saveProfile()" style="background: none; border: none; padding: 8px 16px; cursor: pointer; color: #6366f1; font-size: 15px; font-weight: 600">
        儲存
      </button>
    </div>

    <div style="padding: 16px">
      <!-- 頭像編輯 -->
      <div style="text-align: center; margin-bottom: 32px; padding: 24px 0">
        <div style="position: relative; display: inline-block">
          <img id="profile-avatar" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&h=120&fit=crop'" alt="Profile" style="width: 100px; height: 100px; border-radius: 50px; border: 4px solid #6366f1; object-fit: cover; background:#f1f5f9">
          
          <!-- 編輯按鈕 -->
          <button onclick="document.getElementById('avatar-options').style.display='flex'" style="position: absolute; bottom: 0; right: 0; width: 36px; height: 36px; border-radius: 18px; background: #6366f1; border: 3px solid white; color: white; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 2px 8px rgba(99,102,241,0.3)">
            <i class="fas fa-camera" style="font-size: 14px"></i>
          </button>
        </div>
        <p style="font-size: 13px; color: #64748b; margin-top: 12px">點擊相機圖示更換頭像</p>
      </div>

      <!-- 頭像選擇模態框 -->
      <div id="avatar-options" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center" onclick="if(event.target === this) this.style.display='none'">
        <div style="background: white; border-radius: 24px; padding: 24px; margin: 20px; max-width: 360px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.3)" onclick="event.stopPropagation()">
          <h3 style="font-size: 20px; font-weight: 800; color: #1e293b; margin-bottom: 20px; text-align: center">更換頭像</h3>
          
          <!-- 頭像選項 -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px">
            <div onclick="changeAvatar('https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&h=120&fit=crop')" style="cursor: pointer; text-align: center">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop" style="width: 80px; height: 80px; border-radius: 40px; border: 3px solid #e2e8f0; object-fit: cover; transition: all 0.3s" onmouseover="this.style.borderColor='#6366f1'; this.style.transform='scale(1.05)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.transform='scale(1)'">
            </div>
            <div onclick="changeAvatar('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop')" style="cursor: pointer; text-align: center">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop" style="width: 80px; height: 80px; border-radius: 40px; border: 3px solid #e2e8f0; object-fit: cover; transition: all 0.3s" onmouseover="this.style.borderColor='#6366f1'; this.style.transform='scale(1.05)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.transform='scale(1)'">
            </div>
            <div onclick="changeAvatar('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop')" style="cursor: pointer; text-align: center">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop" style="width: 80px; height: 80px; border-radius: 40px; border: 3px solid #e2e8f0; object-fit: cover; transition: all 0.3s" onmouseover="this.style.borderColor='#6366f1'; this.style.transform='scale(1.05)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.transform='scale(1)'">
            </div>
            <div onclick="changeAvatar('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop')" style="cursor: pointer; text-align: center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop" style="width: 80px; height: 80px; border-radius: 40px; border: 3px solid #e2e8f0; object-fit: cover; transition: all 0.3s" onmouseover="this.style.borderColor='#6366f1'; this.style.transform='scale(1.05)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.transform='scale(1)'">
            </div>
            <div onclick="changeAvatar('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop')" style="cursor: pointer; text-align: center">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop" style="width: 80px; height: 80px; border-radius: 40px; border: 3px solid #e2e8f0; object-fit: cover; transition: all 0.3s" onmouseover="this.style.borderColor='#6366f1'; this.style.transform='scale(1.05)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.transform='scale(1)'">
            </div>
            <div onclick="changeAvatar('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&h=120&fit=crop')" style="cursor: pointer; text-align: center">
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&h=120&fit=crop" style="width: 80px; height: 80px; border-radius: 40px; border: 3px solid #e2e8f0; object-fit: cover; transition: all 0.3s" onmouseover="this.style.borderColor='#6366f1'; this.style.transform='scale(1.05)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.transform='scale(1)'">
            </div>
          </div>

          <!-- 上傳按鈕 -->
          <button onclick="alert('打開相機/相簿'); document.getElementById('avatar-options').style.display='none'" style="width: 100%; padding: 14px; background: #6366f1; color: white; border: none; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; margin-bottom: 12px">
            <i class="fas fa-upload"></i> 從裝置上傳
          </button>

          <!-- 取消按鈕 -->
          <button onclick="document.getElementById('avatar-options').style.display='none'" style="width: 100%; padding: 14px; background: #f1f5f9; color: #64748b; border: none; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer">
            取消
          </button>
        </div>
      </div>

      <!-- 編輯表單 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">基本資料</h3>
        
        <!-- 姓名 -->
        <div style="margin-bottom: 20px">
          <label style="display: block; font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 8px">姓名</label>
          <input 
            id="input-name"
            type="text" 
            value="Emily Chen"
            placeholder="請輸入姓名" 
            style="width: 100%; padding: 12px 16px; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s"
            onfocus="this.style.borderColor='#6366f1'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
            onblur="this.style.borderColor='#e2e8f0'; this.style.background='#f8fafc'; this.style.boxShadow='none'"
          >
        </div>

        <!-- 用戶名 -->
        <div style="margin-bottom: 20px">
          <label style="display: block; font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 8px">用戶名</label>
          <div style="position: relative">
            <span style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #94a3b8; font-size: 15px">@</span>
            <input 
              id="input-username"
              type="text" 
              value="emily_fashion"
              placeholder="請輸入用戶名" 
              style="width: 100%; padding: 12px 16px 12px 32px; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s"
              onfocus="this.style.borderColor='#6366f1'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
              onblur="this.style.borderColor='#e2e8f0'; this.style.background='#f8fafc'; this.style.boxShadow='none'"
            >
          </div>
        </div>

        <!-- 個人簡介 -->
        <div style="margin-bottom: 0">
          <label style="display: block; font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 8px">個人簡介</label>
          <textarea 
            id="input-bio"
            placeholder="介紹一下自己..." 
            style="width: 100%; padding: 12px 16px; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s; resize: vertical; min-height: 80px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            onfocus="this.style.borderColor='#6366f1'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
            onblur="this.style.borderColor='#e2e8f0'; this.style.background='#f8fafc'; this.style.boxShadow='none'"
          >時尚愛好者 💄 | 分享穿搭靈感 ✨</textarea>
        </div>
      </div>

      <!-- 聯絡資訊 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">聯絡資訊</h3>
        
        <!-- Email -->
        <div style="margin-bottom: 20px">
          <label style="display: block; font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 8px">電子郵件</label>
          <input 
            id="input-email"
            type="email" 
            value="emily.chen@example.com"
            placeholder="請輸入電子郵件" 
            style="width: 100%; padding: 12px 16px; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s"
            onfocus="this.style.borderColor='#6366f1'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
            onblur="this.style.borderColor='#e2e8f0'; this.style.background='#f8fafc'; this.style.boxShadow='none'"
          >
        </div>

        <!-- 手機 -->
        <div style="margin-bottom: 0">
          <label style="display: block; font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 8px">手機號碼</label>
          <input 
            id="input-phone"
            type="tel" 
            value="+886 912 345 678"
            placeholder="請輸入手機號碼" 
            style="width: 100%; padding: 12px 16px; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s"
            onfocus="this.style.borderColor='#6366f1'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
            onblur="this.style.borderColor='#e2e8f0'; this.style.background='#f8fafc'; this.style.boxShadow='none'"
          >
        </div>
      </div>

      <!-- 安全設定 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">安全設定</h3>
        
        <!-- 修改密碼按鈕 -->
        <div style="display: flex; align-items: center; justify-content: space-between; background: #f8fafc; border-radius: 12px; padding: 16px; cursor: pointer" onclick="document.getElementById('password-modal').style.display='flex'">
          <div style="display: flex; align-items: center; gap: 12px">
            <div style="width: 40px; height: 40px; background: #fef2f2; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #dc2626">
              <i class="fas fa-lock"></i>
            </div>
            <div>
              <div style="font-size: 14px; font-weight: 600; color: #1e293b">修改密碼</div>
              <div style="font-size: 12px; color: #64748b">定期更換密碼保護帳戶安全</div>
            </div>
          </div>
          <i class="fas fa-chevron-right" style="color: #94a3b8"></i>
        </div>
      </div>

      <!-- 修改密碼模態框 -->
      <div id="password-modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center" onclick="if(event.target === this) this.style.display='none'">
        <div style="background: white; border-radius: 24px; padding: 24px; margin: 20px; max-width: 360px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.3)" onclick="event.stopPropagation()">
          <h3 style="font-size: 20px; font-weight: 800; color: #1e293b; margin-bottom: 20px">修改密碼</h3>
          
          <!-- 當前密碼 -->
          <div style="margin-bottom: 16px">
            <label style="display: block; font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 8px">當前密碼</label>
            <input 
              id="input-current-password"
              type="password" 
              placeholder="請輸入當前密碼" 
              style="width: 100%; padding: 12px 16px; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s"
              onfocus="this.style.borderColor='#6366f1'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
              onblur="this.style.borderColor='#e2e8f0'; this.style.background='#f8fafc'; this.style.boxShadow='none'"
            >
          </div>

          <!-- 新密碼 -->
          <div style="margin-bottom: 16px">
            <label style="display: block; font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 8px">新密碼</label>
            <input 
              id="input-new-password"
              type="password" 
              placeholder="請輸入新密碼" 
              style="width: 100%; padding: 12px 16px; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s"
              onfocus="this.style.borderColor='#6366f1'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
              onblur="this.style.borderColor='#e2e8f0'; this.style.background='#f8fafc'; this.style.boxShadow='none'"
            >
          </div>

          <!-- 確認密碼 -->
          <div style="margin-bottom: 20px">
            <label style="display: block; font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 8px">確認新密碼</label>
            <input 
              id="input-confirm-password"
              type="password" 
              placeholder="請再次輸入新密碼" 
              style="width: 100%; padding: 12px 16px; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 15px; color: #1e293b; outline: none; transition: all 0.3s"
              onfocus="this.style.borderColor='#6366f1'; this.style.background='white'; this.style.boxShadow='0 0 0 3px rgba(99,102,241,0.1)'"
              onblur="this.style.borderColor='#e2e8f0'; this.style.background='#f8fafc'; this.style.boxShadow='none'"
            >
          </div>

          <!-- 密碼要求提示 -->
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 12px; margin-bottom: 20px">
            <div style="font-size: 12px; color: #166534; line-height: 1.6">
              <div style="font-weight: 600; margin-bottom: 6px">密碼要求：</div>
              <div>• 至少 8 個字元</div>
              <div>• 包含大小寫字母</div>
              <div>• 至少一個數字</div>
            </div>
          </div>

          <!-- 按鈕 -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">
            <button onclick="document.getElementById('password-modal').style.display='none'" style="padding: 14px; background: #f1f5f9; color: #64748b; border: none; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer">
              取消
            </button>
            <button onclick="changePassword()" style="padding: 14px; background: #6366f1; color: white; border: none; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer">
              確認修改
            </button>
          </div>
        </div>
      </div>

      <!-- 危險區域 -->
      <div class="card" style="margin-bottom: 80px; border: 1.5px solid #fee2e2">
        <h3 style="font-size: 16px; font-weight: 700; color: #dc2626; margin-bottom: 16px">
          <i class="fas fa-exclamation-triangle"></i> 危險區域
        </h3>
        
        <button onclick="if(confirm('確定要停用帳戶嗎？此操作可以恢復。')) alert('帳戶已停用')" style="width: 100%; padding: 14px; background: white; color: #dc2626; border: 1.5px solid #dc2626; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; margin-bottom: 12px">
          停用帳戶
        </button>

        <button onclick="if(confirm('確定要刪除帳戶嗎？此操作無法復原！')) alert('帳戶已刪除')" style="width: 100%; padding: 14px; background: #dc2626; color: white; border: none; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer">
          永久刪除帳戶
        </button>
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
    <div class="tab-item active">
      <i class="fas fa-user tab-icon"></i>
      <span class="tab-label">我的</span>
    </div>
  </div>
</div>

<script>
// 更換頭像
function changeAvatar(imageUrl) {
  document.getElementById('profile-avatar').src = imageUrl;
  document.getElementById('avatar-options').style.display = 'none';
  
  // 顯示成功提示
  showToast('頭像已更新');
}

// 修改密碼
function changePassword() {
  const currentPassword = document.getElementById('input-current-password').value;
  const newPassword = document.getElementById('input-new-password').value;
  const confirmPassword = document.getElementById('input-confirm-password').value;
  
  if (!currentPassword || !newPassword || !confirmPassword) {
    alert('請填寫所有欄位');
    return;
  }
  
  if (newPassword !== confirmPassword) {
    alert('新密碼與確認密碼不符');
    return;
  }
  
  if (newPassword.length < 8) {
    alert('密碼長度至少需要 8 個字元');
    return;
  }
  
  // 這裡應該呼叫 API
  document.getElementById('password-modal').style.display = 'none';
  showToast('密碼已成功修改');
  
  // 清空欄位
  document.getElementById('input-current-password').value = '';
  document.getElementById('input-new-password').value = '';
  document.getElementById('input-confirm-password').value = '';
}

// 儲存個人資料
function saveProfile() {
  const name = document.getElementById('input-name').value;
  const username = document.getElementById('input-username').value;
  const bio = document.getElementById('input-bio').value;
  const email = document.getElementById('input-email').value;
  const phone = document.getElementById('input-phone').value;
  
  if (!name || !username || !email) {
    alert('請填寫必要欄位');
    return;
  }
  
  // 這裡應該呼叫 API 儲存資料
  console.log('儲存資料：', { name, username, bio, email, phone });
  
  // 顯示成功訊息
  showToast('個人資料已儲存');
  
  // 延遲返回個人資料頁
  setTimeout(() => {
    goToPage(9);
  }, 1000);
}

// 顯示提示訊息
function showToast(message) {
  // 創建提示元素
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = \`
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: #1e293b;
    color: white;
    padding: 12px 24px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: slideDown 0.3s ease-out;
  \`;
  
  document.body.appendChild(toast);
  
  // 3秒後移除
  setTimeout(() => {
    toast.style.animation = 'slideUp 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// 添加動畫樣式
if (!document.getElementById('toast-animations')) {
  const style = document.createElement('style');
  style.id = 'toast-animations';
  style.textContent = \`
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateX(-50%) translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    }
    @keyframes slideUp {
      from {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
      to {
        opacity: 0;
        transform: translateX(-50%) translateY(-20px);
      }
    }
  \`;
  document.head.appendChild(style);
}
</script>
`;
