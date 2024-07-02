# rn-assignment6-11302223

In this project, I split up both the Cart Screen and the Home Screen into parts to help me easily identify and rectify errors when they occur. 

# Home Screen
The Home Screen consists of the Header, OurStory, Products and HomeScreen javascript files.
## Header.js
The Header.js file contains the code for the header of the Home Screen. It contains the menu, logo, search and shopping bag icons.
## OurStory.js
This file contains the text 'OUR STORY' as in the UI mockup, the ListView and Filter icons.
## Products.js
This file contains the list of products in the app.
## HomeScreen.js
This file is just the compilation of all the other files. It makes up the actual home screen.


# Cart Screen
I programmed the shopping bag icon on the Home Screen to take me to the cart screen since it was the closest thing from the icons provided in the assets folder of the google drive that represented a checkout section. 

The Cart Screen consists of the Header, Checkout, Footer and CartScreen javascript files.
## Header.js
The Header.js file contains the code for the header of the Cart Screen. It contains the logo(which also serves as a navigation since there was no back button), search, the page title text('CHECKOUT'), and an image of a border I created myself to mimic the border in the UI mockup.
## Checkout.js
This renders the items in the Home Screen so when products are added to cart from the home screen, they appear on the cart screen. it also allows a user to delete items from the cart screen.
## Footer.js
This file contains the checkout button, and displays the estimated sum of the products added to the cart screen
## CartScreen.js
This file is the compilation of all the other files in the CartScreen folder to form the actual cart screen.
## CartContext.js
In CartContext.js, I utilized React's Context API and useReducer hook to handle the cart Screen's state. I used AsyncStorage to store and retrieve the data in the cart in such a way that even if the app is closed and opened again later on, the items added to the cart will still be in the cart

# Overview(Summary)
This app is wired in such a way that the Home Screen displays a list of available products that can be added to cart. The Cart Screen displays the items that have been added to cart from the Home Screen. The products in the cart screen can be removed. Below are screenshots of the app:

## Screenshots of the App
### HomeScreen
![IMG-20240702-WA0001](https://github.com/ewurafuaa/rn-assignment6-11302223/assets/170051346/48d42202-eafd-4041-a9d4-b32b9c1974b7)

![IMG-20240702-WA0004](https://github.com/ewurafuaa/rn-assignment6-11302223/assets/170051346/2a5f6f4e-a9dd-4266-a94e-43c03e903c1a)
### Cart Screen
![IMG-20240702-WA0005](https://github.com/ewurafuaa/rn-assignment6-11302223/assets/170051346/b2b34dc1-039d-4e4b-8905-567dd3a1a967)

![IMG-20240702-WA0003](https://github.com/ewurafuaa/rn-assignment6-11302223/assets/170051346/7e01b07b-1903-4799-b1b1-ba7d939f6142)

![IMG-20240702-WA0002](https://github.com/ewurafuaa/rn-assignment6-11302223/assets/170051346/d0ec6c90-ac4c-4cb2-9276-1444c28fa6ca)

![IMG-20240702-WA0006](https://github.com/ewurafuaa/rn-assignment6-11302223/assets/170051346/52ea2a91-5646-4a9d-99a4-4cdedfc83d79)

