///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
console.log("\nSOLUTION 1")

const summedPrice = cart.reduce((acc, food) => {
    return acc + food.price;
  }, 0);
  
  console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
console.log("\nSOLUTION 2")

function calcFinalPrice(cartTotal, couponValue, tax) {
    const cartTotalWithTax = cartTotal + (cartTotal * tax);
    const finalPrice = cartTotalWithTax - couponValue;
    return finalPrice;
  }
  
  const finalPrice = calcFinalPrice(100, 10, 0.06);
  console.log(finalPrice);

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
For the customer object on the cart page, some possible properties could be:

1. name: To store the name of the customer. This property can be of type string to hold the customer's name.
2. email: To store the email address of the customer. This property can also be of type string to hold the customer's email.
3. phoneNumber: To store the phone number of the customer. This property can be of type string to hold the customer's phone number.
4. address: To store the address of the customer. This property can be of type string to hold the customer's address.

These properties are commonly needed by restaurants to identify and communicate with their customers. 
The data types chosen for each property are strings because they are suitable for storing textual information such as names, 
email addresses, phone numbers, and addresses.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
console.log("\nSOLUTION 3")

const customer = {
    name: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "123-456-7890",
    address: "123 Main St, City, State"
  };
  
  console.log(customer)