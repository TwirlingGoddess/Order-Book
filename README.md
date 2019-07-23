# Order-Book

```npm install```  to download the app

```cd orderBook```  to enter the app file

```npm start```    to run the app

## Instructions
Create a web application using ReactJS, Redux and WebPack. Do not use ​create-react-app ​or other similar tools. The app should only have one page.
You can create a repository and send the link or zip the file - Do not include node_modules.

## Order Book Trading
An ​order book​ is a list of orders indexed by ​price level ​that an exchange platform uses to record the interest of buyers and sellers. An entry in the book can be a ​buy order​ (bid) or a ​sell order (ask) and contains information about the price and quantity of the asset being traded. An ​order book row​ corresponds to a price level and may consist of several orders grouped within that price level.

There are two fundamental ways to execute an order: ​market​ and ​limit​. A ​market order​ is expected to execute as quickly as possible at the last traded price. On the other hand, a ​limit order​ indicates the minimum selling or maximum buying price. A limit order is executed only if the matched order is equal to or higher than the minimum selling price OR equal to or lower than the maximum buying price.

A ​trade-matching engine ​uses the order book such that interests of buyers and sellers are satisfied and orders are matched.
A ​spread i​ s the difference between the lowest ask and the highest bid.
A sample visual representation of an order book for trading Bitcoin (BTC) with Tether (USDT) is
shown in the following figure:

![image](https://github.com/TwirlingGoddess/Order-Book/blob/master/Screen%20Shot%202019-02-27%20at%203.44.39%20AM.png)

 [Source](https://upcoin.com/trade/BTC-USDT)
 
 The ​Price​ column indicates bids (in green text) and asks (in red). Orders are grouped within the same price level based on price values with decimal places truncated to 5 significant figures (Grouping: 0.00001). The volume of the total order is shown instead of that of individual orders, Total​ for each price level is indicated. ​Amount​ corresponds to the volume that is already fulfilled.


## Here are your tasks for this exercise.
### Task 1: Displaying user information and balance
Create a ​React​ component that displays the user’s name and balance for ​Philippine Peso (PHP) and the cryptocurrency ​TestCoin (TCN).
The balances for ​PHP​ and ​TCN​ should be updated when a user places an order or when an order is filled.
The data for the user is in the text/json file attached to the email.
![coin-landing](https://github.com/TwirlingGoddess/Order-Book/blob/master/coin-landing.png "coin-landing")

### Task 2: Displaying an order book
Createa​React​componentthatdisplaysthe​bids​and​asks.​ Thecomponentshouldhavea vertically displayed list that is divided into two. The upper half should contain the ​asks​ while the bottom half should display the ​bids​. The list should be separated by a box that displays the spread​ of the order book.
The orders on the ​ask s​ ection should be sorted from lowest to highest (bottom to top, starting from the middle), while the orders on the ​bids ​should be displayed from highest to lowest (top to bottom).
Use the text/json file attached to the email as the initial content of the order book.
![bids:asks](https://github.com/TwirlingGoddess/Order-Book/blob/master/bids:asks.png "bids:asks")

### Task 3: Creating a Form for Placing a Limit Order.
Create a form that will allow users to input and submit their order. The form should have the following controls:
- Type (Dropdown with two items, ​Buy (Bid) a​ nd ​Sell (Ask)​)
- Price (Input)
- Volume (Input)
- Total (Input)
- Submit (Button)
The user should be able to input the​ price​, ​volume​ and ​total​. Changing the ​total​ should only compute and change the volume.

### Task 4: Executing the Order
Upon submitting the order, the order book and the user’s account balance should be updated.
A limit order that has no matches on the order book should be added to the list. A limit sell order should be matched with a ​bid​ price that is equal to or greater than the order’s price. A limit buy order should be matched with an ​ask​ ​price ​that is equal to or less than the order’s price.
![update user](https://github.com/TwirlingGoddess/Order-Book/blob/master/update%20user.png "update user")

### Task 5: Displaying Open and Closed Orders
Create a React component that will display the user’s closed and open orders. Open and closed order lists should display the following columns:
- Price
- Volume
- Type (bid or ask)
Closed orders​ are orders that are already filled; ​Open orders​ are orders that have not yet been matched
![closed](https://github.com/TwirlingGoddess/Order-Book/blob/master/closed.png "closed")
