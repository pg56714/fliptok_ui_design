// 品牌 06: 品牌收益報表與撥款管理
document.getElementById("brand-05").innerHTML = `
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
      <div style="position: relative; margin-bottom: 24px">
        <button 
          onclick="goToPage(1)" 
          style="position: absolute; left: 0; top: 4px; background: white; border: 1.5px solid #e2e8f0; width: 36px; height: 36px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #64748b; cursor: pointer; transition: all 0.3s"
          onmouseover="this.style.background='#f8fafc'; this.style.borderColor='#cbd5e1'"
          onmouseout="this.style.background='white'; this.style.borderColor='#e2e8f0'"
        >
          <i class="fas fa-arrow-left"></i>
        </button>
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">收益與撥款</h2>
        <p style="font-size: 14px; color: #64748b; padding-left: 48px; margin-top: 4px">查看銷售收益與撥款記錄</p>
      </div>

      <!-- 待撥款提醒 -->
      <div class="card" style="padding: 20px; margin-bottom: 20px; background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border: 2px solid #3b82f6">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px">
          <div style="width: 48px; height: 48px; background: #3b82f6; border-radius: 50%; display: flex; align-items: center; justify-content: center">
            <i class="fas fa-money-check-alt" style="font-size: 20px; color: white"></i>
          </div>
          <div style="flex: 1">
            <div style="font-size: 13px; color: #1e3a8a; font-weight: 600; margin-bottom: 4px">待撥款金額</div>
            <div style="font-size: 32px; font-weight: 900; color: #1e293b">NT$ 706,447</div>
          </div>
        </div>
        <div style="padding: 12px; background: white; border-radius: 12px; margin-bottom: 12px">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px">
            <span style="font-size: 12px; color: #64748b">結算週期</span>
            <span style="font-size: 12px; font-weight: 600; color: #1e293b">2024/01/08 - 2024/01/14</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px">
            <span style="font-size: 12px; color: #64748b">訂單總額</span>
            <span style="font-size: 12px; font-weight: 600; color: #1e293b">NT$ 856,300</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px">
            <span style="font-size: 12px; color: #64748b">平台抽成 (15%)</span>
            <span style="font-size: 12px; font-weight: 600; color: #ef4444">- NT$ 128,445</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center">
            <span style="font-size: 12px; color: #64748b">金流手續費 (2.5%)</span>
            <span style="font-size: 12px; font-weight: 600; color: #ef4444">- NT$ 21,408</span>
          </div>
        </div>
        <div style="padding: 10px; background: #fef3c7; border-radius: 10px; border: 1px solid #fde68a">
          <div style="font-size: 12px; color: #78350f; text-align: center">
            <i class="fas fa-clock" style="margin-right: 6px"></i>預計 2024/01/20 撥款
          </div>
        </div>
      </div>

      <!-- 收益統計 -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px">
        <div class="card" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)">
          <i class="fas fa-dollar-sign" style="font-size: 24px; color: #9f1239; margin-bottom: 12px"></i>
          <div style="font-size: 20px; font-weight: 900; color: #1e293b; margin-bottom: 4px">NT$ 1.2M</div>
          <div style="font-size: 12px; color: #64748b">本月銷售額</div>
        </div>
        <div class="card" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)">
          <i class="fas fa-shopping-cart" style="font-size: 24px; color: #064e3b; margin-bottom: 12px"></i>
          <div style="font-size: 20px; font-weight: 900; color: #1e293b; margin-bottom: 4px">3,248</div>
          <div style="font-size: 12px; color: #64748b">訂單數</div>
        </div>
        <div class="card" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)">
          <i class="fas fa-users" style="font-size: 24px; color: #78350f; margin-bottom: 12px"></i>
          <div style="font-size: 20px; font-weight: 900; color: #1e293b; margin-bottom: 4px">NT$ 156k</div>
          <div style="font-size: 12px; color: #64748b">大使收益</div>
        </div>
        <div class="card" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)">
          <i class="fas fa-chart-line" style="font-size: 24px; color: #3730a3; margin-bottom: 12px"></i>
          <div style="font-size: 20px; font-weight: 900; color: #1e293b; margin-bottom: 4px">NT$ 1.04M</div>
          <div style="font-size: 12px; color: #64748b">淨收益</div>
        </div>
      </div>

      <!-- 撥款記錄列表 -->
      <div style="display: grid; gap: 16px">
        <h3 style="font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: -8px">
          <i class="fas fa-history" style="color: #6366f1; margin-right: 8px"></i>撥款記錄
        </h3>

        <!-- 撥款 1: 已完成 -->
        <div class="card" style="padding: 0; overflow: hidden">
          <div style="padding: 16px; background: #d1fae5; border-bottom: 1px solid #a7f3d0">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px">
              <div>
                <div style="font-size: 13px; color: #064e3b; margin-bottom: 4px">撥款金額</div>
                <div style="font-size: 24px; font-weight: 900; color: #10b981">NT$ 582,350</div>
              </div>
              <span class="badge" style="background: #10b981; color: white; font-size: 12px; padding: 6px 12px">
                <i class="fas fa-check-circle" style="font-size: 10px; margin-right: 4px"></i>已撥款
              </span>
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: grid; gap: 12px; margin-bottom: 12px">
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">結算週期</span>
                <span style="font-size: 13px; font-weight: 600; color: #1e293b">2024/01/01 - 2024/01/07</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">訂單總額</span>
                <span style="font-size: 13px; font-weight: 600; color: #1e293b">NT$ 723,600</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">平台抽成</span>
                <span style="font-size: 13px; font-weight: 600; color: #ef4444">- NT$ 108,540</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">金流手續費</span>
                <span style="font-size: 13px; font-weight: 600; color: #ef4444">- NT$ 18,090</span>
              </div>
            </div>

            <div style="padding: 12px; background: #f0fdf4; border-radius: 12px; border: 1px solid #bbf7d0; margin-bottom: 12px">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px">
                <span style="font-size: 12px; color: #064e3b; font-weight: 600">撥款時間</span>
                <span style="font-size: 12px; color: #16a34a">2024-01-14 15:30</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 12px; color: #064e3b; font-weight: 600">交易序號</span>
                <span style="font-size: 11px; color: #16a34a; font-family: monospace">TX2024011400125</span>
              </div>
            </div>

            <button class="btn btn-outline" style="width: 100%; padding: 10px" onclick="alert('撥款明細\\n\\n結算週期：2024/01/01 - 2024/01/07\\n訂單數量：38 筆\\n\\n收入明細：\\n• 訂單總額：NT$ 723,600\\n\\n扣款明細：\\n• 平台抽成 15%：NT$ 108,540\\n• 金流手續費 2.5%：NT$ 18,090\\n• 大使佣金：NT$ 14,620\\n\\n實際撥款：NT$ 582,350\\n撥款時間：2024-01-14 15:30\\n\\n已匯入貴司帳戶：\\n台新銀行 (812)\\nXXXX-XXXX-XXXX-5678')">
              <i class="fas fa-file-invoice-dollar" style="margin-right: 6px"></i>查看明細
            </button>
          </div>
        </div>

        <!-- 撥款 2: 已完成 -->
        <div class="card" style="padding: 0; overflow: hidden">
          <div style="padding: 16px; background: #d1fae5; border-bottom: 1px solid #a7f3d0">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px">
              <div>
                <div style="font-size: 13px; color: #064e3b; margin-bottom: 4px">撥款金額</div>
                <div style="font-size: 24px; font-weight: 900; color: #10b981">NT$ 498,220</div>
              </div>
              <span class="badge" style="background: #10b981; color: white; font-size: 12px; padding: 6px 12px">
                <i class="fas fa-check-circle" style="font-size: 10px; margin-right: 4px"></i>已撥款
              </span>
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: grid; gap: 12px; margin-bottom: 12px">
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">結算週期</span>
                <span style="font-size: 13px; font-weight: 600; color: #1e293b">2023/12/25 - 2023/12/31</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">訂單總額</span>
                <span style="font-size: 13px; font-weight: 600; color: #1e293b">NT$ 618,500</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">扣款總計</span>
                <span style="font-size: 13px; font-weight: 600; color: #ef4444">- NT$ 120,280</span>
              </div>
            </div>

            <div style="padding: 12px; background: #f0fdf4; border-radius: 12px; border: 1px solid #bbf7d0; margin-bottom: 12px">
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 12px; color: #064e3b; font-weight: 600">撥款時間</span>
                <span style="font-size: 12px; color: #16a34a">2024-01-07 14:15</span>
              </div>
            </div>

            <button class="btn btn-outline" style="width: 100%; padding: 10px" onclick="alert('撥款明細')">
              <i class="fas fa-file-invoice-dollar" style="margin-right: 6px"></i>查看明細
            </button>
          </div>
        </div>

        <!-- 撥款 3: 處理中 -->
        <div class="card" style="padding: 0; overflow: hidden; border: 2px solid #3b82f6">
          <div style="padding: 16px; background: #dbeafe; border-bottom: 1px solid #bfdbfe">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px">
              <div>
                <div style="font-size: 13px; color: #1e3a8a; margin-bottom: 4px">撥款金額</div>
                <div style="font-size: 24px; font-weight: 900; color: #3b82f6">NT$ 706,447</div>
              </div>
              <span class="badge" style="background: #3b82f6; color: white; font-size: 12px; padding: 6px 12px">
                <i class="fas fa-hourglass-half" style="font-size: 10px; margin-right: 4px"></i>處理中
              </span>
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="padding: 12px; background: #fef3c7; border-radius: 12px; border: 1px solid #fde68a; margin-bottom: 12px">
              <div style="font-size: 13px; color: #78350f; font-weight: 600; margin-bottom: 6px">
                <i class="fas fa-info-circle" style="margin-right: 6px"></i>撥款進度
              </div>
              <div style="font-size: 12px; color: #92400e; line-height: 1.5">
                平台已審核通過，款項處理中<br/>
                預計 1-2 個工作天到帳
              </div>
            </div>

            <div style="display: grid; gap: 8px; margin-bottom: 12px">
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">結算週期</span>
                <span style="font-size: 13px; font-weight: 600; color: #1e293b">2024/01/08 - 2024/01/14</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">預計撥款</span>
                <span style="font-size: 13px; font-weight: 600; color: #3b82f6">2024-01-20</span>
          </div>
      </div>

            <button class="btn" style="width: 100%; padding: 10px; background: white; border: 1.5px solid #e2e8f0; color: #64748b" onclick="alert('結算中\\n\\n此筆款項尚在處理中\\n請耐心等候\\n\\n如有疑問請聯繫平台客服')">
              <i class="fas fa-clock" style="margin-right: 6px"></i>等待撥款中
            </button>
          </div>
        </div>
      </div>

      <!-- 銀行帳戶資訊 -->
      <div class="card" style="margin-top: 20px; padding: 16px; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 12px">
          <i class="fas fa-university" style="color: #4facfe; margin-right: 8px"></i>撥款帳戶資訊
        </h3>
        <div style="display: grid; gap: 8px; margin-bottom: 12px">
          <div style="display: flex; justify-content: space-between; align-items: center">
            <span style="font-size: 13px; color: #64748b">戶名</span>
            <span style="font-size: 13px; font-weight: 600; color: #1e293b">時尚潮牌股份有限公司</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center">
            <span style="font-size: 13px; color: #64748b">銀行</span>
            <span style="font-size: 13px; font-weight: 600; color: #1e293b">台新銀行 (812)</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center">
            <span style="font-size: 13px; color: #64748b">分行</span>
            <span style="font-size: 13px; font-weight: 600; color: #1e293b">敦南分行</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center">
            <span style="font-size: 13px; color: #64748b">帳號</span>
            <span style="font-size: 13px; font-weight: 600; color: #1e293b; font-family: monospace">XXXX-XXXX-XXXX-5678</span>
          </div>
        </div>
        <button class="btn btn-outline" style="width: 100%; padding: 10px" onclick="alert('修改帳戶資訊功能\\n\\n請聯繫平台客服進行變更')">
          <i class="fas fa-edit" style="margin-right: 6px"></i>修改帳戶資訊
        </button>
      </div>
    </div>
  </div>
</div>
`;
