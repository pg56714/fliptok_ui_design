window.addEventListener("DOMContentLoaded", () => {
  try {
    // 檢查樣式是否載入
    const hasStyles = Array.from(document.styleSheets).some(
      (s) =>
        (s.href || "").includes("styles") || (s.href || "").includes("main")
    );
    if (!hasStyles) {
      const cssWarn = document.createElement("div");
      cssWarn.style.cssText =
        "position:fixed;top:8px;left:8px;right:8px;background:#fee2e2;border:1px solid #fecaca;color:#991b1b;padding:10px 12px;border-radius:8px;font-family:system-ui,Segoe UI,Inter,sans-serif;font-size:12px;z-index:9999;";
      cssWarn.innerHTML =
        "樣式未載入（styles.css）。請確認檔案存在於與 index.html 同一資料夾，或以本機 http 伺服器開啟而非直接 file://。";
      document.body.appendChild(cssWarn);
      console.error("FlipTok debug: styles.css not loaded");
    }

    // 檢測當前是哪個系統（用戶端、品牌端或管理端）
    let pagePrefix = "page";
    let pageCount = 17;

    if (document.getElementById("brand-01")) {
      pagePrefix = "brand";
      pageCount = 8; // 品牌後台共 8 頁
    } else if (document.getElementById("admin-01")) {
      pagePrefix = "admin";
      pageCount = 6; // 管理後台共 6 頁
    }

    const ids = Array.from(
      { length: pageCount },
      (_, i) => `${pagePrefix}-${String(i + 1).padStart(2, "0")}`
    );
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
  } catch (err) {
    console.error("FlipTok debug error:", err);
    const errBox = document.createElement("pre");
    errBox.textContent = String(err?.message || err);
    document.body.appendChild(errBox);
  }
});
