// Admin 04: 品牌列表管理
document.getElementById("admin-04").innerHTML = `
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
      <button class="btn btn-text" style="padding: 8px; margin-bottom: 20px" onclick="goToPage(2)">
        <i class="fas fa-arrow-left" style="margin-right: 8px"></i> 返回
      </button>

      <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 24px">品牌列表</h2>

      <div style="display: grid; gap: 12px">
        ${[
          ["時尚潮牌 A", "856", "NT$ 458k", "Admin User"],
          ["精品美妝 B", "642", "NT$ 328k", "Admin User"],
          ["生活居家 C", "423", "NT$ 256k", "Admin User"],
          ["科技品牌 D", "328", "NT$ 189k", "Admin User"],
        ]
          .map(
            ([name, ambassadors, revenue, creator]) => `
          <div class="card" style="padding: 16px">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px">
              <div style="width: 52px; height: 52px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 26px; display: flex; align-items: center; justify-content: center; color: white; font-size: 20px; font-weight: 800; flex-shrink: 0">
                ${name[0]}
              </div>
              <div style="flex: 1">
                <div style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 2px">${name}</div>
                <div style="font-size: 12px; color: #64748b">${ambassadors} 位大使</div>
              </div>
              <button style="background: none; border: none; color: #64748b; cursor: pointer" onclick="alert('編輯品牌')">
                <i class="fas fa-edit" style="font-size: 18px"></i>
              </button>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; padding: 12px; background: #f8fafc; border-radius: 12px; font-size: 12px">
              <div>
                <div style="color: #64748b; margin-bottom: 4px">月收益</div>
                <div style="font-weight: 700; color: #1e293b">${revenue}</div>
              </div>
              <div>
                <div style="color: #64748b; margin-bottom: 4px">創建者</div>
                <div style="font-weight: 700; color: #1e293b">${creator}</div>
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  </div>
</div>
`;
