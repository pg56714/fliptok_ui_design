// 頁面 03: 興趣標籤頁面
document.getElementById("page-03").innerHTML = `
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
    <div style="padding: 20px">
      <div style="display: flex; gap: 8px; margin-bottom: 30px">
        <div style="flex: 1; height: 4px; background: #6366f1; border-radius: 2px"></div>
        <div style="flex: 1; height: 4px; background: #6366f1; border-radius: 2px"></div>
      </div>

      <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 8px">選擇你的興趣</h2>
      <p style="font-size: 14px; color: #64748b; margin-bottom: 24px">至少選擇 3 個標籤來客製化你的 Feed</p>

      <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px">
        <span style="padding: 12px 20px; background: #6366f1; color: white; border-radius: 24px; font-size: 14px; font-weight: 600; cursor: pointer; box-shadow: 0 2px 8px rgba(99,102,241,0.3)">
          <i class="fas fa-check" style="margin-right: 6px"></i>時尚穿搭
        </span>
        <span style="padding: 12px 20px; background: #6366f1; color: white; border-radius: 24px; font-size: 14px; font-weight: 600; cursor: pointer; box-shadow: 0 2px 8px rgba(99,102,241,0.3)">
          <i class="fas fa-check" style="margin-right: 6px"></i>美妝保養
        </span>
        <span style="padding: 12px 20px; background: #6366f1; color: white; border-radius: 24px; font-size: 14px; font-weight: 600; cursor: pointer; box-shadow: 0 2px 8px rgba(99,102,241,0.3)">
          <i class="fas fa-check" style="margin-right: 6px"></i>咖啡文化
        </span>
        <span style="padding: 12px 20px; background: #f1f5f9; color: #64748b; border-radius: 24px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
          瑜伽健身
        </span>
        <span style="padding: 12px 20px; background: #f1f5f9; color: #64748b; border-radius: 24px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
          旅遊探險
        </span>
        <span style="padding: 12px 20px; background: #f1f5f9; color: #64748b; border-radius: 24px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
          居家設計
        </span>
        <span style="padding: 12px 20px; background: #f1f5f9; color: #64748b; border-radius: 24px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
          美食烹飪
        </span>
        <span style="padding: 12px 20px; background: #f1f5f9; color: #64748b; border-radius: 24px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
          攝影藝術
        </span>
        <span style="padding: 12px 20px; background: #f1f5f9; color: #64748b; border-radius: 24px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
          科技數位
        </span>
        <span style="padding: 12px 20px; background: #f1f5f9; color: #64748b; border-radius: 24px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease" onmouseover="this.style.background='#e2e8f0'" onmouseout="this.style.background='#f1f5f9'">
          永續環保
        </span>
      </div>

      <div style="background: #f8fafc; border-radius: 12px; padding: 16px; margin-bottom: 24px; text-align: center">
        <div style="font-size: 14px; color: #64748b; margin-bottom: 8px">已選擇 <span style="font-size: 24px; font-weight: 800; color: #6366f1">3</span> 個標籤</div>
        <div style="height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden">
          <div style="width: 100%; height: 100%; background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%); border-radius: 3px"></div>
        </div>
      </div>

      <button class="btn btn-primary">
        完成設定 <i class="fas fa-check" style="margin-left: 8px"></i>
      </button>
    </div>
  </div>
</div>
`;
