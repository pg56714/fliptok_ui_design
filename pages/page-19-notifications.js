// 頁面 19: 通知中心（含通知設定與里程碑規則）
document.getElementById("page-19").innerHTML = `
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
    <div class="header-bar" style="position: relative">
      <div class="header-title">通知</div>
      <div class="header-subtitle">最新系統與互動提醒</div>
      <button id="open-settings" title="通知設定" style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); background: white; border: 1.5px solid #e2e8f0; width: 36px; height: 36px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #64748b; cursor: pointer">
        <i class="fas fa-sliders-h"></i>
      </button>
    </div>

    <div style="padding: 16px">
      <div class="card" style="margin-bottom: 16px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <i class="fas fa-bell" style="opacity:0.9"></i>
            <div style="font-size:14px;font-weight:800">通知匣</div>
          </div>
          <button class="btn" style="width:auto;padding:8px 12px;font-size:13px;background:rgba(255,255,255,0.15);border:none;color:white" onclick="markAllRead()">設為已讀</button>
        </div>
      </div>

      <div style="display:grid;gap:12px">
        <!-- 通知 1 -->
        <div class="list-item" style="position:relative;background:#ffffff;border:1px solid #eef2ff;border-radius:16px; box-shadow: 0 4px 12px rgba(99,102,241,0.08); padding:20px">
          <div class="list-icon" style="background:#eef2ff;color:#6366f1">
            <i class="fas fa-comment"></i>
          </div>
          <div class="list-content" style="width:100%">
            <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:4px">
              <div class="list-title">@sarah_beauty 在你的影片留言</div>
              <span style="flex-shrink:0; font-size:11px; padding:4px 10px; border-radius:999px; background:#f1f5f9; color:#64748b">5 分鐘前</span>
            </div>
            <div class="list-subtitle">「妝容超美！想看教學～」</div>
          </div>
          <button class="btn" style="width:auto;padding:8px 12px;font-size:12px;background:white;border:1.5px solid #e2e8f0;color:#64748b">查看</button>
          <span style="position:absolute; right:14px; top:14px; width:10px; height:10px; background:#ef4444; border-radius:5px"></span>
        </div>

        <!-- 通知 2 -->
        <div class="list-item" style="position:relative;background:#ffffff;border:1px solid #e0f2fe;border-radius:16px; box-shadow: 0 4px 12px rgba(14,165,233,0.08); padding:20px">
          <div class="list-icon" style="background:#ecfeff;color:#06b6d4">
            <i class="fas fa-user-plus"></i>
          </div>
          <div class="list-content" style="width:100%">
            <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:4px">
              <div class="list-title">@alex_lifestyle 開始關注你</div>
              <span style="flex-shrink:0; font-size:11px; padding:4px 10px; border-radius:999px; background:#f1f5f9; color:#64748b">剛剛</span>
            </div>
            <div class="list-subtitle">向他說聲嗨吧！</div>
          </div>
          <button class="btn btn-primary" style="width:auto;padding:8px 12px;font-size:12px" onclick="alert('已回關')">回關</button>
        </div>

        <!-- 通知 3：粉絲影響購買 -->
        <div class="list-item" style="position:relative;background:#fffbeb;border:1px solid #fde68a;border-radius:16px; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.12); padding:20px">
          <div class="list-icon" style="background:#fef3c7;color:#f59e0b">
            <i class="fas fa-receipt"></i>
          </div>
          <div class="list-content" style="width:100%">
            <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:4px">
              <div class="list-title">你的粉絲因你的影片購買了「經典風衣外套」</div>
              <span style="flex-shrink:0; font-size:11px; padding:4px 10px; border-radius:999px; background:#fff7ed; color:#b45309">1 小時前</span>
            </div>
            <div class="list-subtitle">預估獎勵 NT$ 120</div>
          </div>
          <button class="btn" style="width:auto;padding:8px 12px;font-size:12px;background:white;border:1.5px solid #f59e0b;color:#b45309" onclick="goToPage(8)">查看錢包</button>
        </div>

        <!-- 通知 4：審核通過 -->
        <div class="list-item" style="position:relative;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:16px; box-shadow: 0 4px 12px rgba(22, 163, 74, 0.12); padding:20px">
          <div class="list-icon" style="background:#dcfce7;color:#16a34a">
            <i class="fas fa-check-circle"></i>
          </div>
          <div class="list-content" style="width:100%">
            <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:4px">
              <div class="list-title">你的影片「今日最佳穿搭」已通過品牌審核</div>
              <span style="flex-shrink:0; font-size:11px; padding:4px 10px; border-radius:999px; background:#ecfdf5; color:#166534">2 小時前</span>
            </div>
            <div class="list-subtitle">現在就分享給你的粉絲！</div>
          </div>
          <button class="btn" style="width:auto;padding:8px 12px;font-size:12px;background:white;border:1.5px solid #16a34a;color:#166534" onclick="goToPage(7)">去創作</button>
        </div>
      </div>
    </div>
  </div>

  <div class="tab-bar">
    <div class="tab-item active"><span class="tab-label">通知</span></div>
  </div>

  <!-- 通知設定（Modal） -->
  <div id="notif-settings" style="display:none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 9999; align-items: center; justify-content: center" onclick="if(event.target===this) this.style.display='none'">
    <div style="background: white; border-radius: 20px; padding: 20px; margin: 20px; max-width: 360px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.3)" onclick="event.stopPropagation()">
      <div style="display:flex; align-items:center; justify-content: space-between; margin-bottom: 12px">
        <div style="font-size: 18px; font-weight: 800; color: #1e293b">通知設定</div>
        <button onclick="document.getElementById('notif-settings').style.display='none'" style="background:none; border:none; color:#64748b; cursor:pointer"><i class="fas fa-times"></i></button>
      </div>
      <div style="display: grid; gap: 10px">
        <!-- 一般使用者 -->
        <div style="font-size: 12px; color: #64748b; margin-top: 4px">一般使用者</div>
        <label style="display:flex; align-items:center; justify-content:space-between; gap:12px; background:#f8fafc; border-radius:12px; padding:12px">
          <div style="display:flex; align-items:center; gap:10px"><i class="fas fa-user-friends" style="color:#6366f1"></i><span style="font-size:14px; font-weight:700; color:#1e293b">關注的人發佈新貼文</span></div>
          <input id="ntf-following-post" type="checkbox" style="width:22px;height:22px; accent-color:#6366f1">
        </label>
        <label style="display:flex; align-items:center; justify-content:space-between; gap:12px; background:#f8fafc; border-radius:12px; padding:12px">
          <div style="display:flex; align-items:center; gap:10px"><i class="fas fa-store" style="color:#8b5cf6"></i><span style="font-size:14px; font-weight:700; color:#1e293b">關注品牌發文／新品上架</span></div>
          <input id="ntf-brand-post-product" type="checkbox" style="width:22px;height:22px; accent-color:#6366f1">
        </label>
        <label style="display:flex; align-items:center; justify-content:space-between; gap:12px; background:#f8fafc; border-radius:12px; padding:12px">
          <div style="display:flex; align-items:center; gap:10px"><i class="fas fa-heart" style="color:#ef4444"></i><span style="font-size:14px; font-weight:700; color:#1e293b">留言被按讚</span></div>
          <input id="ntf-comment-liked" type="checkbox" style="width:22px;height:22px; accent-color:#6366f1">
        </label>
        <label style="display:flex; align-items:center; justify-content:space-between; gap:12px; background:#f8fafc; border-radius:12px; padding:12px">
          <div style="display:flex; align-items:center; gap:10px"><i class="fas fa-eye" style="color:#0ea5e9"></i><span style="font-size:14px; font-weight:700; color:#1e293b">有人查看你的個人檔案</span></div>
          <input id="ntf-profile-viewed" type="checkbox" style="width:22px;height:22px; accent-color:#6366f1">
        </label>

        <!-- 大使 -->
        <div style="font-size: 12px; color: #64748b; margin-top: 12px">品牌大使</div>
        <label style="display:flex; align-items:center; justify-content:space-between; gap:12px; background:#fef3c7; border:1px solid #fde68a; border-radius:12px; padding:12px">
          <div style="display:flex; align-items:center; gap:10px"><i class="fas fa-cash-register" style="color:#d97706"></i><span style="font-size:14px; font-weight:700; color:#78350f">當你賣出商品</span></div>
          <input id="ntf-amb-sell" type="checkbox" style="width:22px;height:22px; accent-color:#f59e0b">
        </label>
        <label style="display:flex; align-items:center; justify-content:space-between; gap:12px; background:#fef3c7; border:1px solid #fde68a; border-radius:12px; padding:12px">
          <div style="display:flex; align-items:center; gap:10px"><i class="fas fa-chart-line" style="color:#d97706"></i><span style="font-size:14px; font-weight:700; color:#78350f">瀏覽數里程碑</span><span style="font-size:12px; color:#b45309">（1-10 都通知；之後 50/100/200/500）</span></div>
          <input id="ntf-amb-views" type="checkbox" style="width:22px;height:22px; accent-color:#f59e0b">
        </label>
        <label style="display:flex; align-items:center; justify-content:space-between; gap:12px; background:#fef3c7; border:1px solid #fde68a; border-radius:12px; padding:12px">
          <div style="display:flex; align-items:center; gap:10px"><i class="fas fa-bullhorn" style="color:#d97706"></i><span style="font-size:14px; font-weight:700; color:#78350f">你買過的類別有新品</span></div>
          <input id="ntf-amb-category-new" type="checkbox" style="width:22px;height:22px; accent-color:#f59e0b">
        </label>
        <div id="ambassador-hint" style="display:none; font-size:12px; color:#b45309; margin-top:4px">僅限品牌大使可調整，成為大使後即可開啟</div>
      </div>
    </div>
  </div>
</div>

<script>
 function markAllRead(){
   alert('已將所有通知標記為已讀');
 }

 document.getElementById('open-settings').addEventListener('click', function(){
   document.getElementById('notif-settings').style.display = 'flex';
 });

 const isAmbassador = true; // 若非大使請改為 false 測試

 function shouldNotifyViews(count){
   if (count <= 10) return true;
   return [50,100,200,500].includes(count);
 }

 const storageKey = 'ft_notification_settings_v1';
 const defaults = {
   followingPost: true,
   brandPostOrProduct: true,
   commentLiked: true,
   profileViewed: true,
   ambSell: true,
   ambViews: true,
   ambCategoryNew: true
 };

 function loadSettings(){
   try {
     const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
     return { ...defaults, ...(saved||{}) };
   } catch(e){ return { ...defaults }; }
 }

 function saveSettings(s){
   localStorage.setItem(storageKey, JSON.stringify(s));
 }

 function initSettingsUI(){
   const s = loadSettings();
   const $ = (id)=>document.getElementById(id);
   $('#ntf-following-post').checked = !!s.followingPost;
   $('#ntf-brand-post-product').checked = !!s.brandPostOrProduct;
   $('#ntf-comment-liked').checked = !!s.commentLiked;
   $('#ntf-profile-viewed').checked = !!s.profileViewed;
   $('#ntf-amb-sell').checked = !!s.ambSell;
   $('#ntf-amb-views').checked = !!s.ambViews;
   $('#ntf-amb-category-new').checked = !!s.ambCategoryNew;

   const ambControls = ['ntf-amb-sell','ntf-amb-views','ntf-amb-category-new'].map($);
   const hint = document.getElementById('ambassador-hint');
   ambControls.forEach((el)=>{ el.disabled = !isAmbassador; el.style.cursor = isAmbassador ? 'pointer' : 'not-allowed'; });
   hint.style.display = isAmbassador ? 'none' : 'block';

   ['ntf-following-post','ntf-brand-post-product','ntf-comment-liked','ntf-profile-viewed','ntf-amb-sell','ntf-amb-views','ntf-amb-category-new'].forEach((id)=>{
     const el = $(id);
     el?.addEventListener('change', ()=>{
       const cur = loadSettings();
       const map = {
         'ntf-following-post':'followingPost',
         'ntf-brand-post-product':'brandPostOrProduct',
         'ntf-comment-liked':'commentLiked',
         'ntf-profile-viewed':'profileViewed',
         'ntf-amb-sell':'ambSell',
         'ntf-amb-views':'ambViews',
         'ntf-amb-category-new':'ambCategoryNew'
       };
       const key = map[id];
       cur[key] = !!el.checked;
       saveSettings(cur);
     });
   });
 }

 initSettingsUI();
 window.ftNotify = { shouldNotifyViews };
</script>
`;

