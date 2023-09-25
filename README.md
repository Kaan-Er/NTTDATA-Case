# NTTDATA React Native Case

## Description

- This project was made according to Atomic Design and tests were written with Jest library. Saved in phone storage using React Native Async Storage.

## Used Technologies

- React Native
- Typescript
- Redux Toolkit
- Jest

## Features

- There is a Login Screen. You can log in with any fake account.

- When the application is first opened, the data is taken and limited to 12 and displayed with the help of an Flatlist.

- "https://honey-badgers-ecommerce.glitch.me/products" used api link for the products.

- On the Homepage, user can save the location. Used Google MAPS Api.

- Products added to cart and favorites are shown again when the application is reopened.

- When you click on the products, you are directed to the detail page of the products.

- Products can be added to the cart on the Product Detail page and on the Products.

- Products can be sorted with the filter on the Products.

- The total number of products in the basket is displayed on the Basket from the Bottom navigators.

- On the Basket screen, the products added to the cart are displayed. Products can be increased or decreased and deleted on this screen. It also includes the total price of these products.

- Products can be added to favorites and deleted on the Favorite screen.

- Added empty product information for Basket and Favorite pages if there is no product.

- Used Poppins Font Family.

## App Screens
<div style="display: flex; flex-direction: row;">
   <img width="300" alt="Login" src="https://github.com/Kaan-Er/NTTDATA-Case/assets/53345236/2f66fb57-13a6-47c3-b06a-22ab10d8f3c8">
   <img width="300" alt="Home" src="https://github.com/Kaan-Er/NTTDATA-Case/assets/53345236/5af26053-8a75-4ebd-817e-488e367e7516">
   <img width="300" alt="Home2" src="https://github.com/Kaan-Er/NTTDATA-Case/assets/53345236/897d088e-2d11-4ece-91dc-e9f10c4c2b2e">
</div>
<div style="display: flex; flex-direction: row;">
   <img width="300" alt="Products" src="https://github.com/Kaan-Er/NTTDATA-Case/assets/53345236/5153701b-f428-45b5-8c67-0ce516341219">
   <img width="300" alt="Products2" src="https://github.com/Kaan-Er/NTTDATA-Case/assets/53345236/15be1f64-847d-41e5-b7e8-8b2871ad8a7d">
   <img width="300" alt="ProductDetails" src="https://github.com/Kaan-Er/NTTDATA-Case/assets/53345236/ec432c7d-ffd0-4b54-8166-e293f345d205">
</div>
<div style="display: flex; flex-direction: row;">
<img width="300" alt="Favorites" src="https://github.com/Kaan-Er/NTTDATA-Case/assets/53345236/336bc1ae-123e-4621-b368-51a6ee42b9ad">
<img width="300" alt="Basket" src="https://github.com/Kaan-Er/NTTDATA-Case/assets/53345236/e058ddfd-fe37-4b96-84ef-93f5dd919ac8">
</div>

## Getting Started

To run the NTTDATA App on your local machine, follow these steps:

1. Clone this repository:

```bash
  git clone https://github.com/Kaan-Er/NTTDATA-Case
```

2. Open the project in VsCode:

```bash
   cd NTTDATA-Case
   yarn install
   cd ios
   pod install
   cd ..
   yarn start
   yarn test
```
