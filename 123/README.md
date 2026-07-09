# Barfinder

一個可部署、可分享的靜態網頁：用戶選擇城市和區域，像問朋友一樣輸入「我大概想喝什麼 / 想要什麼氛圍」，系統把自然語言轉成 vibe intent，並用 agent 口吻回答去哪、為什麼、有哪些備選。

## 使用方式

本地預覽：

```bash
npm run start
```

然後打開：

```text
http://127.0.0.1:8123
```

如果要啟用 Gemini 來更精準理解需求，把 API key 放在本機環境變數裡再啟動：

```bash
export GEMINI_API_KEY="你的 key"
npm run start
```

或者直接在專案根目錄建立 `.env`：

```text
GEMINI_API_KEY=你的 key
```

API key 只會被 `server.mjs` 在本機後端讀取，不會寫進前端頁面；`.env` 已加入 `.gitignore`。沒有設定 key 時，系統會自動回退到原本的本地規則解析。

左側選擇城市、目前區域和搜尋半徑，輸入你今晚大概想喝的；點「問 Agent」後右側會輸出：

- 一段自然語言 agent 答覆
- 目前城市、區域與搜尋半徑
- 自然語言需求，例如「想找安靜一點、能好好聊天的調酒」
- 附近推薦酒吧列表
- 推薦原因、匹配 vibe、評論證據
- 可複製的分享連結
- 折疊的 JSON 調試輸出

## 內置資料

目前內置樣例資料在 `data.js`：

- 4 個城市：上海、北京、深圳、杭州
- 20 個區域
- 120 家樣例酒吧
- 每家酒吧包含 `title` 和大众点评搜索入口 `dianpingUrl`

這批資料仍是產品原型用的 mock data，不是真實營業資料；後續可以把 `data.js` 換成真實資料導出。

## 分享方式

點左側工具列的分享按鈕會複製目前查詢的連結。連結裡包含：

- `q`：用戶輸入
- `city`：城市
- `area`：目前區域
- `radius`：搜尋半徑

別人打開同一條連結時，會看到相同的推薦條件與結果。

## 部署給朋友使用

接入 Gemini 後，這不再是純靜態站：前端需要呼叫 `/api/intent`，由後端安全讀取 `GEMINI_API_KEY`。推薦部署到 Netlify，不建議用 GitHub Pages 做正式版本，因為 GitHub Pages 不能安全保存後端 API key。

### Netlify

1. 把此資料夾推到 GitHub，或連接 Netlify。
2. 在 Netlify Site settings → Environment variables 加入：

```text
GEMINI_API_KEY=你的 key
```

3. 重新部署。`netlify.toml` 會把 `/api/intent` 轉到 `netlify/functions/intent.mjs`。

### 私人使用

這個站不是登入制，只是 `robots.txt` 已設定不讓搜尋引擎收錄。真正只給朋友使用時，最簡單是使用 Netlify 的密碼保護、邀請制或預覽部署網址；不要把 Gemini key 寫進任何前端檔案。

## 說明

目前使用前端規則引擎和 mock 酒吧資料模擬完整流程：

1. 從用戶輸入抽取 intent tags。
2. 對每間酒吧的評論套用 vibe taxonomy。
3. 用 `bar_tag_score = Σ(confidence × polarity_sign) / sqrt(評論總數)` 得到標籤分數。
4. 結合匹配度與 mock 距離，輸出附近推薦。

接入真實產品時，可以把 `bars` mock 資料換成 Google Places / 自家酒吧資料庫；現在 `server.mjs` 已提供 Gemini intent parser，會把自然語言需求轉成帶權重的 vibe tags，再交給前端推薦引擎排序。
