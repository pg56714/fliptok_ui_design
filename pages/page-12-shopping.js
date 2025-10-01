// 頁面 12: 購物車頁面
document.getElementById("page-12").innerHTML = `
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
      <div class="header-title">購物車</div>
      <div class="header-subtitle">3 件商品</div>
    </div>

    <div style="padding: 16px">
      <!-- 購物車商品 -->
      <div style="display: grid; gap: 16px; margin-bottom: 20px">
        <div class="card" style="padding: 0; overflow: hidden">
          <div style="display: flex; gap: 12px; padding: 16px">
            <div style="position: relative">
              <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&h=100&fit=crop" alt="Product" style="width: 80px; height: 80px; border-radius: 12px; object-fit: cover">
              <div style="position: absolute; top: -4px; right: -4px; width: 20px; height: 20px; background: #6366f1; border-radius: 10px; display: flex; align-items: center; justify-content: center">
                <input type="checkbox" checked style="width: 12px; height: 12px; accent-color: white">
              </div>
            </div>
            <div style="flex: 1">
              <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 4px">經典風衣外套</h3>
              <p style="font-size: 13px; color: #64748b; margin-bottom: 8px">時尚潮牌 A</p>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <div style="font-size: 18px; font-weight: 800; color: #6366f1">NT$ 3,280</div>
                <div style="display: flex; align-items: center; gap: 12px">
                  <button style="width: 32px; height: 32px; background: #f1f5f9; border: none; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: #64748b">-</button>
                  <span style="font-size: 16px; font-weight: 700; color: #1e293b">1</span>
                  <button style="width: 32px; height: 32px; background: #f1f5f9; border: none; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: #64748b">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card" style="padding: 0; overflow: hidden">
          <div style="display: flex; gap: 12px; padding: 16px">
            <div style="position: relative">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop" alt="Product" style="width: 80px; height: 80px; border-radius: 12px; object-fit: cover">
              <div style="position: absolute; top: -4px; right: -4px; width: 20px; height: 20px; background: #6366f1; border-radius: 10px; display: flex; align-items: center; justify-content: center">
                <input type="checkbox" checked style="width: 12px; height: 12px; accent-color: white">
              </div>
            </div>
            <div style="flex: 1">
              <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 4px">完美底妝組</h3>
              <p style="font-size: 13px; color: #64748b; margin-bottom: 8px">精品美妝 B</p>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <div style="font-size: 18px; font-weight: 800; color: #6366f1">NT$ 1,680</div>
                <div style="display: flex; align-items: center; gap: 12px">
                  <button style="width: 32px; height: 32px; background: #f1f5f9; border: none; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: #64748b">-</button>
                  <span style="font-size: 16px; font-weight: 700; color: #1e293b">2</span>
                  <button style="width: 32px; height: 32px; background: #f1f5f9; border: none; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: #64748b">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card" style="padding: 0; overflow: hidden">
          <div style="display: flex; gap: 12px; padding: 16px">
            <div style="position: relative">
              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=100&h=100&fit=crop" alt="Product" style="width: 80px; height: 80px; border-radius: 12px; object-fit: cover">
              <div style="position: absolute; top: -4px; right: -4px; width: 20px; height: 20px; background: #e2e8f0; border-radius: 10px; display: flex; align-items: center; justify-content: center">
                <input type="checkbox" style="width: 12px; height: 12px; accent-color: white">
              </div>
            </div>
            <div style="flex: 1">
              <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 4px">居家香氛蠟燭</h3>
              <p style="font-size: 13px; color: #64748b; margin-bottom: 8px">生活居家 C</p>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <div style="font-size: 18px; font-weight: 800; color: #6366f1">NT$ 890</div>
                <div style="display: flex; align-items: center; gap: 12px">
                  <button style="width: 32px; height: 32px; background: #f1f5f9; border: none; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: #64748b">-</button>
                  <span style="font-size: 16px; font-weight: 700; color: #1e293b">1</span>
                  <button style="width: 32px; height: 32px; background: #f1f5f9; border: none; border-radius: 16px; display: flex; align-items: center; justify-content: center; color: #64748b">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 優惠券 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 12px">優惠券</h3>
        <div style="display: flex; gap: 12px">
          <div style="flex: 1; padding: 12px; background: #fef3c7; border: 1px solid #fbbf24; border-radius: 12px; cursor: pointer" onclick="alert('使用優惠券')">
            <div style="font-size: 14px; font-weight: 700; color: #78350f; margin-bottom: 2px">大使專屬優惠</div>
            <div style="font-size: 12px; color: #92400e">滿 NT$ 3,000 享 15% 折扣</div>
          </div>
          <button style="background: #6366f1; color: white; border: none; padding: 12px 16px; border-radius: 12px; font-size: 13px; font-weight: 600">
            使用
          </button>
        </div>
      </div>

      <!-- 訂單摘要 -->
      <div class="card" style="margin-bottom: 20px">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 16px">訂單摘要</h3>
        <div style="display: grid; gap: 12px">
          <div style="display: flex; justify-content: space-between">
            <span style="font-size: 14px; color: #64748b">商品小計</span>
            <span style="font-size: 14px; font-weight: 700; color: #1e293b">NT$ 6,640</span>
          </div>
          <div style="display: flex; justify-content: space-between">
            <span style="font-size: 14px; color: #64748b">運費</span>
            <span style="font-size: 14px; font-weight: 700; color: #10b981">免費</span>
          </div>
          <div style="display: flex; justify-content: space-between">
            <span style="font-size: 14px; color: #64748b">優惠折扣</span>
            <span style="font-size: 14px; font-weight: 700; color: #dc2626">-NT$ 996</span>
          </div>
          <div style="height: 1px; background: #e2e8f0; margin: 8px 0"></div>
          <div style="display: flex; justify-content: space-between">
            <span style="font-size: 16px; font-weight: 800; color: #1e293b">總計</span>
            <span style="font-size: 20px; font-weight: 800; color: #6366f1">NT$ 5,644</span>
          </div>
        </div>
      </div>

      <!-- 結帳按鈕 -->
      <button class="btn btn-primary" style="margin-bottom: 16px">
        <i class="fas fa-credit-card" style="margin-right: 8px"></i>
        使用 Apple Pay 結帳
      </button>

      <button class="btn btn-outline">
        <i class="fas fa-lock" style="margin-right: 8px"></i>
        其他付款方式
      </button>
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
