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

如果要啟用 Gemini 來更精準理解需求、並用 Google Places 找真實酒吧，把 API key 放在本機環境變數裡再啟動：

```bash
export GEMINI_API_KEY="你的 key"
export GOOGLE_PLACES_API_KEY="你的 Google Places key"
npm run start
```

或者直接在專案根目錄建立 `.env`：

```text
GEMINI_API_KEY=你的 key
GOOGLE_PLACES_API_KEY=你的 Google Places key
```

API key 只會被 `server.mjs` 在本機後端讀取，不會寫進前端頁面；`.env` 已加入 `.gitignore`。沒有設定 Gemini key 時，系統會回退到本地規則解析；沒有設定 Google Places key 時，不會輸出假酒吧，只會使用 `data.js` 裡你手動加入的真實酒吧。

左側選擇城市、目前區域和搜尋半徑，輸入你今晚大概想喝的；點「問 Agent」後右側會輸出：

- 一段自然語言 agent 答覆
- 目前城市、區域與搜尋半徑
- 自然語言需求，例如「想找安靜一點、能好好聊天的調酒」
- 附近推薦酒吧列表
- 推薦原因、匹配 vibe、評論證據
- 可複製的分享連結
- 折疊的 JSON 調試輸出

## 酒吧資料

目前不再生成 mock 酒吧。推薦資料有兩個入口：

- 第一入口：`/api/bars` 在後端用 Google Places Text Search 取得真實酒吧，再交給前端排序。
- 第二入口：`data.js` 裡的 `manualBars`，之後你想手動補充朋友推薦、私藏店、或 Google 找不到的店，就照檔案裡的格式加進去。

目前城市資料包含上海、北京、深圳、杭州、香港；每個城市都有常用商圈座標，半徑可從 0.5km 到 10km 細調。

手動資料會和 Google Places 結果合併；如果同一間店有相同 `googlePlaceId` 或 `id`，手動資料會覆蓋 Google 的同欄位。

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
GOOGLE_PLACES_API_KEY=你的 Google Places key
```

3. 重新部署。`netlify.toml` 會把 `/api/intent` 和 `/api/bars` 轉到 Netlify Functions。

### 私人使用

這個站不是登入制，只是 `robots.txt` 已設定不讓搜尋引擎收錄。真正只給朋友使用時，最簡單是使用 Netlify 的密碼保護、邀請制或預覽部署網址；不要把 Gemini key 寫進任何前端檔案。

## 說明

目前使用前端規則引擎對真實候選酒吧做排序：

1. 從用戶輸入抽取 intent tags。
2. 用 Google Places 搜尋真實酒吧，並和 `data.js` 的手動酒吧合併。
3. 對每間酒吧的 Google 評論或手動評論套用 vibe taxonomy。
4. 用 `bar_tag_score = Σ(confidence × polarity_sign) / sqrt(評論總數)` 得到標籤分數。
5. 結合匹配度、Google 搜尋順位、評分與真實座標距離，輸出附近推薦。

`server.mjs` 提供 Gemini intent parser 和 Google Places bar search；部署後 API key 只存在後端環境變數裡。
