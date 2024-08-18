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
- 簡易的Bootstrap功能，無製作RWD
- 結帳後將購物車狀態及優惠券使用狀態打API出去

# 登入
帳號請輸入
```
eve.holt@reqres.in
```
密碼隨意輸入即可
> [!WARNING]
> 需要登入後才能將商品置入購物車，否則會跳轉至登入頁面

