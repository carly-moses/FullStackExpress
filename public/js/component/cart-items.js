"use strict";
// Update the CartService to call all four of your API endpoints. Add the methods
// addItem(item), removeItem(id), and updateItem(item).
// 6. Expand the UI to handle each of these new operations.
// a. Submit the form to add an item.
// b. Click the “x” to remove an item.
// c. Change the quantity.
const cartItems = {
  template: `
  <section class="container">
    <div class="logo">
      <img src="css/images/shoppingcart.jpg">
      <h1>Food Inc.</h1>
    </div>

    <h3>Carly's Cart</h3>

    <div class="cartlist">
      <form ng-submit="$ctrl.addItem($ctrl.item);">
        <h2>What sounds delicious?</h2>
        <input class="add" type="text" placeholder="Product" ng-model="$ctrl.item.product">
        <input class="add" type="text" placeholder="Price" ng-model="$ctrl.item.price">
        <input class="add" type="text" placeholder="Quantity" ng-model="$ctrl.item.quantity">
        <button>Add Item</button>
      </form>

      <div class="item-container">
        <div ng-repeat="item in $ctrl.items">
          <div class="item">
            <i ng-click="$ctrl.removeItem(item.id);" class="material-icons">close</i>
            <p>Product: {{item.product}}</p>
            <p>Price: {{item.price | currency}}</p>
            <p>Quantity: <input class="quantity" ng-blur="$ctrl.updateItem(item);" ng-model="item.quantity"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,

  controller: ["CartService", function(CartService) {
    const vm = this;

    CartService.getAllItems().then((response)=>{
      vm.items = response.data;
    });

    vm.addItem = (item) => {
      CartService.addItem(item).then((response)=>{
        vm.items = response.data;
      });
      vm.item = {}; 
    };

    vm.updateItem = (item) =>{
      CartService.updateItem(item).then((response)=>{
        vm.items = response.data; 
      });
    };
    
    vm.removeItem = (id) =>{
      CartService.removeItem(id).then((response)=>{
        vm.items = response.data; 
      });
    };
  }]
};

angular
  .module("cartApp")
  .component("cartItems", cartItems);