// 品牌 04: 大使列表
document.getElementById("brand-04").innerHTML = `
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

      <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 24px">品牌大使</h2>

      <div style="display: grid; gap: 12px">
        ${[
          ["Emily Fashion", "@emily_fashion", "156", "NT$ 45,230"],
          ["Sarah Beauty", "@sarah_beauty", "89", "NT$ 28,560"],
          ["Alex Lifestyle", "@alex_lifestyle", "124", "NT$ 38,920"],
        ]
          .map(
            ([name, handle, posts, revenue]) => `
          <div class="card" style="padding: 16px; cursor: pointer" onclick="goToPage(5)">
            <div style="display: flex; align-items: center; gap: 12px">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop" alt="User" style="width: 52px; height: 52px; border-radius: 26px; object-fit: cover">
              <div style="flex: 1">
                <div style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 2px">${name}</div>
                <div style="font-size: 12px; color: #64748b; margin-bottom: 6px">${handle}</div>
                <div style="display: flex; gap: 12px; font-size: 11px; color: #64748b">
                  <span>${posts} 作品</span>
                  <span>收益 ${revenue}</span>
                </div>
              </div>
              <i class="fas fa-chevron-right" style="color: #94a3b8"></i>
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
