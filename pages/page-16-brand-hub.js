// 頁面 16: 品牌頁佔位（自動生成清單與大使數）
(function () {
  const brands = [
    {
      name: "時尚潮牌 A",
      ambassadors: 856,
      tag: "#時尚",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=240&h=160&fit=crop",
    },
    {
      name: "精品美妝 B",
      ambassadors: 642,
      tag: "#美妝",
      img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=240&h=160&fit=crop",
    },
    {
      name: "生活居家 C",
      ambassadors: 423,
      tag: "#居家",
      img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=240&h=160&fit=crop",
    },
    {
      name: "科技品牌 D",
      ambassadors: 328,
      tag: "#科技",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=240&h=160&fit=crop",
    },
  ];

  function applyBrandAction(name) {
    if (name === "時尚潮牌 A") {
      goToPage(15);
      return;
    }
    alert("已送出加入申請（示意）");
  }

  const listHtml = brands
    .map((b) => {
      const isJoined = b.name === "時尚潮牌 A";
      const ctaLabel = isJoined ? "進入" : "申請";
      return `
    <div class="card" style="padding:12px; overflow:hidden">
      <div style="display:flex; gap:12px; align-items:center">
        <img src="${b.img}" alt="${
        b.name
      }" style="width:96px; height:64px; border-radius:12px; object-fit:cover; flex-shrink:0">
        <div style="flex:1; display:flex; flex-direction:column; gap:8px; min-width:160px">
          <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px">
              <div style="font-size:16px; font-weight:800; color:#1e293b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">${
                b.name
              }</div>
              <span style="padding:2px 6px; background:#eef2ff; color:#6366f1; border-radius:8px; font-size:10px; font-weight:700">${
                b.tag
              }</span>
            </div>
            <div style="font-size:12px; color:#64748b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">${
              b.ambassadors
            } 位大使</div>
          </div>
          <div style="display:flex; justify-content:flex-end">
            <button class="btn btn-primary" style="white-space:nowrap; padding:6px 12px; font-size:12px" onclick="(${applyBrandAction.toString()})('${
        b.name
      }')">${ctaLabel}</button>
          </div>
        </div>
      </div>
    </div>
  `;
    })
    .join("");

  document.getElementById("page-16").innerHTML = `
  <div class="phone-container">
    <div class="status-bar">
      <div class="status-time">9:41</div>
      <div class="status-icons">
        <i class="fas fa-signal"></i>
        <i class="fas fa-wifi"></i>
        <i class="fas fa-battery-full"></i>
      </div>
    </div>

    <div class="page-content">
      <div class="header-bar">
        <div class="header-title">品牌一覽</div>
        <div class="header-subtitle">品牌清單</div>
      </div>

      <div style="padding:16px">
        <div style="position: relative; margin-bottom: 12px">
          <input type="text" class="form-input" placeholder="搜尋品牌..." style="padding-left: 44px">
          <i class="fas fa-search" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); color: #94a3b8"></i>
        </div>

        <div style="font-size: 12px; color:#64748b; margin: 8px 0 12px">「已加入」顯示「進入」，其他品牌顯示「申請」</div>

        <div style="display:grid; gap:12px">
          ${listHtml}
        </div>

        <div style="margin-top:16px; display:flex; gap:8px">
          <button class="btn btn-secondary" onclick="goToPage(15)">
            <i class="fas fa-arrow-left" style="margin-right:8px"></i>返回品牌後台
          </button>
        </div>
      </div>
    </div>

    <div class="tab-bar">
      <div class="tab-item">
        <i class="fas fa-home tab-icon"></i>
        <span class="tab-label">首頁</span>
      </div>
      <div class="tab-item">
        <i class="fas fa-compass tab-icon"></i>
        <span class="tab-label">探索</span>
      </div>
      <div class="tab-item">
        <i class="fas fa-plus-circle tab-icon"></i>
        <span class="tab-label">創作</span>
      </div>
      <div class="tab-item">
        <i class="fas fa-wallet tab-icon"></i>
        <span class="tab-label">錢包</span>
      </div>
      <div class="tab-item active">
        <i class="fas fa-user tab-icon"></i>
        <span class="tab-label">我的</span>
      </div>
    </div>
  </div>
  `;
})();
