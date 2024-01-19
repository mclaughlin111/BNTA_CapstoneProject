![Capstone Ecommerce Marketplace Class Diagram (1)](https://github.com/mclaughlin111/BNTA_CapstoneProject/assets/47330113/1a86edd6-6ff3-4cac-8577-8d44a76f05a5)
![Website wireframe (1)](https://github.com/mclaughlin111/BNTA_CapstoneProject/assets/47330113/77a368cf-c483-4552-92f7-e07f73e33f08)



# 🗻CapstoneProject

**Description:** Digital Marketplace, a website that displays a database of products and information about them.

## MVP
- Application will display available products from a database. This includes:
  - Product Price ✅
  - Out of stock warning ✅
  - Customers are able to select products and add selection to a basket (basket state being stored on the front end) ✅
  - Confirmed order information is stored in the database ✅
  - Customer details are stored in a table, including: Name, Email, Address ✅

## Extensions
- Users can create new 'customer profiles' through the front end
- Order information is relayed to customer Email with a description of products and quantity
- Product components are branded with 'traffic light' availability levels (Green for high, Amber for medium, Red for low, Greyed Out for Out of Stock)
- Application will allow filtering of products from the database by:
  - Price
  - Category ✅
- After 'checkout,' the application allows a user to login or create a user account
- Allow Customers to Rate Products
- Allow filtering by product rating
- If the product is out of stock, display restock information
- Customers can checkout and 'Buy' their basket selection
  - Database updates according to customer orders (stock levels decrease according to orders) ✅
  - Store customers' previous orders in the database ✅
- Estimated Delivery Time (to the customer based on the given location/postcode)
- Allow Filtering by Delivery Time
- Integrate [STRIPE demo payment component](https://stripe.com/docs/stripe-js/react?locale=en-GB)

***Controllers (Users, Product , Orders)***

![Screenshot 2024-01-19 at 09 50 00](https://github.com/mclaughlin111/BNTA_CapstoneProject/assets/145545660/e583a649-4576-48c9-b98c-ccfbe2ebcd5f)

**Delivery Extensions**

- Customer can select items for priority delivery
- Customer can select items from to be delivered to a locker/hub if delivery is unsuccessful
- Customer can select items to require a delivery code (e.g. offered above a certain price)

## Links to Documentation
- [Business Case](https://github.com/mramali2/BNTA_CapstoneProject/blob/main/business_case_template.pages)
- [Risk Register](https://github.com/mramali2/BNTA_CapstoneProject/blob/main/Capstone_risk_register.xlsx)
- [User Persona](https://github.com/mramali2/BNTA_CapstoneProject/blob/main/userpersonas.png)

## Libraries Used
- [Material UI Carousel Component](https://www.npmjs.com/package/react-material-ui-carousel)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)

## Step by Step Setup Instructions
1. Clone this repository from [Rainforest Retail](https://github.com/mclaughlin111/BNTA_CapstoneProject).
2. Open 'RainforestRetail' in IntelliJ.
3. Create the database with the command: `createdb rainforest_retail`.
4. Run 'RainforestRetailApplication'.
5. Open 'rainforestretailclient'.
6. In the terminal perform: `npm i`, followed by `npm start`.
