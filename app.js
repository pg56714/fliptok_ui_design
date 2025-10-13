window.addEventListener("DOMContentLoaded", () => {
  try {
    // 檢測當前是哪個系統（用戶端、品牌端或管理端）
    let pagePrefix = "page";
    let pageCount = 18;

    if (document.getElementById("brand-01")) {
      pagePrefix = "brand";
      pageCount = 10; // 品牌後台共 10 頁
    } else if (document.getElementById("admin-01")) {
      pagePrefix = "admin";
      pageCount = 7; // 管理後台共 7 頁
    }

    const ids = Array.from(
      { length: pageCount },
      (_, i) => `${pagePrefix}-${String(i + 1).padStart(2, "0")}`
    ).filter((id) => {
      // 排除已刪除的頁面（購物車功能已移除）
      return id !== "page-12" && id !== "page-13";
    });
    const missing = ids.filter((id) => {
      const el = document.getElementById(id);
      return !el || el.innerHTML.trim() === "";
    });

    if (missing.length) {
      const warn = document.createElement("div");
      warn.style.cssText =
        "position:fixed;top:8px;left:8px;right:8px;background:#fff3cd;border:1px solid #ffe69c;color:#664d03;padding:10px 12px;border-radius:8px;font-family:system-ui,Segoe UI,Inter,sans-serif;font-size:12px;z-index:9999;";
      warn.innerHTML = `有 ${
        missing.length
      } 個頁面容器尚未填入內容：${missing.join(", ")}。`;
      document.body.appendChild(warn);
      console.warn("FlipTok debug: 以下容器尚未填入內容", missing);
    }

    // 全域導覽：滾動到指定頁面容器（支援 page-XX、brand-XX、admin-XX）
    window.goToPage = function (pageNumber) {
      try {
        // 自動檢測頁面前綴
        let prefix = "page";
        if (document.getElementById("brand-01")) {
          prefix = "brand";
        } else if (document.getElementById("admin-01")) {
          prefix = "admin";
        }

        const id = `${prefix}-${String(pageNumber)
          .toString()
          .padStart(2, "0")}`;
        const el = document.getElementById(id);
        if (!el) {
          console.warn("FlipTok nav: page not found:", id);
          return;
        }
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (e) {
        console.error("FlipTok nav error:", e);
      }
    };

    // 建立統一的底部導航（五個分頁 + 中央大型＋）
    function buildTabBar(activeKey) {
      const isActive = (key) => (key === activeKey ? " active" : "");
      return `
      <div class="tab-item${isActive("home")}" onclick="goToPage(4)">
        <i class="fas fa-home tab-icon"></i>
        <span class="tab-label">首頁</span>
      </div>
      <div class="tab-item${isActive("search")}" onclick="goToPage(6)">
        <i class="fas fa-compass tab-icon"></i>
        <span class="tab-label">搜尋</span>
      </div>
      <div class="tab-item tab-plus${isActive("create")}" onclick="goToPage(7)">
        <div class="tab-plus-btn">
          <i class="fas fa-plus"></i>
        </div>
        <span class="tab-label">創作</span>
      </div>
      <div class="tab-item${isActive("notify")}" onclick="goToPage(19)">
        <i class="fas fa-bell tab-icon"></i>
        <span class="tab-label">通知</span>
      </div>
      <div class="tab-item${isActive("profile")}" onclick="goToPage(9)">
        <i class="fas fa-user tab-icon"></i>
        <span class="tab-label">我的</span>
      </div>`;
    }

    // 判斷目前頁面的預期 active（以既有 .tab-item.active 的標籤或頁碼推斷）
    function detectActiveKeyFromContainer(container) {
      try {
        const existingActive = container.querySelector(
          ".tab-bar .tab-item.active .tab-label"
        );
        const label = existingActive?.textContent?.trim();
        if (label === "首頁") return "home";
        if (label === "搜尋") return "search";
        if (label === "創作") return "create";
        if (label === "我的") return "profile";
        if (label === "通知") return "notify";
        const id = container.closest("[id]")?.id || "";
        if (/page-04/.test(id) || /page-05/.test(id)) return "home";
        if (/page-06/.test(id)) return "search";
        if (/page-07/.test(id)) return "create";
        if (/page-19/.test(id)) return "notify";
        return "profile";
      } catch (e) {
        return "home";
      }
    }

    // 掃描所有 .phone-container 內的 .tab-bar，統一替換為五分頁樣式
    function renderGlobalTabBars() {
      const bars = document.querySelectorAll(".phone-container .tab-bar");
      bars.forEach((bar) => {
        const container = bar.closest(".phone-container");
        const activeKey = detectActiveKeyFromContainer(container);
        bar.innerHTML = buildTabBar(activeKey);
      });
    }

    // 初始渲染一次（等所有頁面片段插入後再延遲執行）
    setTimeout(renderGlobalTabBars, 0);
    // 若之後有動態內容，也可手動呼叫 window.renderTabs()
    window.renderTabs = renderGlobalTabBars;
  } catch (err) {
    console.error("FlipTok debug error:", err);
    const errBox = document.createElement("pre");
    errBox.textContent = String(err?.message || err);
    document.body.appendChild(errBox);
  }
});
