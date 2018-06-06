"use strict";
function CartService($http) {
  // Declare the functions to make GET, POST, PUT, and DELETE requests from this service.
  const getAllItems = () => {
    return $http({
      method: "GET",
      url: "/portal/cart-items"
    });
  };

    return {
        getAllItems
    };
}

angular
  .module("cartApp")
  .factory("CartService", CartService);