// 頁面 04A: 商品彈跳視窗（Add to bag / Buy Now）
document.getElementById("page-04a").innerHTML = `
<div class="phone-container">
  <div class="status-bar">
    <div class="status-time">9:41</div>
    <div class="status-icons">
      <i class="fas fa-signal"></i>
      <i class="fas fa-wifi"></i>
      <i class="fas fa-battery-full"></i>
    </div>
  </div>

  <div class="page-content" style="bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: flex-end">
    <!-- 商品彈窗 -->
    <div style="background: white; border-radius: 32px 32px 0 0; width: 100%; max-height: 85vh; overflow-y: auto; animation: slideUp 0.3s ease">
      <!-- 關閉按鈕 -->
      <button class="btn-icon" style="position: absolute; top: 16px; right: 16px; background: rgba(0,0,0,0.05); z-index: 10" onclick="goToPage(4)">
        <i class="fas fa-times"></i>
      </button>

      <!-- 商品圖片 -->
      <div style="position: relative; width: 100%; aspect-ratio: 1; background: #f8fafc; overflow: hidden">
        <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=600&fit=crop" alt="Product" style="width: 100%; height: 100%; object-fit: cover">
        <!-- 品牌標誌（可點擊） -->
        <div style="position: absolute; top: 20px; left: 20px; background: white; padding: 8px 16px; border-radius: 20px; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); cursor: pointer" onclick="alert('前往品牌主頁'); goToPage(16)">
          <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=40&h=40&fit=crop" alt="Brand" style="width: 32px; height: 32px; border-radius: 8px; object-fit: cover">
          <span style="font-size: 14px; font-weight: 700; color: #1e293b">時尚潮牌 A</span>
          <i class="fas fa-arrow-right" style="font-size: 12px; color: #64748b"></i>
        </div>
        <!-- 收藏按鈕 -->
        <button class="btn-icon" style="position: absolute; top: 20px; right: 20px; background: white">
          <i class="far fa-heart" style="color: #ef4444"></i>
        </button>
      </div>

      <div style="padding: 24px">
        <!-- 商品資訊 -->
        <div style="margin-bottom: 24px">
          <h2 style="font-size: 24px; font-weight: 800; color: #1e293b; margin-bottom: 8px">經典款運動鞋</h2>
          <p style="font-size: 14px; color: #64748b; line-height: 1.6; margin-bottom: 16px">
            時尚與舒適的完美結合，採用透氣材質<br>適合日常穿搭，多種顏色可選
          </p>
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px">
            <div style="font-size: 32px; font-weight: 800; color: #6366f1">$2,980</div>
            <div style="font-size: 18px; color: #94a3b8; text-decoration: line-through">$3,980</div>
            <div style="background: #fee2e2; color: #dc2626; padding: 4px 12px; border-radius: 8px; font-size: 13px; font-weight: 700">省 $1,000</div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px">
            <div style="display: flex; color: #f59e0b">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <span style="font-size: 14px; color: #64748b">4.8 (2,341 評價)</span>
          </div>
        </div>

        <!-- 尺寸選擇 -->
        <div style="margin-bottom: 24px">
          <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 12px">選擇尺寸</div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap">
            <button style="padding: 12px 20px; border: 1.5px solid #e2e8f0; border-radius: 12px; background: white; font-weight: 600; color: #64748b; cursor: pointer; transition: all 0.3s" onclick="this.style.borderColor='#6366f1'; this.style.color='#6366f1'">US 7</button>
            <button style="padding: 12px 20px; border: 1.5px solid #e2e8f0; border-radius: 12px; background: white; font-weight: 600; color: #64748b; cursor: pointer; transition: all 0.3s" onclick="this.style.borderColor='#6366f1'; this.style.color='#6366f1'">US 8</button>
            <button style="padding: 12px 20px; border: 2px solid #6366f1; border-radius: 12px; background: #ede9fe; font-weight: 600; color: #6366f1; cursor: pointer">US 9</button>
            <button style="padding: 12px 20px; border: 1.5px solid #e2e8f0; border-radius: 12px; background: white; font-weight: 600; color: #64748b; cursor: pointer; transition: all 0.3s" onclick="this.style.borderColor='#6366f1'; this.style.color='#6366f1'">US 10</button>
            <button style="padding: 12px 20px; border: 1.5px solid #e2e8f0; border-radius: 12px; background: white; font-weight: 600; color: #64748b; cursor: pointer; transition: all 0.3s" onclick="this.style.borderColor='#6366f1'; this.style.color='#6366f1'">US 11</button>
          </div>
        </div>

        <!-- 數量選擇 -->
        <div style="margin-bottom: 24px">
          <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 12px">數量</div>
          <div style="display: inline-flex; align-items: center; border: 1.5px solid #e2e8f0; border-radius: 12px; overflow: hidden">
            <button style="padding: 12px 20px; background: white; border: none; font-size: 18px; font-weight: 700; color: #64748b; cursor: pointer" onclick="alert('減少數量')">-</button>
            <div style="padding: 12px 24px; font-size: 16px; font-weight: 700; color: #1e293b; border-left: 1.5px solid #e2e8f0; border-right: 1.5px solid #e2e8f0">1</div>
            <button style="padding: 12px 20px; background: white; border: none; font-size: 18px; font-weight: 700; color: #6366f1; cursor: pointer" onclick="alert('增加數量')">+</button>
          </div>
        </div>

        <!-- 商品詳情 -->
        <div style="margin-bottom: 24px">
          <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 12px">商品詳情</div>
          <div style="background: #f8fafc; border-radius: 12px; padding: 16px">
            <div style="font-size: 13px; color: #64748b; line-height: 1.8">
              • 材質：透氣網布 + 合成皮革<br>
              • 鞋底：橡膠耐磨大底<br>
              • 產地：越南<br>
              • 適合：休閒、運動、日常穿搭
            </div>
          </div>
        </div>

        <!-- 運送資訊 -->
        <div style="display: flex; gap: 12px; margin-bottom: 24px">
          <div style="flex: 1; background: #f8fafc; border-radius: 12px; padding: 12px; text-align: center">
            <i class="fas fa-shipping-fast" style="font-size: 20px; color: #6366f1; margin-bottom: 4px"></i>
            <div style="font-size: 12px; font-weight: 600; color: #64748b">免運費</div>
          </div>
          <div style="flex: 1; background: #f8fafc; border-radius: 12px; padding: 12px; text-align: center">
            <i class="fas fa-undo" style="font-size: 20px; color: #6366f1; margin-bottom: 4px"></i>
            <div style="font-size: 12px; font-weight: 600; color: #64748b">7天鑑賞期</div>
          </div>
          <div style="flex: 1; background: #f8fafc; border-radius: 12px; padding: 12px; text-align: center">
            <i class="fas fa-shield-alt" style="font-size: 20px; color: #6366f1; margin-bottom: 4px"></i>
            <div style="font-size: 12px; font-weight: 600; color: #64748b">品質保證</div>
          </div>
        </div>

        <!-- 購買按鈕 -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">
          <button class="btn" style="background: white; border: 2px solid #6366f1; color: #6366f1; font-weight: 700" onclick="alert('已加入購物車！首次購買需綁定信用卡，之後自動扣款')">
            <i class="fas fa-shopping-bag" style="margin-right: 8px"></i>
            加入購物車
          </button>
          <button class="btn btn-primary" style="font-weight: 700" onclick="alert('立即付款！')">
            <i class="fas fa-bolt" style="margin-right: 8px"></i>
            立即購買
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
</style>
`;
