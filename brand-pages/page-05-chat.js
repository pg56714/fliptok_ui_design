// 品牌 05: 與大使聊天室
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
      <div style="position: relative; margin-bottom: 24px">
        <button 
          onclick="goToPage(1)" 
          style="position: absolute; left: 0; top: 4px; background: white; border: 1.5px solid #e2e8f0; width: 36px; height: 36px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #64748b; cursor: pointer; transition: all 0.3s"
          onmouseover="this.style.background='#f8fafc'; this.style.borderColor='#cbd5e1'"
          onmouseout="this.style.background='white'; this.style.borderColor='#e2e8f0'"
        >
          <i class="fas fa-arrow-left"></i>
        </button>
        <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; padding-left: 48px">聊天室</h2>
      </div>

      <div style="display: grid; gap: 12px">
        ${[
          ["Emily Fashion", "收到！我會盡快修改", "2小時前", true],
          ["Sarah Beauty", "好的，謝謝通知", "昨天", false],
          ["Alex Lifestyle", "請問新品什麼時候上架？", "3天前", false],
        ]
          .map(
            ([name, msg, time, unread]) => `
          <div class="card" style="padding: 16px; cursor: pointer; ${
            unread ? "border: 1.5px solid #f5576c" : ""
          }" onclick="alert('進入聊天：${name}')">
            <div style="display: flex; align-items: center; gap: 12px">
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=52&h=52&fit=crop" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=52&h=52&fit=crop'" alt="User" style="width: 52px; height: 52px; border-radius: 26px; object-fit: cover; background: #f1f5f9">
              <div style="flex: 1">
                <div style="display: flex; justify-content: space-between; margin-bottom: 4px">
                  <div style="font-size: 16px; font-weight: 700; color: #1e293b">${name}</div>
                  <div style="font-size: 11px; color: #94a3b8">${time}</div>
                </div>
                <div style="font-size: 14px; color: #64748b; display: flex; align-items: center; gap: 8px">
                  <span style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">${msg}</span>
                  ${
                    unread
                      ? '<span style="width: 8px; height: 8px; background: #ef4444; border-radius: 4px"></span>'
                      : ""
                  }
                </div>
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
