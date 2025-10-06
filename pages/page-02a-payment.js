// 頁面 02A: 付費頁面（品牌/興趣選擇後）
document.getElementById("page-02a").innerHTML = `
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
      <button class="btn-icon" style="position: absolute; top: 60px; left: 20px; z-index: 10" onclick="goToPage(3)">
        <i class="fas fa-arrow-left"></i>
      </button>

      <div style="text-align: center; margin-top: 40px; margin-bottom: 32px">
        <div style="width: 100px; height: 100px; margin: 0 auto 20px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center">
          <i class="fas fa-crown" style="font-size: 48px; color: white"></i>
        </div>
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 8px">解鎖完整體驗</h2>
        <p style="font-size: 14px; color: #64748b">成為品牌社群會員，享受專屬內容與優惠</p>
      </div>

      <!-- 方案選擇 -->
      <div style="display: grid; gap: 16px; margin-bottom: 24px">
        <!-- 月付方案 -->
        <div style="background: white; border: 2px solid #e2e8f0; border-radius: 20px; padding: 20px; transition: all 0.3s; cursor: pointer" onclick="this.parentElement.querySelectorAll('div').forEach(d => d.style.borderColor='#e2e8f0'); this.style.borderColor='#6366f1'">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px">
            <div>
              <div style="font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: 4px">月付方案</div>
              <div style="font-size: 13px; color: #64748b">隨時可取消</div>
            </div>
            <div style="text-align: right">
              <div style="font-size: 28px; font-weight: 800; color: #6366f1">$299</div>
              <div style="font-size: 13px; color: #64748b">/ 月</div>
            </div>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px">
            <span style="background: #f1f5f9; color: #64748b; padding: 4px 12px; border-radius: 20px; font-size: 12px">
              <i class="fas fa-check" style="color: #10b981; margin-right: 4px"></i>專屬內容
            </span>
            <span style="background: #f1f5f9; color: #64748b; padding: 4px 12px; border-radius: 20px; font-size: 12px">
              <i class="fas fa-check" style="color: #10b981; margin-right: 4px"></i>早鳥優惠
            </span>
          </div>
        </div>

        <!-- 年付方案（推薦） -->
        <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border: 2px solid #6366f1; border-radius: 20px; padding: 20px; position: relative; box-shadow: 0 8px 24px rgba(99,102,241,0.25)">
          <div style="position: absolute; top: -12px; right: 20px; background: #f59e0b; color: white; padding: 4px 16px; border-radius: 20px; font-size: 12px; font-weight: 700; box-shadow: 0 4px 12px rgba(245,158,11,0.4)">
            省 40%
          </div>
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px">
            <div>
              <div style="font-size: 18px; font-weight: 700; color: white; margin-bottom: 4px">年付方案</div>
              <div style="font-size: 13px; color: rgba(255,255,255,0.8)">最划算的選擇</div>
            </div>
            <div style="text-align: right">
              <div style="font-size: 28px; font-weight: 800; color: white">$1,999</div>
              <div style="font-size: 13px; color: rgba(255,255,255,0.8)">/ 年</div>
            </div>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px">
            <span style="background: rgba(255,255,255,0.2); color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px">
              <i class="fas fa-check" style="margin-right: 4px"></i>所有月付功能
            </span>
            <span style="background: rgba(255,255,255,0.2); color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px">
              <i class="fas fa-star" style="margin-right: 4px"></i>額外獎勵
            </span>
          </div>
        </div>
      </div>

      <!-- 會員權益 -->
      <div style="background: #f8fafc; border-radius: 16px; padding: 20px; margin-bottom: 24px">
        <div style="font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 16px">會員專屬權益</div>
        <div style="display: grid; gap: 12px">
          <div style="display: flex; align-items: center; gap: 12px">
            <i class="fas fa-check-circle" style="color: #10b981; font-size: 20px"></i>
            <span style="font-size: 14px; color: #64748b">瀏覽所有品牌內容</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px">
            <i class="fas fa-check-circle" style="color: #10b981; font-size: 20px"></i>
            <span style="font-size: 14px; color: #64748b">參與品牌專屬活動</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px">
            <i class="fas fa-check-circle" style="color: #10b981; font-size: 20px"></i>
            <span style="font-size: 14px; color: #64748b">優先獲得新品資訊</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px">
            <i class="fas fa-check-circle" style="color: #10b981; font-size: 20px"></i>
            <span style="font-size: 14px; color: #64748b">解鎖大使申請資格</span>
          </div>
        </div>
      </div>

      <!-- 付款按鈕 -->
      <button class="btn btn-primary" onclick="alert('導向信用卡綁定頁面'); goToPage('02b')">
        繼續付款
      </button>
    </div>
  </div>
</div>
`;
