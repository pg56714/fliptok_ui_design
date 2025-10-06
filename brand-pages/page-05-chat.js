// 品牌 05: 與大使聊天室
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
      <button class="btn btn-text" style="padding: 8px; margin-bottom: 20px" onclick="goToPage(2)">
        <i class="fas fa-arrow-left" style="margin-right: 8px"></i> 返回
      </button>

      <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 24px">聊天室</h2>

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
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=52&h=52&fit=crop" alt="User" style="width: 52px; height: 52px; border-radius: 26px; object-fit: cover">
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
