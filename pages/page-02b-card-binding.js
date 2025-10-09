// 頁面 02B: 信用卡綁定頁面
document.getElementById("page-02b").innerHTML = `
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
      <button class="btn-icon" style="position: absolute; top: 60px; left: 20px; z-index: 10" onclick="goToPage(9)">
        <i class="fas fa-arrow-left"></i>
      </button>

      <div style="text-align: center; margin-top: 40px; margin-bottom: 32px">
        <div style="width: 80px; height: 80px; margin: 0 auto 20px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center">
          <i class="fas fa-credit-card" style="font-size: 36px; color: white"></i>
        </div>
        <h2 style="font-size: 26px; font-weight: 800; color: #1e293b; margin-bottom: 8px">綁定付款方式</h2>
        <p style="font-size: 14px; color: #64748b">安全加密，支援快速結帳與訂閱服務</p>
      </div>

      <!-- 信用卡表單 -->
      <div style="background: white; border-radius: 20px; padding: 24px; margin-bottom: 24px; box-shadow: 0 4px 16px rgba(0,0,0,0.08)">
        <!-- 卡號 -->
        <div style="margin-bottom: 20px">
          <label style="display: block; font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 8px">卡號</label>
          <div style="position: relative">
            <input type="text" class="form-input" placeholder="1234 5678 9012 3456" maxlength="19" style="padding-right: 50px">
            <div style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); display: flex; gap: 6px">
              <i class="fab fa-cc-visa" style="font-size: 24px; color: #1434CB"></i>
              <i class="fab fa-cc-mastercard" style="font-size: 24px; color: #EB001B"></i>
            </div>
          </div>
        </div>

        <!-- 持卡人姓名 -->
        <div style="margin-bottom: 20px">
          <label style="display: block; font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 8px">持卡人姓名</label>
          <input type="text" class="form-input" placeholder="WANG DA MING">
        </div>

        <!-- 有效期限與 CVV -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px">
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 8px">有效期限</label>
            <input type="text" class="form-input" placeholder="MM/YY" maxlength="5">
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; color: #64748b; margin-bottom: 8px">CVV</label>
            <input type="text" class="form-input" placeholder="123" maxlength="3">
          </div>
        </div>
      </div>

      <!-- 綁定用途說明 -->
      <div style="background: #f8fafc; border-radius: 16px; padding: 20px; margin-bottom: 24px">
        <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 16px">綁定後可使用於</div>
        <div style="display: grid; gap: 12px">
          <div style="display: flex; align-items: center; gap: 12px">
            <i class="fas fa-check-circle" style="color: #10b981; font-size: 20px"></i>
            <span style="font-size: 14px; color: #64748b">快速結帳購物</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px">
            <i class="fas fa-check-circle" style="color: #10b981; font-size: 20px"></i>
            <span style="font-size: 14px; color: #64748b">訂閱會員服務</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px">
            <i class="fas fa-check-circle" style="color: #10b981; font-size: 20px"></i>
            <span style="font-size: 14px; color: #64748b">自動扣款續訂</span>
          </div>
        </div>
      </div>

      <!-- 安全提示 -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px; padding: 16px; background: #ecfdf5; border-radius: 12px">
        <i class="fas fa-shield-alt" style="color: #10b981; font-size: 20px"></i>
        <div style="font-size: 13px; color: #065f46">
          <div style="font-weight: 700; margin-bottom: 2px">安全加密保護</div>
          <div>你的付款資訊將被安全加密儲存</div>
        </div>
      </div>

      <!-- 確認綁定按鈕 -->
      <button class="btn btn-primary" onclick="alert('信用卡綁定成功！'); goToPage(4)">
        <i class="fas fa-check" style="margin-right: 8px"></i>
        確認綁定
      </button>
      
      <button class="btn btn-outline" style="margin-top: 12px" onclick="goToPage(4)">
        稍後再說
      </button>
    </div>
  </div>
</div>
`;
