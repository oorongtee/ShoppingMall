# 商城與購物流程專案
![螢幕擷取畫面 2024-08-18 211208](https://github.com/user-attachments/assets/37c23c03-6cc8-4943-b8b1-aca3178bee5f)
> 本專案製作購物商城、購物車與結帳流程。

# 專案技術
- react: 18.3.1
- bootstrap: 5.3.3
- react-bootstrap: 2.10.3
- react-dom: 18.3.1
- react-redux: 9.1.2
- axios: 1.7.2
- vite: 5.2.0

# 功能
- 登入與登出：登入狀態管理 (react 的useContext)
- 抓取農糧署API資料：https://data.moa.gov.tw/open_detail.aspx?id=037
- 商品卡片陳列，分類管理
- API管理(redux)，以及將不同格式API結合
- 購物車狀態以及顯示管理(redux)
- 商品數量及價格管理(redux)
- 購物結帳流程及優惠券的條件使用 (無優惠券管理)
- 簡易的Bootstrap功能，僅部分元件製作RWD
- 結帳後將購物車狀態及優惠券使用狀態打API出去

# 開始
此專案使用Vite作為Webpacker，請確保你已經安裝了 Node.js 和 npm，並啟動Vite 開發伺服器。
```
npm run dev
```

# 登入
![螢幕擷取畫面 2024-08-22 014914](https://github.com/user-attachments/assets/7e2ba38f-6956-49e9-870f-c0baff03fb42)

這部分是打API給API host： https://reqres.in/ ，並接受response。

帳號請輸入
```
(20251021備註：apiHost Dead了，所以把接受respond這部分備註，變成可以直接登入)
```
密碼隨意輸入即可
> [!WARNING]
> 需要登入後才能將商品置入購物車，否則會跳轉至登入頁面

# 購物車
![螢幕擷取畫面 2024-08-22 015700](https://github.com/user-attachments/assets/8b2dd3df-d14c-4901-8826-a08aeb751c28)
> 請點選add to chart將商品置入購物車

![螢幕擷取畫面 2024-08-22 015828](https://github.com/user-attachments/assets/6913d619-ef35-4a46-8b95-63234c0760b1)
> 購物車可以調整商品數量，並點選checkout進入結帳流程


# 其他事項
> [!IMPORTANT]
> 由於並沒有後端協作，很多功能皆以假資料製作，而且流程也很詭異，請見諒

> [!WARNING]
> 如果購物車並無滿足條件，將無法使用優惠券，並且在結帳頁面右下方顯示"Coupon cannot be applied"

> [!WARNING]
> 農糧署API資料每日皆會更改，因此如果沒有成功抓到資料，商品價格會為0


# 特別感謝
感謝ubereat的網頁流程與設計，以及，在這段時間餵飽我

