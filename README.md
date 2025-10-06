# FlipTok UI Design - 完整重構版

## 專案概述

FlipTok 是一個品牌大使社群平台，整合了購物、創作、社交等功能。

### 角色系統

專案現已分為三個獨立的角色入口：

1. **使用者/大使端** (`user-ambassador-index.html`)

   - 一般使用者：瀏覽、購物
   - 品牌大使：創作影片、賺取收益

2. **品牌後台** (`brand-index.html`)

   - 審核大使創作內容
   - 與大使聊天溝通
   - 查看品牌收益報表
   - 管理商品與促銷

3. **平台管理後台** (`admin-index.html`)
   - 創建品牌帳號（標註創建者）
   - 管理所有品牌
   - 查看平台整體收益
   - 審核內容與用戶

## 主要功能

### 使用者/大使功能

- ✅ 註冊後播放迎賓影片
- ✅ 品牌選擇與興趣設定（可略過，設定需導向付費）
- ✅ 商品彈跳視窗（Add to Bag / Buy Now）
- ✅ 首次購買綁定信用卡，後續一鍵下單
- ✅ 品牌 Logo 點擊進入品牌主頁
- ✅ 關注名單（附取消關注功能）
- ✅ 問卷調查（在設定中）
- ✅ 權限控制：只有大使能創作
- ✅ 影片拍攝編輯工具（限制時長 60 秒，含濾鏡、剪輯、文字、貼圖等功能）
- ✅ 大使與品牌聊天室
- ✅ 購買後可晉升為品牌大使
- ✅ 大使選擇品牌直接付費，無需審核
- ✅ 大使上傳影片需品牌或平台審核

### 品牌後台功能

- ✅ 審核大使創作內容
- ✅ 大使列表管理
- ✅ 與大使聊天室
- ✅ 品牌收益報表
- ✅ 商品管理
- ✅ 促銷活動管理

### Admin 後台功能

- ✅ 創建品牌帳號（標註創建者與負責人）
- ✅ 品牌列表管理
- ✅ 平台整體收益查看
- ✅ 用戶管理
- ✅ 內容審核
- ✅ 系統設定

## 📋 完整流程順序（已按講解順序排列）

### 1️⃣ 註冊登入流程

1. **page-01-welcome.js** - 歡迎頁（Google/Apple 登入）
2. **page-01a-welcome-video.js** ⭐ - 迎賓影片

### 2️⃣ 品牌與興趣選擇

3. **page-02-brand-select.js** ✏️ - 選擇品牌（可略過）
4. **page-03-interests.js** - 選擇興趣

### 3️⃣ 付費與綁定流程

5. **page-02a-payment.js** ⭐ - 解鎖完整體驗（付費頁面）
6. **page-02b-card-binding.js** ⭐ - 綁定付款方式

### 4️⃣ 購物體驗

7. **page-04-feed-cards.js** - 首頁 Feed
8. **page-04a-product-modal.js** ⭐ - 商品彈窗（Add to bag / Buy Now）
9. **page-05-feed-fullscreen.js** - 全螢幕 Feed
10. **page-12-shopping.js** - 購物頁面
11. **page-06-explore.js** - 探索頁

### 5️⃣ 大使升級

12. **page-10b-upgrade-ambassador.js** ⭐ - 恭喜你（升級大使確認）

### 6️⃣ 創作功能

13. **page-07-create.js** ✏️ - 創作頁（權限控制）
14. **page-07a-video-editor.js** ⭐ - 影片編輯工具（60 秒限制）

### 7️⃣ 大使專屬功能

15. **page-10-ambassador.js** - 大使功能
16. **page-10a-ambassador-chat.js** ⭐ - 大使聊天室
17. **page-11-analytics.js** - 數據分析

### 8️⃣ 個人中心與設定

18. **page-09-profile.js** ✏️ - 個人資料（添加設定入口）
19. **page-09a-following-list.js** ⭐ - 關注名單
20. **page-09b-survey.js** ⭐ - 問卷調查
21. **page-08-wallet.js** - 錢包

### 9️⃣ 社群與品牌功能

22. **page-13-invite.js** - 邀請好友
23. **page-15-leaderboard.js** - 排行榜
24. **page-16-brand-hub.js** - 品牌中心
25. **page-17-brand-pages.js** - 品牌頁面
26. **page-14-brand-admin.js** - 品牌管理

---

## 新增頁面功能詳細說明

### 🆕 使用者/大使端新增頁面（9 頁）

1. **page-01a-welcome-video.js** - 迎賓影片頁

   - 註冊成功後自動播放
   - 介紹平台功能與特色
   - 精美動畫與權益說明

2. **page-02a-payment.js** - 付費頁面

   - 月付/年付方案選擇
   - 會員權益展示
   - 可選擇略過繼續瀏覽

3. **page-02b-card-binding.js** - 信用卡綁定

   - 安全的信用卡資訊輸入
   - 支援 Visa / Mastercard
   - 加密儲存提示

4. **page-04a-product-modal.js** - 商品彈窗

   - Add to bag（加入購物車）
   - Buy Now（立即購買）
   - 品牌 Logo 可點擊進入品牌主頁
   - 尺寸、數量選擇
   - 商品詳情與評價

