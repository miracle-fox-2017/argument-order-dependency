'use strict'

class House {

  constructor(houseData) {
    this.address = houseData.address
    this.square_feet = houseData.square_feet
    this.num_bedrooms = houseData.num_bedrooms || 3
    this.num_baths = houseData.num_baths || 2
    this.cost = houseData.cost || 320000
    this.down_payment = houseData.down_payment || 0.20
    this.sold = houseData.sold || false
    this.short_sale = houseData.short_sale
    this.has_tenants = houseData.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g,'****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

let houseData = {
  address : 'address',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment: 12345,
  sold : true,
  short_sale : true
}

// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
const cool = new House(houseData)

cool.buy
console.log(cool.to_s())
