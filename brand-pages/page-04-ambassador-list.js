// 品牌 04: 大使列表
document.getElementById("brand-03").innerHTML = `
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
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">品牌大使</h2>
      </div>

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
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&h=60&fit=crop'" alt="User" style="width: 52px; height: 52px; border-radius: 26px; object-fit: cover; background: #f1f5f9">
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
