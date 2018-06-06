"use strict";
const cartItems = {
  //Create a template to display all the students from this class
  template: `
  <section class="container">
    <div class="logo">
      <img src="css/images/shoppingcart.jpg">
      <h1>Food Inc.</h1>
    </div>
    <h3>Carly's Cart</h3>
    <div class="cartlist">
        <div class="item-container" ng-repeat="item in $ctrl.items">
          <div class="item">
            <p>Product: {{item.product}}</p>
            <p>Price: {{item.price | currency}}</p>
            <p>Quantity: {{item.quantity}}</p>
          </div>
        </div>
      </section>
    </div>
  </section>
  `,

  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllItems().then((response)=>{
      vm.items = response.data;
    });

  }]
};

angular
  .module("cartApp")
  .component("cartItems", cartItems);