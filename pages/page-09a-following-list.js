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
    <div class="header-bar">
      <button class="btn-icon" onclick="goToPage(9)">
        <i class="fas fa-arrow-left"></i>
      </button>
      <div class="header-title">我的關注</div>
      <div style="width: 40px"></div>
    </div>

    <div style="padding: 16px">
      <!-- 統計資訊 -->
      <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 20px; padding: 24px; margin-bottom: 24px; color: white">
        <div style="display: flex; justify-content: space-around; text-align: center">
          <div>
            <div style="font-size: 32px; font-weight: 800; margin-bottom: 4px">24</div>
            <div style="font-size: 13px; opacity: 0.9">關注的品牌</div>
          </div>
          <div style="width: 1px; background: rgba(255,255,255,0.3)"></div>
          <div>
            <div style="font-size: 32px; font-weight: 800; margin-bottom: 4px">18</div>
            <div style="font-size: 13px; opacity: 0.9">關注的大使</div>
          </div>
        </div>
      </div>

      <!-- 分類標籤 -->
      <div style="display: flex; gap: 12px; margin-bottom: 20px; overflow-x: auto; padding-bottom: 8px">
        <button style="padding: 8px 20px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; border: none; border-radius: 20px; font-weight: 600; white-space: nowrap; cursor: pointer">
          全部 (42)
        </button>
        <button style="padding: 8px 20px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; border-radius: 20px; font-weight: 600; white-space: nowrap; cursor: pointer">
          品牌 (24)
        </button>
        <button style="padding: 8px 20px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; border-radius: 20px; font-weight: 600; white-space: nowrap; cursor: pointer">
          大使 (18)
        </button>
      </div>

      <!-- 關注列表 -->
      <div style="display: grid; gap: 12px">
        <!-- 品牌項目 -->
        <div style="background: white; border-radius: 16px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 12px">
          <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&h=100&fit=crop" alt="Brand" style="width: 60px; height: 60px; border-radius: 12px; object-fit: cover">
          <div style="flex: 1">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px">
              <div style="font-size: 16px; font-weight: 700; color: #1e293b">時尚潮牌 A</div>
              <i class="fas fa-check-circle" style="color: #6366f1; font-size: 14px"></i>
            </div>
            <div style="font-size: 13px; color: #64748b; margin-bottom: 6px">856 位大使 • 12.5K 粉絲</div>
            <div style="display: flex; gap: 4px">
              <span style="background: #f1f5f9; color: #64748b; padding: 2px 8px; border-radius: 4px; font-size: 11px">時尚</span>
              <span style="background: #f1f5f9; color: #64748b; padding: 2px 8px; border-radius: 4px; font-size: 11px">運動</span>
            </div>
          </div>
          <button class="btn" style="background: #fee2e2; color: #dc2626; border: 1.5px solid #fca5a5; padding: 8px 16px; font-size: 13px; font-weight: 600" onclick="if(confirm('確定要取消關注嗎？')) { this.parentElement.style.display='none'; alert('已取消關注') }">
            取消關注
          </button>
        </div>

        <!-- 大使項目 -->
        <div style="background: white; border-radius: 16px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 12px">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="User" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover">
          <div style="flex: 1">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px">
              <div style="font-size: 16px; font-weight: 700; color: #1e293b">小美</div>
              <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700">
                <i class="fas fa-crown" style="margin-right: 2px"></i>大使 · 時尚潮牌 A
              </div>
            </div>
            <div style="font-size: 13px; color: #64748b; margin-bottom: 6px">時尚潮牌 A • 8,234 粉絲</div>
            <div style="font-size: 12px; color: #64748b">最近發布：經典款運動鞋開箱</div>
          </div>
          <button class="btn" style="background: #fee2e2; color: #dc2626; border: 1.5px solid #fca5a5; padding: 8px 16px; font-size: 13px; font-weight: 600" onclick="if(confirm('確定要取消關注嗎？')) { this.parentElement.style.display='none'; alert('已取消關注') }">
            取消關注
          </button>
        </div>

        <!-- 品牌項目 2 -->
        <div style="background: white; border-radius: 16px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 12px">
          <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop" alt="Brand" style="width: 60px; height: 60px; border-radius: 12px; object-fit: cover">
          <div style="flex: 1">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px">
              <div style="font-size: 16px; font-weight: 700; color: #1e293b">精品美妝 B</div>
              <i class="fas fa-check-circle" style="color: #6366f1; font-size: 14px"></i>
            </div>
            <div style="font-size: 13px; color: #64748b; margin-bottom: 6px">642 位大使 • 9.8K 粉絲</div>
            <div style="display: flex; gap: 4px">
              <span style="background: #f1f5f9; color: #64748b; padding: 2px 8px; border-radius: 4px; font-size: 11px">美妝</span>
              <span style="background: #f1f5f9; color: #64748b; padding: 2px 8px; border-radius: 4px; font-size: 11px">保養</span>
            </div>
          </div>
          <button class="btn" style="background: #fee2e2; color: #dc2626; border: 1.5px solid #fca5a5; padding: 8px 16px; font-size: 13px; font-weight: 600" onclick="if(confirm('確定要取消關注嗎？')) { this.parentElement.style.display='none'; alert('已取消關注') }">
            取消關注
          </button>
        </div>

        <!-- 大使項目 2 -->
        <div style="background: white; border-radius: 16px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 12px">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="User" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover">
          <div style="flex: 1">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px">
              <div style="font-size: 16px; font-weight: 700; color: #1e293b">阿傑</div>
              <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700">
                <i class="fas fa-crown" style="margin-right: 2px"></i>大使 · 科技品牌 D
              </div>
            </div>
            <div style="font-size: 13px; color: #64748b; margin-bottom: 6px">科技品牌 D • 6,521 粉絲</div>
            <div style="font-size: 12px; color: #64748b">最近發布：最新智慧手錶評測</div>
          </div>
          <button class="btn" style="background: #fee2e2; color: #dc2626; border: 1.5px solid #fca5a5; padding: 8px 16px; font-size: 13px; font-weight: 600" onclick="if(confirm('確定要取消關注嗎？')) { this.parentElement.style.display='none'; alert('已取消關注') }">
            取消關注
          </button>
        </div>

        <!-- 品牌項目 3 -->
        <div style="background: white; border-radius: 16px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); display: flex; align-items: center; gap: 12px">
          <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=100&h=100&fit=crop" alt="Brand" style="width: 60px; height: 60px; border-radius: 12px; object-fit: cover">
          <div style="flex: 1">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px">
              <div style="font-size: 16px; font-weight: 700; color: #1e293b">生活居家 C</div>
              <i class="fas fa-check-circle" style="color: #6366f1; font-size: 14px"></i>
            </div>
            <div style="font-size: 13px; color: #64748b; margin-bottom: 6px">423 位大使 • 7.2K 粉絲</div>
            <div style="display: flex; gap: 4px">
              <span style="background: #f1f5f9; color: #64748b; padding: 2px 8px; border-radius: 4px; font-size: 11px">居家</span>
              <span style="background: #f1f5f9; color: #64748b; padding: 2px 8px; border-radius: 4px; font-size: 11px">生活</span>
            </div>
          </div>
          <button class="btn" style="background: #fee2e2; color: #dc2626; border: 1.5px solid #fca5a5; padding: 8px 16px; font-size: 13px; font-weight: 600" onclick="if(confirm('確定要取消關注嗎？')) { this.parentElement.style.display='none'; alert('已取消關注') }">
            取消關注
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
