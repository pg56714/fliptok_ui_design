// Admin 06: 財務結算管理
document.getElementById("admin-05").innerHTML = `
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
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">財務結算</h2>
        <p style="font-size: 14px; color: #64748b; padding-left: 48px; margin-top: 4px">管理金流結算與商家撥款</p>
      </div>

      <!-- 財務概況卡片 -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px">
        <div class="card" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)">
          <div style="font-size: 12px; color: #1e3a8a; margin-bottom: 8px; font-weight: 600">待結算金額</div>
          <div style="font-size: 28px; font-weight: 900; color: #1e3a8a; margin-bottom: 4px">NT$ 2.3M</div>
          <div style="font-size: 11px; color: #1e40af">本週訂單</div>
        </div>
        <div class="card" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)">
          <div style="font-size: 12px; color: #78350f; margin-bottom: 8px; font-weight: 600">待撥款商家</div>
          <div style="font-size: 28px; font-weight: 900; color: #78350f; margin-bottom: 4px">12</div>
          <div style="font-size: 11px; color: #92400e">品牌商家</div>
        </div>
        <div class="card" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)">
          <div style="font-size: 12px; color: #064e3b; margin-bottom: 8px; font-weight: 600">已撥款本月</div>
          <div style="font-size: 28px; font-weight: 900; color: #064e3b; margin-bottom: 4px">NT$ 5.8M</div>
          <div style="font-size: 11px; color: #065f46">28 筆交易</div>
        </div>
        <div class="card" style="text-align: center; padding: 20px; background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)">
          <div style="font-size: 12px; color: #831843; margin-bottom: 8px; font-weight: 600">平台淨收益</div>
          <div style="font-size: 28px; font-weight: 900; color: #831843; margin-bottom: 4px">NT$ 682K</div>
          <div style="font-size: 11px; color: #9f1239">本月累計</div>
        </div>
      </div>

      <!-- 功能分類標籤 -->
      <div style="display: flex; gap: 8px; margin-bottom: 20px; overflow-x: auto; padding-bottom: 4px">
        <button class="badge" style="padding: 10px 16px; background: #4facfe; color: white; border: none; cursor: pointer; white-space: nowrap; font-weight: 600">
          待撥款 (12)
        </button>
        <button class="badge" style="padding: 10px 16px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; cursor: pointer; white-space: nowrap">
          金流結算
        </button>
        <button class="badge" style="padding: 10px 16px; background: white; color: #64748b; border: 1.5px solid #e2e8f0; cursor: pointer; white-space: nowrap">
          撥款記錄
        </button>
      </div>

      <!-- 待撥款商家列表 -->
      <div style="display: grid; gap: 16px">
        <!-- 商家 1: 時尚潮牌 A -->
        <div class="card" style="padding: 0; overflow: hidden; border: 2px solid #3b82f6">
          <div style="padding: 16px; background: #dbeafe; border-bottom: 1px solid #bfdbfe">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <div style="display: flex; align-items: center; gap: 12px">
                <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center">
                  <i class="fas fa-store" style="font-size: 20px; color: white"></i>
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1e293b">時尚潮牌 A</div>
                  <div style="font-size: 12px; color: #64748b; margin-top: 2px">Brand ID: BR001</div>
                </div>
              </div>
              <span class="badge" style="background: #3b82f6; color: white; font-size: 12px; padding: 6px 12px">
                待撥款
              </span>
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: grid; gap: 12px; margin-bottom: 16px">
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">訂單總額</span>
                <span style="font-size: 16px; font-weight: 700; color: #1e293b">NT$ 856,300</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">平台抽成 (15%)</span>
                <span style="font-size: 14px; font-weight: 600; color: #ef4444">- NT$ 128,445</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">金流手續費 (2.5%)</span>
                <span style="font-size: 14px; font-weight: 600; color: #ef4444">- NT$ 21,408</span>
              </div>
              <div style="height: 1px; background: #e2e8f0"></div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 14px; font-weight: 700; color: #1e293b">應撥款金額</span>
                <span style="font-size: 20px; font-weight: 900; color: #10b981">NT$ 706,447</span>
              </div>
            </div>

            <div style="padding: 12px; background: #f0fdf4; border-radius: 12px; border: 1px solid #bbf7d0; margin-bottom: 16px">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px">
                <span style="font-size: 12px; color: #064e3b; font-weight: 600">結算週期</span>
                <span style="font-size: 12px; color: #16a34a">2024/01/08 - 2024/01/14</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 12px; color: #064e3b; font-weight: 600">訂單數量</span>
                <span style="font-size: 12px; color: #16a34a">47 筆</span>
              </div>
            </div>

            <div style="display: grid; gap: 8px">
              <button class="btn btn-primary" style="padding: 12px" onclick="if(confirm('確認撥款給「時尚潮牌 A」\\n\\n應撥款金額：NT$ 706,447\\n銀行帳號：XXX-XXXX-XXXX-5678\\n\\n確認後將立即執行撥款')) alert('撥款成功！\\n\\n撥款金額：NT$ 706,447\\n預計 1-2 個工作天到帳')">
                <i class="fas fa-money-check-alt" style="margin-right: 6px"></i>確認撥款
              </button>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px">
                <button class="btn btn-outline" style="padding: 10px; font-size: 13px" onclick="alert('結算明細\\n\\n訂單總額：NT$ 856,300\\n訂單數量：47 筆\\n\\n扣款項目：\\n• 平台抽成 15%：NT$ 128,445\\n• 金流手續費 2.5%：NT$ 21,408\\n\\n實撥金額：NT$ 706,447')">
                  <i class="fas fa-file-invoice-dollar" style="margin-right: 4px"></i>查看明細
                </button>
                <button class="btn" style="padding: 10px; background: white; border: 1.5px solid #e2e8f0; color: #64748b; font-size: 13px" onclick="alert('銀行帳號資訊\\n\\n戶名：時尚潮牌股份有限公司\\n銀行：台新銀行 (812)\\n分行：敦南分行\\n帳號：XXXX-XXXX-XXXX-5678')">
                  <i class="fas fa-university" style="margin-right: 4px"></i>帳戶資訊
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 商家 2: 精品美妝 B -->
        <div class="card" style="padding: 0; overflow: hidden; border: 2px solid #3b82f6">
          <div style="padding: 16px; background: #dbeafe; border-bottom: 1px solid #bfdbfe">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <div style="display: flex; align-items: center; gap: 12px">
                <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%); display: flex; align-items: center; justify-content: center">
                  <i class="fas fa-store" style="font-size: 20px; color: white"></i>
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1e293b">精品美妝 B</div>
                  <div style="font-size: 12px; color: #64748b; margin-top: 2px">Brand ID: BR002</div>
                </div>
              </div>
              <span class="badge" style="background: #3b82f6; color: white; font-size: 12px; padding: 6px 12px">
                待撥款
              </span>
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="display: grid; gap: 12px; margin-bottom: 16px">
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">訂單總額</span>
                <span style="font-size: 16px; font-weight: 700; color: #1e293b">NT$ 523,800</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">平台抽成 (15%)</span>
                <span style="font-size: 14px; font-weight: 600; color: #ef4444">- NT$ 78,570</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 13px; color: #64748b">金流手續費 (2.5%)</span>
                <span style="font-size: 14px; font-weight: 600; color: #ef4444">- NT$ 13,095</span>
              </div>
              <div style="height: 1px; background: #e2e8f0"></div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 14px; font-weight: 700; color: #1e293b">應撥款金額</span>
                <span style="font-size: 20px; font-weight: 900; color: #10b981">NT$ 432,135</span>
              </div>
            </div>

            <div style="padding: 12px; background: #f0fdf4; border-radius: 12px; border: 1px solid #bbf7d0; margin-bottom: 16px">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px">
                <span style="font-size: 12px; color: #064e3b; font-weight: 600">結算週期</span>
                <span style="font-size: 12px; color: #16a34a">2024/01/08 - 2024/01/14</span>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center">
                <span style="font-size: 12px; color: #064e3b; font-weight: 600">訂單數量</span>
                <span style="font-size: 12px; color: #16a34a">32 筆</span>
              </div>
            </div>

            <div style="display: grid; gap: 8px">
              <button class="btn btn-primary" style="padding: 12px" onclick="if(confirm('確認撥款給「精品美妝 B」\\n\\n應撥款金額：NT$ 432,135\\n銀行帳號：XXX-XXXX-XXXX-9012\\n\\n確認後將立即執行撥款')) alert('撥款成功！\\n\\n撥款金額：NT$ 432,135\\n預計 1-2 個工作天到帳')">
                <i class="fas fa-money-check-alt" style="margin-right: 6px"></i>確認撥款
              </button>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px">
                <button class="btn btn-outline" style="padding: 10px; font-size: 13px" onclick="alert('結算明細')">
                  <i class="fas fa-file-invoice-dollar" style="margin-right: 4px"></i>查看明細
                </button>
                <button class="btn" style="padding: 10px; background: white; border: 1.5px solid #e2e8f0; color: #64748b; font-size: 13px" onclick="alert('帳戶資訊')">
                  <i class="fas fa-university" style="margin-right: 4px"></i>帳戶資訊
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- 商家 3: 生活居家 C -->
        <div class="card" style="padding: 0; overflow: hidden">
          <div style="padding: 16px; background: #f8fafc; border-bottom: 1px solid #e2e8f0">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <div style="display: flex; align-items: center; gap: 12px">
                <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); display: flex; align-items: center; justify-content: center">
                  <i class="fas fa-store" style="font-size: 20px; color: #1e293b"></i>
                </div>
                <div>
                  <div style="font-size: 16px; font-weight: 800; color: #1e293b">生活居家 C</div>
                  <div style="font-size: 12px; color: #64748b; margin-top: 2px">Brand ID: BR003</div>
                </div>
              </div>
              <span class="badge" style="background: #64748b; color: white; font-size: 12px; padding: 6px 12px">
                已撥款
              </span>
            </div>
          </div>
          
          <div style="padding: 16px">
            <div style="padding: 12px; background: #d1fae5; border-radius: 12px; border: 1px solid #a7f3d0; margin-bottom: 12px">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px">
                <i class="fas fa-check-circle" style="color: #059669; font-size: 14px"></i>
                <span style="font-size: 13px; font-weight: 700; color: #064e3b">撥款完成</span>
              </div>
              <div style="font-size: 12px; color: #065f46; margin-bottom: 4px">
                撥款金額：NT$ 368,250
              </div>
              <div style="font-size: 11px; color: #16a34a">
                撥款時間：2024-01-14 15:30
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px">
              <span style="font-size: 13px; color: #64748b">結算週期</span>
              <span style="font-size: 13px; font-weight: 600; color: #1e293b">2024/01/01 - 2024/01/07</span>
            </div>

            <button class="btn btn-outline" style="width: 100%; padding: 10px; font-size: 13px" onclick="alert('撥款記錄\\n\\n訂單總額：NT$ 456,000\\n平台抽成：NT$ 68,400\\n金流手續費：NT$ 11,400\\n實撥金額：NT$ 368,250\\n\\n撥款時間：2024-01-14 15:30\\n交易序號：TX2024011400125')">
              <i class="fas fa-history" style="margin-right: 6px"></i>查看記錄
            </button>
          </div>
        </div>
      </div>

      <!-- 批次操作區 -->
      <div class="card" style="margin-top: 20px; padding: 16px; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)">
        <h3 style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 12px">
          <i class="fas fa-tasks" style="color: #4facfe; margin-right: 8px"></i>批次操作
        </h3>
        <div style="display: grid; gap: 8px">
          <button class="btn" style="background: #4facfe; color: white; border: none; padding: 12px" onclick="if(confirm('確認批次撥款給所有待撥款商家？\\n\\n共 12 個商家\\n總金額：NT$ 2,345,680\\n\\n此操作無法復原')) alert('批次撥款已提交！\\n\\n系統將逐一處理撥款\\n預計 30 分鐘內完成')">
            <i class="fas fa-check-double" style="margin-right: 8px"></i>批次撥款 (12 個商家)
          </button>
          <button class="btn btn-outline" style="padding: 10px" onclick="alert('匯出 Excel 報表')">
            <i class="fas fa-file-excel" style="margin-right: 8px"></i>匯出結算報表
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`;
