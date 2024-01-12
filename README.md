![Capstone Ecommerce Marketplace Class Diagram (1)](https://github.com/mclaughlin111/BNTA_CapstoneProject/assets/47330113/1a86edd6-6ff3-4cac-8577-8d44a76f05a5)
![Website wireframe](https://github.com/mclaughlin111/BNTA_CapstoneProject/assets/47330113/9fe78911-2efc-4125-9fd1-c05fce415f04)

# __🗻CapstoneProject__
Description: Digital Marketplace, a website that displays a database of products and information about them.
## MVP
* Application will display available products from a database.
 This includes:
	
* Product Price
	* Current Product Stock Level 

* Customers are able to select products and add selection to a basket (basket state being stored on front end)

* Order information is stored in an additional table

* Customer details are stored in a table, including: Name, Email, Address 

## Extensions

* Product components are branded with 'traffic light' availability levels (Green for high, Amber for medium, Red for low, Greyed Out for Out of Stock)
* Application will allow filtering of products from the database, by:
	* Price
	* Category

	
* After 'checkout' application allows a user to login or create a user account

* Allow Customers to Rate Products
* Allow filtering by product rating


* If product is out of stock, display restock information

* Customers can checkout and 'Buy' their basket selection
	* Database updates according to customer orders (stock levels decrease according to orders)
	* Store customers previous orders in the database


* Estimated Delivery Time (to customer based on given location/postcode)
* Allow Filtering by Delivery Time


* Integrate [STRIPE demo payment component ](https://stripe.com/docs/stripe-js/react?locale=en-GB)

**"Delivery Extensions"**

* Customer can select items for priority delivery
* Customer can select items from to be delivered to a locker/hub if delivery is unsuccessful
* Customer can select items to require a delivery code (e.g. offered above a certain price)
