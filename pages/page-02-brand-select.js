// 頁面 02: 品牌選擇頁面
document.getElementById("page-02").innerHTML = `
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
        <div style="flex: 1; height: 4px; background: #e2e8f0; border-radius: 2px"></div>
      </div>

      <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 8px">選擇你最愛的品牌</h2>
      <p style="font-size: 14px; color: #64748b; margin-bottom: 24px">我們會根據你的選擇推薦相關內容</p>

      <div style="position: relative; margin-bottom: 24px">
        <input type="text" class="form-input" placeholder="搜尋品牌名稱..." style="padding-left: 44px">
        <i class="fas fa-search" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #94a3b8"></i>
      </div>

      <div style="font-size: 14px; font-weight: 700; color: #64748b; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px">熱門品牌</div>
      
      <div style="display: grid; gap: 12px">
        <div style="background: white; border: 2px solid #6366f1; border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 12px; box-shadow: 0 4px 12px rgba(99,102,241,0.15)">
          <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&h=100&fit=crop" alt="Brand" style="width: 56px; height: 56px; border-radius: 12px; object-fit: cover; box-shadow: 0 2px 8px rgba(0,0,0,0.1)">
          <div style="flex: 1">
            <div style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 2px">時尚潮牌 A</div>
            <div style="font-size: 12px; color: #64748b">856 位大使</div>
          </div>
          <i class="fas fa-check-circle" style="font-size: 28px; color: #6366f1"></i>
        </div>

        <div style="background: white; border: 1.5px solid #e2e8f0; border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 12px; transition: all 0.3s ease; cursor: pointer" onmouseover="this.style.borderColor='#6366f1'; this.style.boxShadow='0 2px 8px rgba(99,102,241,0.1)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
          <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop" alt="Brand" style="width: 56px; height: 56px; border-radius: 12px; object-fit: cover">
          <div style="flex: 1">
            <div style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 2px">精品美妝 B</div>
            <div style="font-size: 12px; color: #64748b">642 位大使</div>
          </div>
        </div>

        <div style="background: white; border: 1.5px solid #e2e8f0; border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 12px; transition: all 0.3s ease; cursor: pointer" onmouseover="this.style.borderColor='#6366f1'; this.style.boxShadow='0 2px 8px rgba(99,102,241,0.1)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
          <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=100&h=100&fit=crop" alt="Brand" style="width: 56px; height: 56px; border-radius: 12px; object-fit: cover">
          <div style="flex: 1">
            <div style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 2px">生活居家 C</div>
            <div style="font-size: 12px; color: #64748b">423 位大使</div>
          </div>
        </div>

        <div style="background: white; border: 1.5px solid #e2e8f0; border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 12px; transition: all 0.3s ease; cursor: pointer" onmouseover="this.style.borderColor='#6366f1'; this.style.boxShadow='0 2px 8px rgba(99,102,241,0.1)'" onmouseout="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none'">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" alt="Brand" style="width: 56px; height: 56px; border-radius: 12px; object-fit: cover">
          <div style="flex: 1">
            <div style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 2px">科技品牌 D</div>
            <div style="font-size: 12px; color: #64748b">328 位大使</div>
          </div>
        </div>
      </div>

      <button class="btn btn-primary" style="margin-top: 24px">
        繼續並解鎖完整功能 <i class="fas fa-arrow-right" style="margin-left: 8px"></i>
      </button>

      <div style="text-align: center; margin-top: 16px">
        <button style="background: none; border: none; color: #64748b; font-size: 14px; text-decoration: underline; cursor: pointer" onclick="alert('略過品牌選擇，進入首頁'); goToPage(4)">
          暫時略過，直接進入
        </button>
      </div>
    </div>
  </div>
</div>
`;
