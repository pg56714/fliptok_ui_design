// 頁面 10A: 大使與品牌聊天室
document.getElementById("page-10a").innerHTML = `
<div class="phone-container">
  <div class="status-bar">
    <div class="status-time">9:41</div>
    <div class="status-icons">
      <i class="fas fa-signal"></i>
      <i class="fas fa-wifi"></i>
      <i class="fas fa-battery-full"></i>
    </div>
  </div>

  <div class="page-content" style="bottom: 0">
    <!-- 聊天室標頭 -->
    <div style="position: sticky; top: 0; background: white; border-bottom: 1.5px solid #e2e8f0; padding: 16px 20px; display: flex; align-items: center; gap: 12px; z-index: 10">
      <button class="btn-icon" onclick="goToPage(10)">
        <i class="fas fa-arrow-left"></i>
      </button>
      <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&h=100&fit=crop" alt="Brand" style="width: 44px; height: 44px; border-radius: 12px; object-fit: cover">
      <div style="flex: 1">
        <div style="font-size: 16px; font-weight: 700; color: #1e293b">時尚潮牌 A</div>
        <div style="font-size: 12px; color: #10b981">
          <i class="fas fa-circle" style="font-size: 8px; margin-right: 4px"></i>線上
        </div>
      </div>
      <button class="btn-icon">
        <i class="fas fa-ellipsis-v"></i>
      </button>
    </div>

    <!-- 聊天訊息區域 -->
    <div style="flex: 1; overflow-y: auto; padding: 20px; background: #f8fafc">
      <!-- 日期分隔 -->
      <div style="text-align: center; margin-bottom: 20px">
        <span style="background: rgba(0,0,0,0.05); color: #64748b; padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 600">今天</span>
      </div>

      <!-- 品牌訊息 -->
      <div style="display: flex; gap: 12px; margin-bottom: 20px">
        <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&h=100&fit=crop" alt="Brand" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0">
        <div style="flex: 1">
          <div style="background: white; border-radius: 4px 16px 16px 16px; padding: 12px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); max-width: 75%; display: inline-block">
            <div style="font-size: 14px; color: #1e293b; line-height: 1.5">
              你好！感謝你成為我們的品牌大使 👋
            </div>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 6px">上午 10:24</div>
        </div>
      </div>

      <div style="display: flex; gap: 12px; margin-bottom: 20px">
        <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&h=100&fit=crop" alt="Brand" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0">
        <div style="flex: 1">
          <div style="background: white; border-radius: 4px 16px 16px 16px; padding: 12px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); max-width: 75%; display: inline-block">
            <div style="font-size: 14px; color: #1e293b; line-height: 1.5">
              我們推出了新的秋季系列，請問你有興趣幫我們創作相關內容嗎？
            </div>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 6px">上午 10:25</div>
        </div>
      </div>

      <!-- 我的訊息 -->
      <div style="display: flex; justify-content: flex-end; margin-bottom: 20px">
        <div style="text-align: right; max-width: 75%">
          <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 16px 4px 16px 16px; padding: 12px 16px; display: inline-block; box-shadow: 0 2px 8px rgba(99,102,241,0.25)">
            <div style="font-size: 14px; color: white; line-height: 1.5">
              當然有興趣！可以給我更多細節嗎？
            </div>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 6px">上午 10:28</div>
        </div>
      </div>

      <!-- 品牌訊息 -->
      <div style="display: flex; gap: 12px; margin-bottom: 20px">
        <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&h=100&fit=crop" alt="Brand" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0">
        <div style="flex: 1">
          <div style="background: white; border-radius: 4px 16px 16px 16px; padding: 12px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); max-width: 75%; display: inline-block">
            <div style="font-size: 14px; color: #1e293b; line-height: 1.5">
              太好了！我們希望能製作 3-5 支短影片，主打舒適與時尚風格。每支影片預算 $2,000 🎥
            </div>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 6px">上午 10:30</div>
        </div>
      </div>

      <!-- 產品卡片訊息 -->
      <div style="display: flex; gap: 12px; margin-bottom: 20px">
        <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&h=100&fit=crop" alt="Brand" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0">
        <div style="flex: 1">
          <div style="background: white; border-radius: 4px 16px 16px 16px; padding: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); max-width: 75%; display: inline-block">
            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=300&fit=crop" alt="Product" style="width: 100%; border-radius: 8px; margin-bottom: 8px">
            <div style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">秋季新品系列</div>
            <div style="font-size: 13px; color: #64748b; line-height: 1.5">
              經典秋冬款式，共 12 款可選
            </div>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 6px">上午 10:31</div>
        </div>
      </div>

      <!-- 我的訊息 -->
      <div style="display: flex; justify-content: flex-end; margin-bottom: 20px">
        <div style="text-align: right; max-width: 75%">
          <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 16px 4px 16px 16px; padding: 12px 16px; display: inline-block; box-shadow: 0 2px 8px rgba(99,102,241,0.25)">
            <div style="font-size: 14px; color: white; line-height: 1.5">
              太棒了！我這週末就可以開始拍攝 📸
            </div>
          </div>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 6px">上午 10:35</div>
        </div>
      </div>

      <!-- 輸入中提示 -->
      <div style="display: flex; gap: 12px">
        <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&h=100&fit=crop" alt="Brand" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; flex-shrink: 0">
        <div style="background: white; border-radius: 4px 16px 16px 16px; padding: 12px 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06)">
          <div style="display: flex; gap: 4px">
            <div style="width: 8px; height: 8px; background: #cbd5e1; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out"></div>
            <div style="width: 8px; height: 8px; background: #cbd5e1; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out 0.2s"></div>
            <div style="width: 8px; height: 8px; background: #cbd5e1; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out 0.4s"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 輸入框 -->
    <div style="position: sticky; bottom: 0; background: white; border-top: 1.5px solid #e2e8f0; padding: 12px 16px">
      <div style="display: flex; align-items: center; gap: 12px">
        <button class="btn-icon">
          <i class="fas fa-plus"></i>
        </button>
        <input type="text" placeholder="輸入訊息..." style="flex: 1; background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 24px; padding: 12px 16px; font-size: 14px; outline: none">
        <button class="btn-icon" style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)">
          <i class="fas fa-paper-plane" style="color: white"></i>
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes bounce {
    0%, 60%, 100% { transform: translateY(0); }
    30% { transform: translateY(-8px); }
  }
</style>
`;