// ---- 安全啟動：確保按鈕可點與設定初始化（避免 innerHTML 的 <script> 未執行）
(function bootstrapNotificationPage() {
  const pageRoot = document.getElementById("page-19");
  if (!pageRoot) return;
  const container = pageRoot.querySelector(".phone-container");
  const openBtn = container?.querySelector("#open-settings");
  const modal = container?.querySelector("#notif-settings");

  if (openBtn && modal) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  }

  // 對外通知工具（若尚未定義）
  if (!window.ftNotify) {
    window.ftNotify = {
      shouldNotifyViews(count) {
        if (count <= 10) return true;
        return [50, 100, 200, 500].includes(count);
      },
    };
  }

  // 設定初始化（若 inline 腳本未執行時）
  const storageKey = "ft_notification_settings_v1";
  const defaults = {
    followingPost: true,
    brandPostOrProduct: true,
    commentLiked: true,
    profileViewed: true,
    ambSell: true,
    ambViews: true,
    ambCategoryNew: true,
  };
  function loadSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
      return { ...defaults, ...(saved || {}) };
    } catch (e) {
      return { ...defaults };
    }
  }
  function saveSettings(s) {
    localStorage.setItem(storageKey, JSON.stringify(s));
  }

  const isAmbassador = true; // 如需串接權限，改為真實判斷

  function initSettingsUI() {
    const s = loadSettings();
    const $ = (id) => container?.querySelector(`#${id}`);
    const ids = [
      "ntf-following-post",
      "ntf-brand-post-product",
      "ntf-comment-liked",
      "ntf-profile-viewed",
      "ntf-amb-sell",
      "ntf-amb-views",
      "ntf-amb-category-new",
    ];
    const keyMap = {
      "ntf-following-post": "followingPost",
      "ntf-brand-post-product": "brandPostOrProduct",
      "ntf-comment-liked": "commentLiked",
      "ntf-profile-viewed": "profileViewed",
      "ntf-amb-sell": "ambSell",
      "ntf-amb-views": "ambViews",
      "ntf-amb-category-new": "ambCategoryNew",
    };

    // 綁定與事件
    ids.forEach((id) => {
      const el = $(id);
      if (!el) return;
      const key = keyMap[id];
      el.checked = !!s[key];
      el.addEventListener("change", () => {
        const cur = loadSettings();
        cur[key] = !!el.checked;
        saveSettings(cur);
      });
    });

    // 大使權限
    const ambControls = [
      $("ntf-amb-sell"),
      $("ntf-amb-views"),
      $("ntf-amb-category-new"),
    ];
    const hint = container?.querySelector("#ambassador-hint");
    ambControls.forEach((el) => {
      if (!el) return;
      el.disabled = !isAmbassador;
      el.style.cursor = isAmbassador ? "pointer" : "not-allowed";
    });
    if (hint) hint.style.display = isAmbassador ? "none" : "block";
  }

  // 若設定區元素存在就初始化
  if (container?.querySelector("#ntf-following-post")) {
    initSettingsUI();
  }
})();
