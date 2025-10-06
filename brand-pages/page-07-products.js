// 品牌 07: 商品管理
document.getElementById("brand-07").innerHTML = `
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

      <h2 style="font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 24px">商品管理</h2>
      
      <button class="btn btn-primary" style="margin-bottom: 20px" onclick="alert('新增商品')">
        <i class="fas fa-plus" style="margin-right: 8px"></i>新增商品
      </button>

      <div style="display: grid; gap: 12px">
        ${[1, 2, 3]
          .map(
            (i) => `
          <div class="card" style="padding: 16px">
            <div style="display: flex; gap: 12px">
              <img src="https://images.unsplash.com/photo-152338121${i}0434-271e8be1f52b?w=80&h=80&fit=crop" alt="Product" style="width: 80px; height: 80px; border-radius: 12px; object-fit: cover">
              <div style="flex: 1">
                <div style="font-size: 16px; font-weight: 700; color: #1e293b; margin-bottom: 4px">經典風衣外套</div>
                <div style="font-size: 12px; color: #64748b; margin-bottom: 8px">庫存: 156</div>
                <div style="font-size: 18px; font-weight: 800; color: #f5576c">NT$ 3,280</div>
              </div>
              <button style="background: none; border: none; color: #64748b; cursor: pointer" onclick="alert('編輯商品')">
                <i class="fas fa-edit" style="font-size: 18px"></i>
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
