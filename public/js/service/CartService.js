"use strict";
function CartService($http) {
  
  const getAllItems = () => {
    return $http({
      method: "GET",
      url: "/portal/cart-items"
    });
  };

  const addItem = (item) => {
    return $http({
      method: "POST",
      url: "/portal/cart-items",
      data: item
    });
  };

  const removeItem = (id) =>{
    return $http({
      method: "DELETE",
      url: "/portal/cart-items/" + id,
    });
  };

  const updateItem = (item) => {
    return $http({
      method: "PUT",
      url: "portal/cart-items/" + item.id,
      data: item
    });
  };

  return {
      getAllItems,
      addItem,
      removeItem,
      updateItem
  };
};

angular
  .module("cartApp")
  .factory("CartService", CartService);