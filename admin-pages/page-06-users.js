// Admin 06: 用戶管理
document.getElementById("admin-06").innerHTML = `
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

      <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 24px">用戶管理</h2>

      <div style="position: relative; margin-bottom: 24px">
        <input type="text" class="form-input" placeholder="搜尋用戶..." style="padding-left: 44px">
        <i class="fas fa-search" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #94a3b8"></i>
      </div>

      <div style="display: grid; gap: 12px">
        ${[
          ["Emily Chen", "@emily_fashion", "大使", "12.5k 粉絲"],
          ["Sarah Wang", "@sarah_beauty", "大使", "8.3k 粉絲"],
          ["Alex Lin", "@alex_lifestyle", "大使", "6.2k 粉絲"],
          ["John Doe", "@john_user", "一般用戶", "156 粉絲"],
        ]
          .map(
            ([name, handle, role, followers]) => `
          <div class="card" style="padding: 16px">
            <div style="display: flex; align-items: center; gap: 12px">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=52&h=52&fit=crop" alt="User" style="width: 52px; height: 52px; border-radius: 26px; object-fit: cover">
              <div style="flex: 1">
                <div style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 2px">${name}</div>
                <div style="font-size: 12px; color: #64748b; margin-bottom: 6px">${handle}</div>
                <div style="display: flex; gap: 8px; align-items: center">
                  <span class="badge ${
                    role === "大使" ? "badge-primary" : ""
                  }" style="font-size: 10px">${role}</span>
                  <span style="font-size: 11px; color: #64748b">${followers}</span>
                </div>
              </div>
              <button style="background: none; border: none; color: #64748b; cursor: pointer" onclick="alert('管理用戶')">
                <i class="fas fa-ellipsis-v" style="font-size: 18px"></i>
              </button>
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
