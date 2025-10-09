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
          全部 (9)
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
        <button class="badge" style="padding: 10px 16px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; cursor: pointer; white-space: nowrap">
          退款/退貨 (1)
        </button>
        <button class="badge" style="padding: 10px 16px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; cursor: pointer; white-space: nowrap">
          已取消 (1)
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

            <div style="display: grid; gap: 8px">
              <div style="display: flex; gap: 8px">
                <button class="btn btn-outline" style="flex: 1; padding: 10px" onclick="alert('再次購買')">
                  <i class="fas fa-redo" style="margin-right: 6px"></i>再次購買
                </button>
                <button class="btn btn-primary" style="flex: 1; padding: 10px" onclick="alert('評價商品')">
                  <i class="fas fa-star" style="margin-right: 6px"></i>評價商品
                </button>
              </div>
              <button class="btn" style="padding: 10px; background: white; border: 1.5px solid #ef4444; color: #ef4444" onclick="if(confirm('確定要申請退款/退貨嗎？')) alert('已提交退款申請\\n\\n我們會盡快為您處理\\n請保持商品完整，並拍攝商品照片')">
                <i class="fas fa-undo" style="margin-right: 6px"></i>申請退款/退貨
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

        <!-- 訂單 5: 退款申請 -->
        <div class="card" style="padding: 0; overflow: hidden; border: 2px solid #ef4444">
          <div style="padding: 16px; background: #fee2e2; border-bottom: 1px solid #fecaca">
            <div style="display: flex; justify-content: space-between; align-items: center">
              <div style="display: flex; align-items: center; gap: 8px">
                <i class="fas fa-store" style="color: #dc2626"></i>
                <span style="font-size: 14px; font-weight: 700; color: #7f1d1d">3C 電子 E</span>
              </div>
              <span class="badge" style="background: #ef4444; color: white; font-size: 12px">
                <i class="fas fa-undo" style="font-size: 10px; margin-right: 4px"></i>退款申請中
              </span>
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 12px">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop" alt="Product" style="width: 70px; height: 70px; border-radius: 12px; object-fit: cover">
              <div style="flex: 1">
                <h3 style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">藍牙耳機</h3>
                <p style="font-size: 13px; color: #64748b; margin-bottom: 6px">顏色: 黑色</p>
                <div style="display: flex; justify-content: space-between; align-items: center">
                  <span style="font-size: 16px; font-weight: 800; color: #ef4444">NT$ 1,580</span>
                  <span style="font-size: 13px; color: #64748b">x1</span>
                </div>
              </div>
            </div>

            <div style="padding: 12px; background: #fef2f2; border-radius: 12px; border: 1px solid #fecaca; margin-bottom: 12px">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px">
                <i class="fas fa-exclamation-triangle" style="color: #dc2626; font-size: 14px"></i>
                <span style="font-size: 13px; font-weight: 700; color: #991b1b">退款原因</span>
              </div>
              <div style="font-size: 12px; color: #7f1d1d; line-height: 1.5">
                商品無法正常配對，疑似功能故障
              </div>
              <div style="font-size: 11px; color: #991b1b; margin-top: 6px">
                申請時間：2024-01-12 10:15
              </div>
            </div>

            <div style="padding: 12px; background: #fef3c7; border-radius: 12px; border: 1px solid #fde68a; margin-bottom: 12px">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px">
                <i class="fas fa-clock" style="color: #f59e0b; font-size: 14px"></i>
                <span style="font-size: 13px; font-weight: 700; color: #78350f">處理狀態</span>
              </div>
              <div style="font-size: 12px; color: #92400e">
                品牌方審核中，預計 1-3 個工作天回覆
              </div>
            </div>

            <div style="height: 1px; background: #e2e8f0; margin: 12px 0"></div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <span style="font-size: 14px; color: #64748b">訂單編號</span>
              <span style="font-size: 14px; font-weight: 600; color: #1e293b">FT202401120006</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px">
              <span style="font-size: 14px; color: #64748b">退款金額</span>
              <span style="font-size: 18px; font-weight: 800; color: #ef4444">NT$ 1,580</span>
            </div>

            <div style="display: flex; gap: 8px">
              <button class="btn btn-outline" style="flex: 1; padding: 10px" onclick="alert('查看退款詳情\\n\\n訂單編號：FT202401120006\\n退款原因：商品功能故障\\n申請時間：2024-01-12 10:15\\n\\n目前狀態：品牌方審核中\\n預計 1-3 個工作天回覆')">
                <i class="fas fa-info-circle" style="margin-right: 6px"></i>退款詳情
              </button>
              <button class="btn btn-primary" style="flex: 1; padding: 10px" onclick="alert('聯繫客服')">
                <i class="fas fa-comments" style="margin-right: 6px"></i>聯繫客服
              </button>
            </div>
          </div>
        </div>

        <!-- 訂單 6: 已取消 -->
        <div class="card" style="padding: 0; overflow: hidden; opacity: 0.75">
          <div style="padding: 16px; background: #f1f5f9; border-bottom: 1px solid #e2e8f0">
            <div style="display: flex; justify-content: space-between; align-items: center">
              <div style="display: flex; align-items: center; gap: 8px">
                <i class="fas fa-store" style="color: #64748b"></i>
                <span style="font-size: 14px; font-weight: 700; color: #475569">運動健身 D</span>
              </div>
              <span class="badge" style="background: #64748b; color: white; font-size: 12px">
                <i class="fas fa-ban" style="font-size: 10px; margin-right: 4px"></i>已取消
              </span>
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 12px">
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=80&h=80&fit=crop" alt="Product" style="width: 70px; height: 70px; border-radius: 12px; object-fit: cover">
              <div style="flex: 1">
                <h3 style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">瑜珈墊組合</h3>
                <p style="font-size: 13px; color: #64748b; margin-bottom: 6px">顏色: 粉色</p>
                <div style="display: flex; justify-content: space-between; align-items: center">
                  <span style="font-size: 16px; font-weight: 800; color: #64748b; text-decoration: line-through">NT$ 1,280</span>
                  <span style="font-size: 13px; color: #64748b">x1</span>
                </div>
              </div>
            </div>

            <div style="padding: 12px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: 12px">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px">
                <i class="fas fa-info-circle" style="color: #64748b; font-size: 14px"></i>
                <span style="font-size: 13px; font-weight: 700; color: #475569">取消原因</span>
              </div>
              <div style="font-size: 12px; color: #64748b; line-height: 1.5">
                買錯尺寸，已重新下單
              </div>
              <div style="font-size: 11px; color: #94a3b8; margin-top: 6px">
                取消時間：2024-01-13 10:25
              </div>
            </div>

            <div style="height: 1px; background: #e2e8f0; margin: 12px 0"></div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <span style="font-size: 14px; color: #64748b">訂單編號</span>
              <span style="font-size: 14px; font-weight: 600; color: #1e293b">FT202401130005</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px">
              <span style="font-size: 14px; color: #64748b">退款金額</span>
              <span style="font-size: 18px; font-weight: 800; color: #64748b">NT$ 1,280</span>
            </div>

            <div style="display: flex; gap: 8px">
              <button class="btn btn-outline" style="flex: 1; padding: 10px" onclick="alert('再次購買')">
                <i class="fas fa-redo" style="margin-right: 6px"></i>再次購買
              </button>
              <button class="btn" style="flex: 1; padding: 10px; background: white; border: 1.5px solid #e2e8f0; color: #64748b" onclick="alert('刪除訂單')">
                <i class="fas fa-trash-alt" style="margin-right: 6px"></i>刪除
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
