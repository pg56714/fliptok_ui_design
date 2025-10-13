// 頁面 09A: 關注名單（附取消關注功能）
document.getElementById("page-09a").innerHTML = `
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
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">我的關注</h2>
      </div>
      <!-- 統計資訊 -->
      <div style="background: #f8fafc; border-radius: 12px; padding: 16px; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between">
        <div>
          <div style="font-size: 13px; color: #64748b; margin-bottom: 4px">關注的大使</div>
          <div style="font-size: 24px; font-weight: 800; color: #1e293b">18 位</div>
        </div>
        <i class="fas fa-users" style="font-size: 32px; color: #e0e7ff"></i>
      </div>

      <!-- 大使列表 -->
      <div style="display: grid; gap: 12px">
        <!-- 大使項目 1 -->
        <div style="background: #f8fafc; border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 12px">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="User" style="width: 56px; height: 56px; border-radius: 50%; object-fit: cover; flex-shrink: 0">
          <div style="flex: 1; min-width: 0">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b">@emily_fashion</div>
              <div style="background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); color: white; padding: 2px 6px; border-radius: 8px; font-size: 9px; font-weight: 700; white-space: nowrap">
                <i class="fas fa-crown" style="margin-right: 2px"></i>金牌大使
              </div>
            </div>
            <div style="font-size: 12px; color: #64748b; margin-bottom: 4px">時尚潮牌 A • 12.5K 粉絲</div>
            <div style="font-size: 11px; color: #94a3b8; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">最近發布：秋冬穿搭靈感分享</div>
          </div>
          <button style="background: white; color: #64748b; border: 1.5px solid #e2e8f0; padding: 8px 16px; border-radius: 12px; font-size: 12px; font-weight: 600; cursor: pointer; flex-shrink: 0; white-space: nowrap" onclick="if(confirm('確定要取消關注嗎？')) { this.innerText='已取消'; this.style.background='#fee2e2'; this.style.color='#dc2626'; this.style.borderColor='#fca5a5'; this.disabled=true; }">
            追蹤中
          </button>
        </div>

        <!-- 大使項目 2 -->
        <div style="background: #f8fafc; border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 12px">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop" alt="User" style="width: 56px; height: 56px; border-radius: 50%; object-fit: cover; flex-shrink: 0">
          <div style="flex: 1; min-width: 0">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b">@sarah_beauty</div>
              <div style="background: linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%); color: white; padding: 2px 6px; border-radius: 8px; font-size: 9px; font-weight: 700; white-space: nowrap">
                <i class="fas fa-crown" style="margin-right: 2px"></i>銀牌大使
              </div>
            </div>
            <div style="font-size: 12px; color: #64748b; margin-bottom: 4px">精品美妝 B • 8.2K 粉絲</div>
            <div style="font-size: 11px; color: #94a3b8; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">最近發布：5分鐘快速妝容教學</div>
          </div>
          <button style="background: white; color: #64748b; border: 1.5px solid #e2e8f0; padding: 8px 16px; border-radius: 12px; font-size: 12px; font-weight: 600; cursor: pointer; flex-shrink: 0; white-space: nowrap" onclick="if(confirm('確定要取消關注嗎？')) { this.innerText='已取消'; this.style.background='#fee2e2'; this.style.color='#dc2626'; this.style.borderColor='#fca5a5'; this.disabled=true; }">
            追蹤中
          </button>
        </div>

        <!-- 大使項目 3 -->
        <div style="background: #f8fafc; border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 12px">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="User" style="width: 56px; height: 56px; border-radius: 50%; object-fit: cover; flex-shrink: 0">
          <div style="flex: 1; min-width: 0">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b">@alex_lifestyle</div>
              <div style="background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); color: white; padding: 2px 6px; border-radius: 8px; font-size: 9px; font-weight: 700; white-space: nowrap">
                <i class="fas fa-crown" style="margin-right: 2px"></i>金牌大使
              </div>
            </div>
            <div style="font-size: 12px; color: #64748b; margin-bottom: 4px">生活居家 C • 15.3K 粉絲</div>
            <div style="font-size: 11px; color: #94a3b8; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">最近發布：居家收納整理技巧</div>
          </div>
          <button style="background: white; color: #64748b; border: 1.5px solid #e2e8f0; padding: 8px 16px; border-radius: 12px; font-size: 12px; font-weight: 600; cursor: pointer; flex-shrink: 0; white-space: nowrap" onclick="if(confirm('確定要取消關注嗎？')) { this.innerText='已取消'; this.style.background='#fee2e2'; this.style.color='#dc2626'; this.style.borderColor='#fca5a5'; this.disabled=true; }">
            追蹤中
          </button>
        </div>

        <!-- 大使項目 4 -->
        <div style="background: #f8fafc; border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 12px">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop" alt="User" style="width: 56px; height: 56px; border-radius: 50%; object-fit: cover; flex-shrink: 0">
          <div style="flex: 1; min-width: 0">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b">@mike_tech</div>
              <div style="background: linear-gradient(135deg, #d1d5db 0%, #9ca3af 100%); color: white; padding: 2px 6px; border-radius: 8px; font-size: 9px; font-weight: 700; white-space: nowrap">
                <i class="fas fa-crown" style="margin-right: 2px"></i>銀牌大使
              </div>
            </div>
            <div style="font-size: 12px; color: #64748b; margin-bottom: 4px">科技品牌 D • 6.5K 粉絲</div>
            <div style="font-size: 11px; color: #94a3b8; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">最近發布：最新智慧手錶評測</div>
          </div>
          <button style="background: white; color: #64748b; border: 1.5px solid #e2e8f0; padding: 8px 16px; border-radius: 12px; font-size: 12px; font-weight: 600; cursor: pointer; flex-shrink: 0; white-space: nowrap" onclick="if(confirm('確定要取消關注嗎？')) { this.innerText='已取消'; this.style.background='#fee2e2'; this.style.color='#dc2626'; this.style.borderColor='#fca5a5'; this.disabled=true; }">
            追蹤中
          </button>
        </div>

        <!-- 大使項目 5 -->
        <div style="background: #f8fafc; border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 12px">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop" alt="User" style="width: 56px; height: 56px; border-radius: 50%; object-fit: cover; flex-shrink: 0">
          <div style="flex: 1; min-width: 0">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px">
              <div style="font-size: 15px; font-weight: 700; color: #1e293b">@lisa_fitness</div>
              <div style="background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); color: white; padding: 2px 6px; border-radius: 8px; font-size: 9px; font-weight: 700; white-space: nowrap">
                <i class="fas fa-crown" style="margin-right: 2px"></i>金牌大使
              </div>
            </div>
            <div style="font-size: 12px; color: #64748b; margin-bottom: 4px">運動品牌 E • 9.8K 粉絲</div>
            <div style="font-size: 11px; color: #94a3b8; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">最近發布：居家運動器材推薦</div>
          </div>
          <button style="background: white; color: #64748b; border: 1.5px solid #e2e8f0; padding: 8px 16px; border-radius: 12px; font-size: 12px; font-weight: 600; cursor: pointer; flex-shrink: 0; white-space: nowrap" onclick="if(confirm('確定要取消關注嗎？')) { this.innerText='已取消'; this.style.background='#fee2e2'; this.style.color='#dc2626'; this.style.borderColor='#fca5a5'; this.disabled=true; }">
            追蹤中
          </button>
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
