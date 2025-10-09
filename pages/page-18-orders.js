// 頁面 18: 訂單管理頁面
document.getElementById("page-18").innerHTML = `
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
        <div style="padding-left: 48px">
          <h2 style="font-size: 28px; font-weight: 800; color: #1e293b">我的訂單</h2>
          <p style="font-size: 14px; color: #64748b; margin-top: 4px">查看所有訂單狀態</p>
        </div>
      </div>

      <!-- 訂單狀態篩選 -->
      <div style="display: flex; gap: 8px; margin-bottom: 24px; overflow-x: auto; padding-bottom: 4px">
        <button class="badge" style="padding: 10px 16px; background: #6366f1; color: white; border: none; cursor: pointer; white-space: nowrap; font-weight: 600">
          全部 (7)
        </button>
        <button class="badge" style="padding: 10px 16px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; cursor: pointer; white-space: nowrap">
          待出貨 (2)
        </button>
        <button class="badge" style="padding: 10px 16px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; cursor: pointer; white-space: nowrap">
          運送中 (3)
        </button>
        <button class="badge" style="padding: 10px 16px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; cursor: pointer; white-space: nowrap">
          已完成 (2)
        </button>
      </div>

      <!-- 訂單列表 -->
      <div style="display: grid; gap: 16px">
        <!-- 訂單 1: 運送中 -->
        <div class="card" style="padding: 0; overflow: hidden">
          <div style="padding: 16px; background: #fef3c7; border-bottom: 1px solid #fde68a">
            <div style="display: flex; justify-content: space-between; align-items: center">
              <div style="display: flex; align-items: center; gap: 8px">
                <i class="fas fa-store" style="color: #f59e0b"></i>
                <span style="font-size: 14px; font-weight: 700; color: #78350f">時尚潮牌 A</span>
              </div>
              <span class="badge" style="background: #fbbf24; color: #78350f; font-size: 12px">
                <i class="fas fa-truck" style="font-size: 10px; margin-right: 4px"></i>運送中
              </span>
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 12px">
              <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=80&h=80&fit=crop" alt="Product" style="width: 70px; height: 70px; border-radius: 12px; object-fit: cover">
              <div style="flex: 1">
                <h3 style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">經典風衣外套</h3>
                <p style="font-size: 13px; color: #64748b; margin-bottom: 6px">顏色: 黑色 | 尺寸: M</p>
                <div style="display: flex; justify-content: space-between; align-items: center">
                  <span style="font-size: 16px; font-weight: 800; color: #6366f1">NT$ 3,280</span>
                  <span style="font-size: 13px; color: #64748b">x1</span>
                </div>
              </div>
            </div>

            <div style="height: 1px; background: #e2e8f0; margin: 12px 0"></div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <span style="font-size: 14px; color: #64748b">訂單編號</span>
              <span style="font-size: 14px; font-weight: 600; color: #1e293b">FT202401150001</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px">
              <span style="font-size: 14px; color: #64748b">訂單總額</span>
              <span style="font-size: 18px; font-weight: 800; color: #6366f1">NT$ 3,280</span>
            </div>

            <div style="display: flex; gap: 8px">
              <button class="btn btn-outline" style="flex: 1; padding: 10px" onclick="alert('查看物流')">
                <i class="fas fa-map-marker-alt" style="margin-right: 6px"></i>查看物流
              </button>
              <button class="btn btn-primary" style="flex: 1; padding: 10px" onclick="alert('聯繫客服')">
                <i class="fas fa-comments" style="margin-right: 6px"></i>聯繫客服
              </button>
            </div>
          </div>
        </div>

        <!-- 訂單 2: 待出貨 -->
        <div class="card" style="padding: 0; overflow: hidden">
          <div style="padding: 16px; background: #dbeafe; border-bottom: 1px solid #bfdbfe">
            <div style="display: flex; justify-content: space-between; align-items: center">
              <div style="display: flex; align-items: center; gap: 8px">
                <i class="fas fa-store" style="color: #2563eb"></i>
                <span style="font-size: 14px; font-weight: 700; color: #1e3a8a">精品美妝 B</span>
              </div>
              <span class="badge" style="background: #3b82f6; color: white; font-size: 12px">
                <i class="fas fa-box" style="font-size: 10px; margin-right: 4px"></i>待出貨
              </span>
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 12px">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=80&h=80&fit=crop" alt="Product" style="width: 70px; height: 70px; border-radius: 12px; object-fit: cover">
              <div style="flex: 1">
                <h3 style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">完美底妝組</h3>
                <p style="font-size: 13px; color: #64748b; margin-bottom: 6px">套組內含 3 件</p>
                <div style="display: flex; justify-content: space-between; align-items: center">
                  <span style="font-size: 16px; font-weight: 800; color: #6366f1">NT$ 1,680</span>
                  <span style="font-size: 13px; color: #64748b">x2</span>
                </div>
              </div>
            </div>

            <div style="height: 1px; background: #e2e8f0; margin: 12px 0"></div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <span style="font-size: 14px; color: #64748b">訂單編號</span>
              <span style="font-size: 14px; font-weight: 600; color: #1e293b">FT202401140002</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px">
              <span style="font-size: 14px; color: #64748b">訂單總額</span>
              <span style="font-size: 18px; font-weight: 800; color: #6366f1">NT$ 3,360</span>
            </div>

            <div style="display: flex; gap: 8px">
              <button class="btn btn-outline" style="flex: 1; padding: 10px" onclick="alert('取消訂單')">
                取消訂單
              </button>
              <button class="btn btn-primary" style="flex: 1; padding: 10px" onclick="alert('提醒出貨')">
                <i class="fas fa-bell" style="margin-right: 6px"></i>提醒出貨
              </button>
            </div>
          </div>
        </div>

        <!-- 訂單 3: 已完成 -->
        <div class="card" style="padding: 0; overflow: hidden">
          <div style="padding: 16px; background: #d1fae5; border-bottom: 1px solid #a7f3d0">
            <div style="display: flex; justify-content: space-between; align-items: center">
              <div style="display: flex; align-items: center; gap: 8px">
                <i class="fas fa-store" style="color: #059669"></i>
                <span style="font-size: 14px; font-weight: 700; color: #064e3b">時尚潮牌 A</span>
              </div>
              <span class="badge" style="background: #10b981; color: white; font-size: 12px">
                <i class="fas fa-check-circle" style="font-size: 10px; margin-right: 4px"></i>已完成
              </span>
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 12px">
              <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=80&h=80&fit=crop" alt="Product" style="width: 70px; height: 70px; border-radius: 12px; object-fit: cover">
              <div style="flex: 1">
                <h3 style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">時尚太陽眼鏡</h3>
                <p style="font-size: 13px; color: #64748b; margin-bottom: 6px">款式: 經典飛行員</p>
                <div style="display: flex; justify-content: space-between; align-items: center">
                  <span style="font-size: 16px; font-weight: 800; color: #6366f1">NT$ 2,180</span>
                  <span style="font-size: 13px; color: #64748b">x1</span>
                </div>
              </div>
            </div>

            <div style="height: 1px; background: #e2e8f0; margin: 12px 0"></div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <span style="font-size: 14px; color: #64748b">訂單編號</span>
              <span style="font-size: 14px; font-weight: 600; color: #1e293b">FT202401100003</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px">
              <span style="font-size: 14px; color: #64748b">訂單總額</span>
              <span style="font-size: 18px; font-weight: 800; color: #6366f1">NT$ 2,180</span>
            </div>

            <div style="display: flex; gap: 8px">
              <button class="btn btn-outline" style="flex: 1; padding: 10px" onclick="alert('再次購買')">
                <i class="fas fa-redo" style="margin-right: 6px"></i>再次購買
              </button>
              <button class="btn btn-primary" style="flex: 1; padding: 10px" onclick="alert('評價商品')">
                <i class="fas fa-star" style="margin-right: 6px"></i>評價商品
              </button>
            </div>
          </div>
        </div>

        <!-- 訂單 4: 運送中 -->
        <div class="card" style="padding: 0; overflow: hidden">
          <div style="padding: 16px; background: #fef3c7; border-bottom: 1px solid #fde68a">
            <div style="display: flex; justify-content: space-between; align-items: center">
              <div style="display: flex; align-items: center; gap: 8px">
                <i class="fas fa-store" style="color: #f59e0b"></i>
                <span style="font-size: 14px; font-weight: 700; color: #78350f">生活居家 C</span>
              </div>
              <span class="badge" style="background: #fbbf24; color: #78350f; font-size: 12px">
                <i class="fas fa-truck" style="font-size: 10px; margin-right: 4px"></i>運送中
              </span>
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 12px">
              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=80&h=80&fit=crop" alt="Product" style="width: 70px; height: 70px; border-radius: 12px; object-fit: cover">
              <div style="flex: 1">
                <h3 style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">居家香氛蠟燭</h3>
                <p style="font-size: 13px; color: #64748b; margin-bottom: 6px">香味: 海洋微風</p>
                <div style="display: flex; justify-content: space-between; align-items: center">
                  <span style="font-size: 16px; font-weight: 800; color: #6366f1">NT$ 890</span>
                  <span style="font-size: 13px; color: #64748b">x1</span>
                </div>
              </div>
            </div>

            <div style="height: 1px; background: #e2e8f0; margin: 12px 0"></div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <span style="font-size: 14px; color: #64748b">訂單編號</span>
              <span style="font-size: 14px; font-weight: 600; color: #1e293b">FT202401140004</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px">
              <span style="font-size: 14px; color: #64748b">訂單總額</span>
              <span style="font-size: 18px; font-weight: 800; color: #6366f1">NT$ 890</span>
            </div>

            <div style="display: flex; gap: 8px">
              <button class="btn btn-outline" style="flex: 1; padding: 10px" onclick="alert('查看物流')">
                <i class="fas fa-map-marker-alt" style="margin-right: 6px"></i>查看物流
              </button>
              <button class="btn btn-primary" style="flex: 1; padding: 10px" onclick="alert('聯繫客服')">
                <i class="fas fa-comments" style="margin-right: 6px"></i>聯繫客服
              </button>
            </div>
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
    <div class="tab-item active">
      <i class="fas fa-user tab-icon"></i>
      <span class="tab-label">我的</span>
    </div>
  </div>
</div>
`;
