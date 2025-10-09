// 品牌 10: 訂單管理（對應 brand-09）
document.getElementById("brand-09").innerHTML = `
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
      <div style="position: relative; margin-bottom: 32px">
        <button 
          onclick="goToPage(1)" 
          style="position: absolute; left: 0; top: 4px; background: white; border: 1.5px solid #e2e8f0; width: 36px; height: 36px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #64748b; cursor: pointer; transition: all 0.3s"
          onmouseover="this.style.background='#f8fafc'; this.style.borderColor='#cbd5e1'"
          onmouseout="this.style.background='white'; this.style.borderColor='#e2e8f0'"
        >
          <i class="fas fa-arrow-left"></i>
        </button>
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">訂單管理</h2>
        <p style="font-size: 14px; color: #64748b; padding-left: 48px; margin-top: 4px">處理並追蹤所有訂單</p>
      </div>

      <!-- 訂單統計卡片 -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px">
        <div class="card" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)">
          <div style="font-size: 12px; color: #1e3a8a; margin-bottom: 8px; font-weight: 600">待出貨</div>
          <div style="font-size: 28px; font-weight: 900; color: #1e3a8a; margin-bottom: 4px">8</div>
          <div style="font-size: 11px; color: #1e40af">需要盡快處理</div>
        </div>
        <div class="card" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)">
          <div style="font-size: 12px; color: #064e3b; margin-bottom: 8px; font-weight: 600">本日完成</div>
          <div style="font-size: 28px; font-weight: 900; color: #064e3b; margin-bottom: 4px">23</div>
          <div style="font-size: 11px; color: #065f46">+15% vs 昨日</div>
        </div>
        <div class="card" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)">
          <div style="font-size: 12px; color: #78350f; margin-bottom: 8px; font-weight: 600">運送中</div>
          <div style="font-size: 28px; font-weight: 900; color: #78350f; margin-bottom: 4px">45</div>
          <div style="font-size: 11px; color: #92400e">正在配送中</div>
        </div>
        <div class="card" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)">
          <div style="font-size: 12px; color: #7f1d1d; margin-bottom: 8px; font-weight: 600">退款/退貨</div>
          <div style="font-size: 28px; font-weight: 900; color: #7f1d1d; margin-bottom: 4px">2</div>
          <div style="font-size: 11px; color: #991b1b">需要處理</div>
        </div>
      </div>

      <!-- 訂單狀態篩選 -->
      <div style="display: flex; gap: 8px; margin-bottom: 20px; overflow-x: auto; padding-bottom: 4px">
        <button class="badge" style="padding: 10px 16px; background: #f5576c; color: white; border: none; cursor: pointer; white-space: nowrap; font-weight: 600">
          全部 (78)
        </button>
        <button class="badge" style="padding: 10px 16px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; cursor: pointer; white-space: nowrap">
          待出貨 (8)
        </button>
        <button class="badge" style="padding: 10px 16px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; cursor: pointer; white-space: nowrap">
          運送中 (45)
        </button>
        <button class="badge" style="padding: 10px 16px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; cursor: pointer; white-space: nowrap">
          已完成 (23)
        </button>
        <button class="badge" style="padding: 10px 16px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; cursor: pointer; white-space: nowrap">
          退款/退貨 (2)
        </button>
      </div>

      <!-- 訂單列表 -->
      <div style="display: grid; gap: 16px">
        <!-- 訂單 1: 待出貨 -->
        <div class="card" style="padding: 0; overflow: hidden; border: 2px solid #3b82f6">
          <div style="padding: 16px; background: #dbeafe; border-bottom: 1px solid #bfdbfe">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <div>
                <div style="font-size: 13px; color: #1e3a8a; margin-bottom: 4px">訂單編號</div>
                <div style="font-size: 16px; font-weight: 800; color: #1e293b">FT202401150001</div>
              </div>
              <span class="badge" style="background: #3b82f6; color: white; font-size: 12px; padding: 8px 12px">
                <i class="fas fa-box" style="font-size: 10px; margin-right: 4px"></i>待出貨
              </span>
            </div>
            <div style="font-size: 12px; color: #1e40af">
              <i class="fas fa-user" style="margin-right: 6px"></i>客戶: Emily Chen (@emily_fashion)
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 12px">
              <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=60&h=60&fit=crop" alt="Product" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover">
              <div style="flex: 1">
                <h3 style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">經典風衣外套</h3>
                <p style="font-size: 12px; color: #64748b; margin-bottom: 6px">黑色 · M · x1</p>
                <div style="font-size: 16px; font-weight: 800; color: #6366f1">NT$ 3,280</div>
              </div>
            </div>

            <div style="height: 1px; background: #e2e8f0; margin: 12px 0"></div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <span style="font-size: 13px; color: #64748b">訂單時間</span>
              <span style="font-size: 13px; font-weight: 600; color: #1e293b">2024-01-15 14:30</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px">
              <span style="font-size: 13px; color: #64748b">訂單金額</span>
              <span style="font-size: 18px; font-weight: 800; color: #6366f1">NT$ 3,280</span>
            </div>

            <div style="display: grid; gap: 8px">
              <button class="btn btn-primary" style="padding: 10px; font-size: 13px" onclick="document.getElementById('shipping-modal-1').style.display='flex'">
                <i class="fas fa-shipping-fast" style="margin-right: 6px"></i>安排出貨
              </button>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px">
                <button class="btn btn-outline" style="padding: 10px; font-size: 13px" onclick="alert('列印出貨單')">
                  <i class="fas fa-print" style="margin-right: 6px"></i>列印單據
                </button>
                <button class="btn" style="padding: 10px; background: white; border: 1.5px solid #e2e8f0; color: #64748b; font-size: 13px" onclick="document.getElementById('chat-modal-1').style.display='flex'">
                  <i class="fas fa-comments" style="margin-right: 6px"></i>聊天
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 訂單 2: 待出貨 -->
        <div class="card" style="padding: 0; overflow: hidden; border: 2px solid #3b82f6">
          <div style="padding: 16px; background: #dbeafe; border-bottom: 1px solid #bfdbfe">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <div>
                <div style="font-size: 13px; color: #1e3a8a; margin-bottom: 4px">訂單編號</div>
                <div style="font-size: 16px; font-weight: 800; color: #1e293b">FT202401140002</div>
              </div>
              <span class="badge" style="background: #3b82f6; color: white; font-size: 12px; padding: 8px 12px">
                <i class="fas fa-box" style="font-size: 10px; margin-right: 4px"></i>待出貨
              </span>
            </div>
            <div style="font-size: 12px; color: #1e40af">
              <i class="fas fa-user" style="margin-right: 6px"></i>客戶: Sarah Lee (@sarah_beauty)
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 12px">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=60&h=60&fit=crop" alt="Product" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover">
              <div style="flex: 1">
                <h3 style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">完美底妝組</h3>
                <p style="font-size: 12px; color: #64748b; margin-bottom: 6px">套組 · x2</p>
                <div style="font-size: 16px; font-weight: 800; color: #6366f1">NT$ 3,360</div>
              </div>
            </div>

            <div style="height: 1px; background: #e2e8f0; margin: 12px 0"></div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <span style="font-size: 13px; color: #64748b">訂單時間</span>
              <span style="font-size: 13px; font-weight: 600; color: #1e293b">2024-01-14 16:45</span>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px">
              <span style="font-size: 13px; color: #64748b">訂單金額</span>
              <span style="font-size: 18px; font-weight: 800; color: #6366f1">NT$ 3,360</span>
            </div>

            <div style="display: grid; gap: 8px">
              <button class="btn btn-primary" style="padding: 10px; font-size: 13px" onclick="document.getElementById('shipping-modal-2').style.display='flex'">
                <i class="fas fa-shipping-fast" style="margin-right: 6px"></i>安排出貨
              </button>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px">
                <button class="btn btn-outline" style="padding: 10px; font-size: 13px" onclick="alert('列印出貨單')">
                  <i class="fas fa-print" style="margin-right: 6px"></i>列印單據
                </button>
                <button class="btn" style="padding: 10px; background: white; border: 1.5px solid #e2e8f0; color: #64748b; font-size: 13px" onclick="document.getElementById('chat-modal-2').style.display='flex'">
                  <i class="fas fa-comments" style="margin-right: 6px"></i>聊天
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 訂單 3: 運送中 -->
        <div class="card" style="padding: 0; overflow: hidden">
          <div style="padding: 16px; background: #f8fafc; border-bottom: 1px solid #e2e8f0">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <div>
                <div style="font-size: 13px; color: #64748b; margin-bottom: 4px">訂單編號</div>
                <div style="font-size: 16px; font-weight: 800; color: #1e293b">FT202401130003</div>
              </div>
              <span class="badge" style="background: #f59e0b; color: white; font-size: 12px; padding: 8px 12px">
                <i class="fas fa-truck" style="font-size: 10px; margin-right: 4px"></i>運送中
              </span>
            </div>
            <div style="font-size: 12px; color: #64748b">
              <i class="fas fa-user" style="margin-right: 6px"></i>客戶: Mike Wang (@mike_style)
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 12px">
              <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=60&h=60&fit=crop" alt="Product" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover">
              <div style="flex: 1">
                <h3 style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">時尚太陽眼鏡</h3>
                <p style="font-size: 12px; color: #64748b; margin-bottom: 6px">經典飛行員 · x1</p>
                <div style="font-size: 16px; font-weight: 800; color: #6366f1">NT$ 2,180</div>
              </div>
            </div>

            <div style="height: 1px; background: #e2e8f0; margin: 12px 0"></div>

            <div style="padding: 12px; background: #fef3c7; border-radius: 12px; border: 1px solid #fde68a; margin-bottom: 12px">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px">
                <i class="fas fa-shipping-fast" style="color: #f59e0b; font-size: 14px"></i>
                <span style="font-size: 13px; font-weight: 700; color: #78350f">物流狀態</span>
              </div>
              <div style="font-size: 12px; color: #92400e; margin-bottom: 4px">
                <strong>配送中</strong> - 包裹已從物流中心發出
              </div>
              <div style="font-size: 11px; color: #92400e">
                順豐速運 · 物流編號: SF202401130987
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px">
              <span style="font-size: 13px; color: #64748b">訂單金額</span>
              <span style="font-size: 18px; font-weight: 800; color: #6366f1">NT$ 2,180</span>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px">
              <button class="btn btn-outline" style="padding: 10px; font-size: 13px" onclick="alert('追蹤物流\\n\\n順豐速運\\n物流編號: SF202401130987\\n\\n最新狀態：\\n• 2024-01-13 15:30 - 已從物流中心發出\\n• 2024-01-13 14:20 - 到達轉運中心\\n• 2024-01-13 10:15 - 商家已出貨')">
                <i class="fas fa-map-marker-alt" style="margin-right: 6px"></i>追蹤物流
              </button>
              <button class="btn" style="padding: 10px; background: white; border: 1.5px solid #e2e8f0; color: #64748b; font-size: 13px" onclick="document.getElementById('chat-modal-3').style.display='flex'">
                <i class="fas fa-comments" style="margin-right: 6px"></i>聊天
              </button>
            </div>
          </div>
        </div>

        <!-- 訂單 4: 已完成 -->
        <div class="card" style="padding: 0; overflow: hidden">
          <div style="padding: 16px; background: #d1fae5; border-bottom: 1px solid #a7f3d0">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <div>
                <div style="font-size: 13px; color: #064e3b; margin-bottom: 4px">訂單編號</div>
                <div style="font-size: 16px; font-weight: 800; color: #1e293b">FT202401100004</div>
              </div>
              <span class="badge" style="background: #10b981; color: white; font-size: 12px; padding: 8px 12px">
                <i class="fas fa-check-circle" style="font-size: 10px; margin-right: 4px"></i>已完成
              </span>
            </div>
            <div style="font-size: 12px; color: #065f46">
              <i class="fas fa-user" style="margin-right: 6px"></i>客戶: Lisa Chen (@lisa_home)
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 12px">
              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=60&h=60&fit=crop" alt="Product" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover">
              <div style="flex: 1">
                <h3 style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">居家香氛蠟燭</h3>
                <p style="font-size: 12px; color: #64748b; margin-bottom: 6px">海洋微風 · x1</p>
                <div style="font-size: 16px; font-weight: 800; color: #6366f1">NT$ 890</div>
              </div>
            </div>

            <div style="height: 1px; background: #e2e8f0; margin: 12px 0"></div>

            <!-- 客戶評價 -->
            <div style="padding: 12px; background: #f0fdf4; border-radius: 12px; border: 1px solid #bbf7d0; margin-bottom: 12px">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px">
                <i class="fas fa-star" style="color: #f59e0b; font-size: 14px"></i>
                <span style="font-size: 13px; font-weight: 700; color: #064e3b">客戶評價</span>
                <span style="font-size: 12px; color: #16a34a; margin-left: auto">⭐⭐⭐⭐⭐ 5.0</span>
              </div>
              <div style="font-size: 12px; color: #065f46; line-height: 1.5">
                "香味很好聞，包裝也很精美！會再回購的！"
              </div>
              <div style="font-size: 11px; color: #16a34a; margin-top: 6px">
                2024-01-12 18:30
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px">
              <span style="font-size: 13px; color: #64748b">訂單金額</span>
              <span style="font-size: 18px; font-weight: 800; color: #6366f1">NT$ 890</span>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px">
              <button class="btn btn-outline" style="padding: 10px; font-size: 13px" onclick="document.getElementById('review-modal-4').style.display='flex'">
                <i class="fas fa-star" style="margin-right: 6px"></i>查看評價
              </button>
              <button class="btn" style="padding: 10px; background: white; border: 1.5px solid #e2e8f0; color: #64748b; font-size: 13px" onclick="document.getElementById('chat-modal-4').style.display='flex'">
                <i class="fas fa-comments" style="margin-right: 6px"></i>聊天
              </button>
            </div>
          </div>
        </div>

        <!-- 訂單 5: 退款申請 -->
        <div class="card" style="padding: 0; overflow: hidden; border: 2px solid #ef4444">
          <div style="padding: 16px; background: #fee2e2; border-bottom: 1px solid #fecaca">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <div>
                <div style="font-size: 13px; color: #7f1d1d; margin-bottom: 4px">訂單編號</div>
                <div style="font-size: 16px; font-weight: 800; color: #1e293b">FT202401120005</div>
              </div>
              <span class="badge" style="background: #ef4444; color: white; font-size: 12px; padding: 8px 12px">
                <i class="fas fa-undo" style="font-size: 10px; margin-right: 4px"></i>退款申請
              </span>
            </div>
            <div style="font-size: 12px; color: #991b1b">
              <i class="fas fa-user" style="margin-right: 6px"></i>客戶: Alex Lin (@alex_tech)
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: flex; gap: 12px; margin-bottom: 12px">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=60&h=60&fit=crop" alt="Product" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover">
              <div style="flex: 1">
                <h3 style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">藍牙耳機</h3>
                <p style="font-size: 12px; color: #64748b; margin-bottom: 6px">黑色 · x1</p>
                <div style="font-size: 16px; font-weight: 800; color: #6366f1">NT$ 1,580</div>
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
            </div>

            <div style="height: 1px; background: #e2e8f0; margin: 12px 0"></div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px">
              <span style="font-size: 13px; color: #64748b">退款金額</span>
              <span style="font-size: 18px; font-weight: 800; color: #dc2626">NT$ 1,580</span>
            </div>

            <div style="display: grid; gap: 8px">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px">
                <button class="btn" style="padding: 10px; background: #10b981; color: white; border: none; font-size: 13px" onclick="if(confirm('確認同意退款？')) alert('退款已批准，系統將於3-5個工作天完成退款')">
                  <i class="fas fa-check" style="margin-right: 6px"></i>同意退款
                </button>
                <button class="btn" style="padding: 10px; background: #dc2626; color: white; border: none; font-size: 13px" onclick="if(confirm('確定拒絕退款申請？')) alert('退款已拒絕')">
                  <i class="fas fa-times" style="margin-right: 6px"></i>拒絕退款
                </button>
              </div>
              <button class="btn btn-outline" style="padding: 10px; font-size: 13px" onclick="document.getElementById('chat-modal-5').style.display='flex'">
                <i class="fas fa-comments" style="margin-right: 6px"></i>聯繫客戶
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 客服聊天模態框 1 - Emily Chen -->
  <div id="chat-modal-1" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center" onclick="if(event.target === this) this.style.display='none'">
    <div style="background: white; border-radius: 24px; margin: 20px; max-width: 420px; width: 100%; height: 600px; max-height: 85vh; box-shadow: 0 20px 60px rgba(0,0,0,0.3); display: flex; flex-direction: column" onclick="event.stopPropagation()">
      <!-- 聊天標題 -->
      <div style="padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px">
        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop" alt="User" style="width: 40px; height: 40px; border-radius: 20px; object-fit: cover">
        <div style="flex: 1">
          <div style="font-size: 16px; font-weight: 700; color: #1e293b">Emily Chen</div>
          <div style="font-size: 12px; color: #64748b">訂單 FT202401150001</div>
        </div>
        <button onclick="document.getElementById('chat-modal-1').style.display='none'" style="width: 32px; height: 32px; border-radius: 16px; border: none; background: #f1f5f9; color: #64748b; cursor: pointer; display: flex; align-items: center; justify-content: center">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <!-- 聊天訊息區 -->
      <div style="flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 16px">
        <!-- 客戶訊息 -->
        <div style="display: flex; gap: 8px; align-items: flex-start">
          <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop" alt="User" style="width: 32px; height: 32px; border-radius: 16px; object-fit: cover; flex-shrink: 0">
          <div style="flex: 1">
            <div style="background: #f1f5f9; padding: 12px 16px; border-radius: 16px 16px 16px 4px; max-width: 80%">
              <div style="font-size: 14px; color: #1e293b; line-height: 1.5">請問我訂的風衣外套什麼時候會出貨？</div>
            </div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 4px; padding-left: 4px">14:30</div>
          </div>
        </div>

        <!-- 品牌訊息 -->
        <div style="display: flex; gap: 8px; align-items: flex-start; flex-direction: row-reverse">
          <div style="width: 32px; height: 32px; border-radius: 16px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center; flex-shrink: 0">
            <i class="fas fa-store" style="font-size: 14px; color: white"></i>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: flex-end">
            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 12px 16px; border-radius: 16px 16px 4px 16px; max-width: 80%">
              <div style="font-size: 14px; line-height: 1.5">您好！我們會在今天下午為您安排出貨，預計明天就能送達。感謝您的耐心等待！</div>
            </div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 4px; padding-right: 4px">14:32</div>
          </div>
        </div>

        <!-- 客戶訊息 -->
        <div style="display: flex; gap: 8px; align-items: flex-start">
          <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop" alt="User" style="width: 32px; height: 32px; border-radius: 16px; object-fit: cover; flex-shrink: 0">
          <div style="flex: 1">
            <div style="background: #f1f5f9; padding: 12px 16px; border-radius: 16px 16px 16px 4px; max-width: 80%">
              <div style="font-size: 14px; color: #1e293b; line-height: 1.5">太好了，謝謝！</div>
            </div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 4px; padding-left: 4px">14:33</div>
          </div>
        </div>
      </div>

      <!-- 輸入區 -->
      <div style="padding: 16px; border-top: 1px solid #e2e8f0">
        <div style="display: flex; gap: 8px">
          <input type="text" placeholder="輸入訊息..." style="flex: 1; padding: 12px 16px; border: 1.5px solid #e2e8f0; border-radius: 24px; font-size: 14px; outline: none" onkeypress="if(event.key==='Enter') alert('訊息已發送')">
          <button style="width: 44px; height: 44px; border-radius: 22px; border: none; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; cursor: pointer; display: flex; align-items: center; justify-content: center" onclick="alert('訊息已發送')">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 客服聊天模態框 2 - Sarah Lee -->
  <div id="chat-modal-2" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center" onclick="if(event.target === this) this.style.display='none'">
    <div style="background: white; border-radius: 24px; margin: 20px; max-width: 420px; width: 100%; height: 600px; max-height: 85vh; box-shadow: 0 20px 60px rgba(0,0,0,0.3); display: flex; flex-direction: column" onclick="event.stopPropagation()">
      <div style="padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop" alt="User" style="width: 40px; height: 40px; border-radius: 20px; object-fit: cover">
        <div style="flex: 1">
          <div style="font-size: 16px; font-weight: 700; color: #1e293b">Sarah Lee</div>
          <div style="font-size: 12px; color: #64748b">訂單 FT202401140002</div>
        </div>
        <button onclick="document.getElementById('chat-modal-2').style.display='none'" style="width: 32px; height: 32px; border-radius: 16px; border: none; background: #f1f5f9; color: #64748b; cursor: pointer; display: flex; align-items: center; justify-content: center">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div style="flex: 1; overflow-y: auto; padding: 20px; display: flex; align-items: center; justify-content: center">
        <div style="text-align: center; color: #94a3b8">
          <i class="fas fa-comments" style="font-size: 48px; opacity: 0.3; margin-bottom: 12px"></i>
          <div style="font-size: 14px">尚無對話記錄</div>
        </div>
      </div>
      <div style="padding: 16px; border-top: 1px solid #e2e8f0">
        <div style="display: flex; gap: 8px">
          <input type="text" placeholder="輸入訊息..." style="flex: 1; padding: 12px 16px; border: 1.5px solid #e2e8f0; border-radius: 24px; font-size: 14px; outline: none" onkeypress="if(event.key==='Enter') alert('訊息已發送')">
          <button style="width: 44px; height: 44px; border-radius: 22px; border: none; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; cursor: pointer; display: flex; align-items: center; justify-content: center" onclick="alert('訊息已發送')">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 客服聊天模態框 3 - Mike Wang -->
  <div id="chat-modal-3" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center" onclick="if(event.target === this) this.style.display='none'">
    <div style="background: white; border-radius: 24px; margin: 20px; max-width: 420px; width: 100%; height: 600px; max-height: 85vh; box-shadow: 0 20px 60px rgba(0,0,0,0.3); display: flex; flex-direction: column" onclick="event.stopPropagation()">
      <div style="padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop" alt="User" style="width: 40px; height: 40px; border-radius: 20px; object-fit: cover">
        <div style="flex: 1">
          <div style="font-size: 16px; font-weight: 700; color: #1e293b">Mike Wang</div>
          <div style="font-size: 12px; color: #64748b">訂單 FT202401130003</div>
        </div>
        <button onclick="document.getElementById('chat-modal-3').style.display='none'" style="width: 32px; height: 32px; border-radius: 16px; border: none; background: #f1f5f9; color: #64748b; cursor: pointer; display: flex; align-items: center; justify-content: center">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div style="flex: 1; overflow-y: auto; padding: 20px; display: flex; align-items: center; justify-content: center">
        <div style="text-align: center; color: #94a3b8">
          <i class="fas fa-comments" style="font-size: 48px; opacity: 0.3; margin-bottom: 12px"></i>
          <div style="font-size: 14px">尚無對話記錄</div>
        </div>
      </div>
      <div style="padding: 16px; border-top: 1px solid #e2e8f0">
        <div style="display: flex; gap: 8px">
          <input type="text" placeholder="輸入訊息..." style="flex: 1; padding: 12px 16px; border: 1.5px solid #e2e8f0; border-radius: 24px; font-size: 14px; outline: none" onkeypress="if(event.key==='Enter') alert('訊息已發送')">
          <button style="width: 44px; height: 44px; border-radius: 22px; border: none; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; cursor: pointer; display: flex; align-items: center; justify-content: center" onclick="alert('訊息已發送')">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 客服聊天模態框 4 - Lisa Chen -->
  <div id="chat-modal-4" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center" onclick="if(event.target === this) this.style.display='none'">
    <div style="background: white; border-radius: 24px; margin: 20px; max-width: 420px; width: 100%; height: 600px; max-height: 85vh; box-shadow: 0 20px 60px rgba(0,0,0,0.3); display: flex; flex-direction: column" onclick="event.stopPropagation()">
      <div style="padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px">
        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop" alt="User" style="width: 40px; height: 40px; border-radius: 20px; object-fit: cover">
        <div style="flex: 1">
          <div style="font-size: 16px; font-weight: 700; color: #1e293b">Lisa Chen</div>
          <div style="font-size: 12px; color: #64748b">訂單 FT202401100004</div>
        </div>
        <button onclick="document.getElementById('chat-modal-4').style.display='none'" style="width: 32px; height: 32px; border-radius: 16px; border: none; background: #f1f5f9; color: #64748b; cursor: pointer; display: flex; align-items: center; justify-content: center">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div style="flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 16px">
        <div style="display: flex; gap: 8px; align-items: flex-start">
          <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop" alt="User" style="width: 32px; height: 32px; border-radius: 16px; object-fit: cover; flex-shrink: 0">
          <div style="flex: 1">
            <div style="background: #f1f5f9; padding: 12px 16px; border-radius: 16px 16px 16px 4px; max-width: 80%">
              <div style="font-size: 14px; color: #1e293b; line-height: 1.5">商品已收到，非常滿意！已經給五星好評了 ⭐⭐⭐⭐⭐</div>
            </div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 4px; padding-left: 4px">昨天 18:30</div>
          </div>
        </div>

        <div style="display: flex; gap: 8px; align-items: flex-start; flex-direction: row-reverse">
          <div style="width: 32px; height: 32px; border-radius: 16px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center; flex-shrink: 0">
            <i class="fas fa-store" style="font-size: 14px; color: white"></i>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: flex-end">
            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 12px 16px; border-radius: 16px 16px 4px 16px; max-width: 80%">
              <div style="font-size: 14px; line-height: 1.5">非常感謝您的支持與好評！🎉 期待您下次再來光臨！</div>
            </div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 4px; padding-right: 4px">昨天 19:00</div>
          </div>
        </div>
      </div>
      <div style="padding: 16px; border-top: 1px solid #e2e8f0">
        <div style="display: flex; gap: 8px">
          <input type="text" placeholder="輸入訊息..." style="flex: 1; padding: 12px 16px; border: 1.5px solid #e2e8f0; border-radius: 24px; font-size: 14px; outline: none" onkeypress="if(event.key==='Enter') alert('訊息已發送')">
          <button style="width: 44px; height: 44px; border-radius: 22px; border: none; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; cursor: pointer; display: flex; align-items: center; justify-content: center" onclick="alert('訊息已發送')">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 客服聊天模態框 5 - Alex Lin (退款申請) -->
  <div id="chat-modal-5" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center" onclick="if(event.target === this) this.style.display='none'">
    <div style="background: white; border-radius: 24px; margin: 20px; max-width: 420px; width: 100%; height: 600px; max-height: 85vh; box-shadow: 0 20px 60px rgba(0,0,0,0.3); display: flex; flex-direction: column" onclick="event.stopPropagation()">
      <div style="padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; gap: 12px">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop" alt="User" style="width: 40px; height: 40px; border-radius: 20px; object-fit: cover">
        <div style="flex: 1">
          <div style="font-size: 16px; font-weight: 700; color: #1e293b">Alex Lin</div>
          <div style="font-size: 12px; color: #64748b">訂單 FT202401120005 · 退款申請</div>
        </div>
        <button onclick="document.getElementById('chat-modal-5').style.display='none'" style="width: 32px; height: 32px; border-radius: 16px; border: none; background: #f1f5f9; color: #64748b; cursor: pointer; display: flex; align-items: center; justify-content: center">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div style="flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 16px">
        <div style="display: flex; gap: 8px; align-items: flex-start">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop" alt="User" style="width: 32px; height: 32px; border-radius: 16px; object-fit: cover; flex-shrink: 0">
          <div style="flex: 1">
            <div style="background: #f1f5f9; padding: 12px 16px; border-radius: 16px 16px 16px 4px; max-width: 80%">
              <div style="font-size: 14px; color: #1e293b; line-height: 1.5">您好，我購買的藍牙耳機無法正常配對，試過重置和重新連接都不行，懷疑是商品本身有問題。</div>
            </div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 4px; padding-left: 4px">今天 10:15</div>
          </div>
        </div>

        <div style="display: flex; gap: 8px; align-items: flex-start; flex-direction: row-reverse">
          <div style="width: 32px; height: 32px; border-radius: 16px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center; flex-shrink: 0">
            <i class="fas fa-store" style="font-size: 14px; color: white"></i>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: flex-end">
            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 12px 16px; border-radius: 16px 16px 4px 16px; max-width: 80%">
              <div style="font-size: 14px; line-height: 1.5">非常抱歉給您帶來不便！我們會立即處理退款申請，請問您方便拍幾張照片給我們看一下嗎？</div>
            </div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 4px; padding-right: 4px">今天 10:20</div>
          </div>
        </div>

        <div style="display: flex; gap: 8px; align-items: flex-start">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop" alt="User" style="width: 32px; height: 32px; border-radius: 16px; object-fit: cover; flex-shrink: 0">
          <div style="flex: 1">
            <div style="background: #f1f5f9; padding: 12px 16px; border-radius: 16px 16px 16px 4px; max-width: 80%">
              <div style="font-size: 14px; color: #1e293b; line-height: 1.5">好的，已經拍了幾張照片。確實有功能問題，希望能盡快處理退款。</div>
            </div>
            <div style="font-size: 11px; color: #94a3b8; margin-top: 4px; padding-left: 4px">今天 10:25</div>
          </div>
        </div>
      </div>
      <div style="padding: 16px; border-top: 1px solid #e2e8f0">
        <div style="display: flex; gap: 8px">
          <input type="text" placeholder="輸入訊息..." style="flex: 1; padding: 12px 16px; border: 1.5px solid #e2e8f0; border-radius: 24px; font-size: 14px; outline: none" onkeypress="if(event.key==='Enter') alert('訊息已發送')">
          <button style="width: 44px; height: 44px; border-radius: 22px; border: none; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; cursor: pointer; display: flex; align-items: center; justify-content: center" onclick="alert('訊息已發送')">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 安排出貨模態框 1 -->
  <div id="shipping-modal-1" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center" onclick="if(event.target === this) this.style.display='none'">
    <div style="background: white; border-radius: 24px; padding: 32px 24px; margin: 20px; max-width: 400px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.3)" onclick="event.stopPropagation()">
      <div style="text-align: center; margin-bottom: 24px">
        <div style="width: 64px; height: 64px; margin: 0 auto 16px; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center">
          <i class="fas fa-shipping-fast" style="font-size: 32px; color: white"></i>
        </div>
        <h3 style="font-size: 22px; font-weight: 800; color: #1e293b; margin-bottom: 8px">安排出貨</h3>
        <p style="font-size: 14px; color: #64748b">訂單 FT202401150001</p>
      </div>

      <div style="display: grid; gap: 16px; margin-bottom: 24px">
        <div>
          <label style="display: block; font-size: 14px; font-weight: 600; color: #1e293b; margin-bottom: 8px">物流公司</label>
          <select style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 14px; color: #1e293b; background: white">
            <option>順豐速運 (SF Express)</option>
            <option>黑貓宅急便</option>
            <option>新竹貨運</option>
            <option>台灣宅配通</option>
            <option>郵局包裹</option>
          </select>
        </div>

        <div>
          <label style="display: block; font-size: 14px; font-weight: 600; color: #1e293b; margin-bottom: 8px">物流追蹤編號</label>
          <input type="text" placeholder="輸入追蹤編號" style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 14px; box-sizing: border-box" value="SF202401150987">
        </div>

        <div>
          <label style="display: block; font-size: 14px; font-weight: 600; color: #1e293b; margin-bottom: 8px">物流追蹤連結（選填）</label>
          <input type="url" placeholder="https://tracking.example.com/..." style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 14px; box-sizing: border-box">
        </div>

        <div>
          <label style="display: block; font-size: 14px; font-weight: 600; color: #1e293b; margin-bottom: 8px">預計送達時間</label>
          <input type="date" style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 14px; box-sizing: border-box" value="2024-01-17">
        </div>

        <div>
          <label style="display: block; font-size: 14px; font-weight: 600; color: #1e293b; margin-bottom: 8px">備註（選填）</label>
          <textarea placeholder="出貨備註..." style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 14px; min-height: 80px; resize: vertical; box-sizing: border-box; font-family: inherit"></textarea>
        </div>
      </div>

      <div style="display: grid; gap: 12px">
        <button class="btn btn-primary" style="padding: 14px" onclick="alert('出貨資訊已更新！\\n\\n物流公司：順豐速運\\n追蹤編號：SF202401150987\\n\\n系統已通知客戶'); document.getElementById('shipping-modal-1').style.display='none'">
          <i class="fas fa-check" style="margin-right: 6px"></i>確認出貨
        </button>
        <button class="btn" style="padding: 14px; background: #f1f5f9; border: none; color: #64748b" onclick="document.getElementById('shipping-modal-1').style.display='none'">
          取消
        </button>
      </div>
    </div>
  </div>

  <!-- 安排出貨模態框 2 -->
  <div id="shipping-modal-2" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center" onclick="if(event.target === this) this.style.display='none'">
    <div style="background: white; border-radius: 24px; padding: 32px 24px; margin: 20px; max-width: 400px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.3)" onclick="event.stopPropagation()">
      <div style="text-align: center; margin-bottom: 24px">
        <div style="width: 64px; height: 64px; margin: 0 auto 16px; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center">
          <i class="fas fa-shipping-fast" style="font-size: 32px; color: white"></i>
        </div>
        <h3 style="font-size: 22px; font-weight: 800; color: #1e293b; margin-bottom: 8px">安排出貨</h3>
        <p style="font-size: 14px; color: #64748b">訂單 FT202401140002</p>
      </div>

      <div style="display: grid; gap: 16px; margin-bottom: 24px">
        <div>
          <label style="display: block; font-size: 14px; font-weight: 600; color: #1e293b; margin-bottom: 8px">物流公司</label>
          <select style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 14px; color: #1e293b; background: white">
            <option>順豐速運 (SF Express)</option>
            <option>黑貓宅急便</option>
            <option>新竹貨運</option>
            <option>台灣宅配通</option>
            <option>郵局包裹</option>
          </select>
        </div>

        <div>
          <label style="display: block; font-size: 14px; font-weight: 600; color: #1e293b; margin-bottom: 8px">物流追蹤編號</label>
          <input type="text" placeholder="輸入追蹤編號" style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 14px; box-sizing: border-box">
        </div>

        <div>
          <label style="display: block; font-size: 14px; font-weight: 600; color: #1e293b; margin-bottom: 8px">物流追蹤連結（選填）</label>
          <input type="url" placeholder="https://tracking.example.com/..." style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 14px; box-sizing: border-box">
        </div>

        <div>
          <label style="display: block; font-size: 14px; font-weight: 600; color: #1e293b; margin-bottom: 8px">預計送達時間</label>
          <input type="date" style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 14px; box-sizing: border-box">
        </div>

        <div>
          <label style="display: block; font-size: 14px; font-weight: 600; color: #1e293b; margin-bottom: 8px">備註（選填）</label>
          <textarea placeholder="出貨備註..." style="width: 100%; padding: 12px; border: 1.5px solid #e2e8f0; border-radius: 12px; font-size: 14px; min-height: 80px; resize: vertical; box-sizing: border-box; font-family: inherit"></textarea>
        </div>
      </div>

      <div style="display: grid; gap: 12px">
        <button class="btn btn-primary" style="padding: 14px" onclick="alert('出貨資訊已更新！系統已通知客戶'); document.getElementById('shipping-modal-2').style.display='none'">
          <i class="fas fa-check" style="margin-right: 6px"></i>確認出貨
        </button>
        <button class="btn" style="padding: 14px; background: #f1f5f9; border: none; color: #64748b" onclick="document.getElementById('shipping-modal-2').style.display='none'">
          取消
        </button>
      </div>
    </div>
  </div>

  <!-- 查看評價模態框 -->
  <div id="review-modal-4" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center" onclick="if(event.target === this) this.style.display='none'">
    <div style="background: white; border-radius: 24px; padding: 32px 24px; margin: 20px; max-width: 400px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.3); max-height: 80vh; overflow-y: auto" onclick="event.stopPropagation()">
      <div style="text-align: center; margin-bottom: 24px">
        <div style="width: 64px; height: 64px; margin: 0 auto 16px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center">
          <i class="fas fa-star" style="font-size: 32px; color: white"></i>
        </div>
        <h3 style="font-size: 22px; font-weight: 800; color: #1e293b; margin-bottom: 8px">客戶評價</h3>
        <p style="font-size: 14px; color: #64748b">訂單 FT202401100004</p>
      </div>

      <!-- 商品資訊 -->
      <div style="display: flex; gap: 12px; padding: 16px; background: #f8fafc; border-radius: 12px; margin-bottom: 20px">
        <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=60&h=60&fit=crop" alt="Product" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover">
        <div style="flex: 1">
          <h3 style="font-size: 15px; font-weight: 700; color: #1e293b; margin-bottom: 4px">居家香氛蠟燭</h3>
          <p style="font-size: 13px; color: #64748b">海洋微風</p>
        </div>
      </div>

      <!-- 評分 -->
      <div style="text-align: center; margin-bottom: 20px">
        <div style="font-size: 48px; margin-bottom: 8px">⭐⭐⭐⭐⭐</div>
        <div style="font-size: 32px; font-weight: 800; color: #f59e0b">5.0</div>
        <div style="font-size: 14px; color: #64748b; margin-top: 4px">完美評價</div>
      </div>

      <!-- 詳細評分 -->
      <div style="display: grid; gap: 12px; margin-bottom: 20px">
        <div style="display: flex; justify-content: space-between; align-items: center">
          <span style="font-size: 14px; color: #64748b">商品品質</span>
          <div style="display: flex; align-items: center; gap: 8px">
            <div style="font-size: 16px">⭐⭐⭐⭐⭐</div>
            <span style="font-size: 14px; font-weight: 700; color: #1e293b">5.0</span>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <span style="font-size: 14px; color: #64748b">包裝完整</span>
          <div style="display: flex; align-items: center; gap: 8px">
            <div style="font-size: 16px">⭐⭐⭐⭐⭐</div>
            <span style="font-size: 14px; font-weight: 700; color: #1e293b">5.0</span>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <span style="font-size: 14px; color: #64748b">出貨速度</span>
          <div style="display: flex; align-items: center; gap: 8px">
            <div style="font-size: 16px">⭐⭐⭐⭐⭐</div>
            <span style="font-size: 14px; font-weight: 700; color: #1e293b">5.0</span>
          </div>
        </div>
      </div>

      <!-- 評價內容 -->
      <div style="padding: 16px; background: #f0fdf4; border-radius: 12px; border: 1px solid #bbf7d0; margin-bottom: 12px">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px">
          <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop" alt="User" style="width: 32px; height: 32px; border-radius: 16px; object-fit: cover">
          <div>
            <div style="font-size: 14px; font-weight: 700; color: #1e293b">Lisa Chen</div>
            <div style="font-size: 11px; color: #64748b">2024-01-12 18:30</div>
          </div>
        </div>
        <div style="font-size: 14px; color: #065f46; line-height: 1.6; margin-bottom: 12px">
          "香味很好聞，包裝也很精美！會再回購的！收到後立刻點燃了，香味不會太濃也不會太淡，剛剛好。燃燒時間也很長，CP 值很高。店家出貨速度很快，包裝也很用心，下次還會繼續支持！"
        </div>
        <!-- 評價照片 -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px">
          <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=100&h=100&fit=crop" alt="Review" style="width: 100%; aspect-ratio: 1; border-radius: 8px; object-fit: cover">
          <img src="https://images.unsplash.com/photo-1602874801006-94c6e7b695ed?w=100&h=100&fit=crop" alt="Review" style="width: 100%; aspect-ratio: 1; border-radius: 8px; object-fit: cover">
          <img src="https://images.unsplash.com/photo-1603006905003-be475563bc59?w=100&h=100&fit=crop" alt="Review" style="width: 100%; aspect-ratio: 1; border-radius: 8px; object-fit: cover">
        </div>
      </div>

      <div style="display: grid; gap: 12px">
        <button class="btn btn-primary" style="padding: 14px" onclick="alert('已回覆客戶評價：感謝您的支持！')">
          <i class="fas fa-reply" style="margin-right: 6px"></i>回覆評價
        </button>
        <button class="btn" style="padding: 14px; background: #f1f5f9; border: none; color: #64748b" onclick="document.getElementById('review-modal-4').style.display='none'">
          關閉
        </button>
      </div>
    </div>
  </div>
</div>
`;
