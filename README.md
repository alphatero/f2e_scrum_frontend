# 「蛤-_-」Week3 Scrum 新手村

Demo [點擊查看](https://f2e-scrum-frontend-gamma.vercel.app/).

## 介面預覽

![介面預覽](/public/images/readme.png)

## 系統使用

### Node.js版本

`16.15.0`

### 安裝專案

```
npm install
```
### 啟動專案

```
npm start
```

### 資料夾說明
```
|-- public
	|-- images // 放置 favicon 跟非 svg 的媒體檔案。
|-- src
	|-- assets // 一般放置比較容易有變化的媒體檔案，譬如做成各種 icon 的 svg
		|-- icon 
  |-- components // 非頁面的元件，在頁面內可拆分的元件都放置這裡，若只在特別頁面使用則可開頁面名稱資料夾做分類。
	|-- constants // 放置不變的資料或者 enum 目前暫時不做特別檔案規範。
  |-- views // 頁面
		|-- index.jsx // 預設為Home
		|-- introduction
			|-- index.js
			|-- Scrum.jsx
			|--Role.jsx
			|--SprintGuide.jsx
			|--ProductBacklog.jsx
			|--SprintPoint.jsx
		|--exam
			|--index.js
			|--ProductBacklog.jsx
			|--SprintPoint.jsx
		|--chat
			|--index.js
			|--SprintDailyScrum.jsx
			|--SprintReview.jsx
			|--SprintRetro.jsx
		|--ThankYou.jsx
```

### 使用技術

- React
  使用 [Create React App](https://create-react-app.dev/) 建置專案

- 使用 [TailwindCSS](https://tailwindcss.com/) 做樣式

- 使用 [ESLint airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) 做程式碼檢查

- 使用 [clsx](https://github.com/lukeed/clsx) 做樣式拆分及條件化樣式

- 使用 [framer-motion](https://www.framer.com/motion/) 做動畫特效

- 使用 [nanoid](https://github.com/ai/nanoid) 做 id 生成

- 使用 [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) 做拖移元件


