function sortByAvailabilityAndPrice(products) {
    // Tu código aquí 👈
    let newList=[...products].sort((producta,productb)=>
    productb.inStock-producta.inStock||producta.price-productb.price)

    return newList
  }
  