5. **page-07a-video-editor.js** - 影片拍攝編輯工具

   - 60 秒時長限制提示
   - 濾鏡、美顏、速度調整
   - 剪輯、文字、貼圖、音效
   - 即時錄製畫面預覽

6. **page-09a-following-list.js** - 關注名單

   - 品牌與大使分類顯示
   - 一鍵取消關注功能
   - 統計資訊展示

7. **page-09b-survey.js** - 問卷調查

   - 多種題型（單選、複選、填空）
   - 進度條顯示
   - 完成送購物金獎勵

8. **page-10a-ambassador-chat.js** - 大使聊天室

   - 與品牌即時溝通
   - 訊息記錄與通知
   - 圖片/產品卡片分享
   - 輸入中狀態顯示

9. **page-10b-upgrade-ambassador.js** - 升級大使確認
   - 大使權益詳細說明
   - 升級條件展示
   - 精美動畫效果
   - 一鍵前往購物

## 專案結構

```
fliptok_ui_design/
├── index.html                    # 主入口（三個角色選擇）
├── user-ambassador-index.html    # 使用者/大使端（26 頁）
├── brand-index.html              # 品牌後台（9 頁）
├── admin-index.html              # 平台管理後台（8 頁）
├── pages/                        # 使用者/大使頁面 (17 原頁 + 9 新頁)
│   ├── page-01-welcome.js
│   ├── page-01a-welcome-video.js         ⭐ 新增
│   ├── page-02-brand-select.js           ✏️ 已修改
│   ├── page-02a-payment.js               ⭐ 新增
│   ├── page-02b-card-binding.js          ⭐ 新增
│   ├── page-03-interests.js
│   ├── page-04-feed-cards.js
│   ├── page-04a-product-modal.js         ⭐ 新增
│   ├── page-05-feed-fullscreen.js
│   ├── page-06-explore.js
│   ├── page-07-create.js                 ✏️ 已修改
│   ├── page-07a-video-editor.js          ⭐ 新增
│   ├── page-08-wallet.js
│   ├── page-09-profile.js                ✏️ 已修改
│   ├── page-09a-following-list.js        ⭐ 新增
│   ├── page-09b-survey.js                ⭐ 新增
│   ├── page-10-ambassador.js
│   ├── page-10a-ambassador-chat.js       ⭐ 新增
│   ├── page-10b-upgrade-ambassador.js    ⭐ 新增
│   ├── page-11-analytics.js
│   ├── page-12-shopping.js
│   ├── page-13-invite.js
│   ├── page-14-brand-admin.js
│   ├── page-15-leaderboard.js
│   ├── page-16-brand-hub.js
│   └── page-17-brand-pages.js
├── brand-pages/                  # 品牌後台頁面 (9頁)
│   ├── page-01-login.js
│   ├── page-02-dashboard.js
│   ├── page-03-content-review.js
│   ├── page-04-ambassador-list.js
│   ├── page-05-chat.js
│   ├── page-06-revenue.js
│   ├── page-07-products.js
│   ├── page-08-promotions.js
│   └── page-09-settings.js
├── admin-pages/                  # Admin後台頁面 (8頁)
│   ├── page-01-login.js
│   ├── page-02-dashboard.js
│   ├── page-03-create-brand.js
│   ├── page-04-brands.js
│   ├── page-05-revenue.js
│   ├── page-06-users.js
│   ├── page-07-content.js
│   └── page-08-settings.js
├── app.js                        # 全域導航功能
└── styles.css                    # 全域樣式

總計：43 個精心設計的頁面
- ⭐ 9 個新增頁面
- ✏️ 3 個修改頁面
```

## 本地開發

### 使用 Bun

```bash
bunx serve -l 5173
```

### 或使用任何 HTTP 伺服器

```bash
bunx serve -l 5173
```

然後訪問：

- 主入口：http://localhost:5173
- 使用者/大使：http://localhost:5173/user-ambassador-index.html
- 品牌後台：http://localhost:5173/brand-index.html
- Admin 後台：http://localhost:5173/admin-index.html

## 構建

```bash
bun install
bun run build
bun run preview
```

## 技術棧

- **前端框架**: Vanilla JavaScript (模組化設計)
- **CSS 框架**: Tailwind CSS (CDN)
- **圖標**: Font Awesome 6.5.1
- **構建工具**: Vite
- **包管理器**: Bun

## 設計特色

1. **角色分離**: 三個獨立的角色入口，清晰的權限控制
2. **現代 UI**: 漸層色彩、卡片設計、流暢動畫
3. **響應式設計**: 手機優先的設計理念
4. **互動體驗**: 豐富的互動效果和狀態反饋
5. **完整流程**: 從註冊到付費到創作的完整用戶旅程

## 主要改進

- ✅ 將迎賓影片移至註冊後
- ✅ 品牌選擇和興趣設定可略過
- ✅ 商品購買流程優化（首次綁卡，後續快速下單）
- ✅ 問卷功能整合至設定中
- ✅ 只有大使可創作的權限控制
- ✅ 影片編輯工具帶時長限制
- ✅ 品牌與大使的聊天室功能
- ✅ 完整的角色系統架構

## 授權

All rights reserved.
