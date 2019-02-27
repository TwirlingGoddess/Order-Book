# Order-Book

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

 (Source)[https://upcoin.com/trade/BTC-USDT]
 
 The ​Price​ column indicates bids (in green text) and asks (in red). Orders are grouped within the same price level based on price values with decimal places truncated to 5 significant figures (Grouping: 0.00001). The volume of the total order is shown instead of that of individual orders, Total​ for each price level is indicated. ​Amount​ corresponds to the volume that is already fulfilled.


## Here are your tasks for this exercise.
### Task 1: Displaying user information and balance
Create a ​React​ component that displays the user’s name and balance for ​Philippine Peso (PHP) and the cryptocurrency ​TestCoin (TCN).
The balances for ​PHP​ and ​TCN​ should be updated when a user places an order or when an order is filled.
The data for the user is in the text/json file attached to the email.

### Task 2: Displaying an order book
Createa​React​componentthatdisplaysthe​bids​and​asks.​ Thecomponentshouldhavea vertically displayed list that is divided into two. The upper half should contain the ​asks​ while the bottom half should display the ​bids​. The list should be separated by a box that displays the spread​ of the order book.
The orders on the ​ask s​ ection should be sorted from lowest to highest (bottom to top, starting from the middle), while the orders on the ​bids ​should be displayed from highest to lowest (top to bottom).
Use the text/json file attached to the email as the initial content of the order book.

###
